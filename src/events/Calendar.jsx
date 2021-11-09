import React, { useState, useEffect } from 'react';
import { default as Dow } from './Dow';
import { default as VanishingSpan } from './VanishingSpan';
import { default as Frame } from './Frame';
import { default as Day } from './Day';
import { default as HoverLink } from './HoverLink';
import { daysOfWeek, toLocalStr } from '../utils/date_funcs';

function dateMatch(stateObj, day) {
  let today = new Date();
  return today.getFullYear() === stateObj.year
    && today.getMonth() === stateObj.month
    && day === today.getDate();
}

export default function ({ events }) {
  let today = new Date(), [state, setState] = useState({
    current: {
      year: today.getFullYear(),
      month: today.getMonth()
    }
  });

  useEffect(function () {
    if (events.length) {
      let nextEvent = events.filter(function (event) {
        return +event.start > new Date();
      })[0];
      setState({
        current: {
          year: nextEvent ? nextEvent.start.getFullYear() : today.getFullYear(),
          month: nextEvent ? nextEvent.start.getMonth() : today.getMonth(),
        }
      });
    }
  }, []);

  function outputRows(year, month, evts) {
    let filteredEvents = evts.filter(function (event) {
        return event.start.getFullYear() === year
        && event.start.getMonth() === month;
      }), dpm = [
        31,
        year % 4 === 0 && year % 100 !== 0 ? 29 : 28,
        31, 30, 31, 30, 31, 31, 30, 31, 30, 31
      ],
      dow = new Date(year, month, 1).getDay(), rows = [];
    rows.push([]);
    for (let g = 0; g < dow; g++) {
      rows[0].push(null);
    }
    for (let d = 0; d < dpm[month]; d++) {
      if (dow === 0 && rows.length > 0) rows.push([]);
      rows.slice(-1)[0][dow] = [(d + 1), filteredEvents.filter(function (event) {
        return event.start.getDate() === (d + 1);
      })];
      dow = (dow + 1) % 7;
    }
    if (dow > 0) {
      for (let m = dow; m < 7; m++) {
        rows[rows.length - 1][m] = null;
      }
    }
    if (dow === 0 && rows.length === 4) {
      rows.push([null, null, null, null, null, null, null]);
      rows.push([null, null, null, null, null, null, null]);
    }
    return rows;
  }

  function lastMonth() {
    if (state.current.month === 0) {
      setState({
        current: { month: 11, year: state.current.year - 1 }
      });
    } else {
      setState({
        current: {
          month: state.current.month - 1,
          year: state.current.year
        }
      });
    }
  }

  function nextMonth() {
    if (state.current.month === 11) {
      setState({ current: { month: 0, year: state.current.year + 1 } });
    } else {
      setState({
        current: {
          month: state.current.month + 1,
          year: state.current.year
        }
      });
    }
  }

  let { current } = state;

  return <Frame>
    <table style={{ maxWidth: '700px', display: 'table', marginLeft: 'auto', marginRight: 'auto' }}>
          <thead>
            <tr style={{ height: '50px', paddingBottom: '20px' }}>
              <td>
                <button
                  onClick={lastMonth}
                  style={{
                    width: '100%',
                    fontSize: '.875em',
                    fontWeight: 'bold',
                    backgroundColor: 'white'
                  }}
                > &lt;&lt; <VanishingSpan>PREVIOUS MONTH</VanishingSpan>
                </button>
              </td>
              <td style={{ textAlign: 'center' }}
                className="month__name" colSpan='5'>
                {`${['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November',
                  'December'][current.month]} ${current.year}`}
              </td>
              <td>
              <button
                onClick={nextMonth}
                style={{
                  width: '100%',
                  fontSize: '.875em',
                  fontWeight: 'bold',
                  backgroundColor: 'white'
                }}
              > &gt;&gt; <VanishingSpan>NEXT MONTH</VanishingSpan>
              </button>
              </td>
            </tr>
            <tr>
              {
                daysOfWeek.map(
                  (dow) => <Dow>{dow.substring(0, 3).toUpperCase()}</Dow>
                )
              }
            </tr>
          </thead>
          <tbody>
            {outputRows(current.year, current.month, events)
              .map(function (week) {
                return <tr className='week'>
                  {week.map(function (day) {
                    if (day !== null) {
                      return <Day className='day'>
                        <div>
                          <p style={{
                            textAlign: 'right',
                            width: 'fit-content',
                            float: 'right',
                            padding: '0 10px 0',
                            borderRadius: '5px',
                            backgroundColor: dateMatch(current, day[0])
                              ? '#5940DE' : 'white',
                            color: dateMatch(current, day[0])
                              ? 'white' : 'black',
                          }}>
                            {day[0].toString()}
                          </p>
                          {(day[1].length) ? <ul style={{ paddingLeft: 0 }}>
                            {day[1].map(function ({
                              link, title, location, start
                            }) {
                              return <li style={{listStyle: 'none', textDecoration:'underline'}}>
                                <HoverLink style={{color: '#5940DE'}} href={link} title={`${title} @ ${location}`}>
                                  {toLocalStr(start)}
                                </HoverLink></li>;
                            })}</ul> : ''}
                        </div>
                      </Day>;
                    }
                    return <Day className='day'>{''}</Day>;
                  })}</tr>;
              })}
          </tbody>
        </table>
      </Frame>;
}
