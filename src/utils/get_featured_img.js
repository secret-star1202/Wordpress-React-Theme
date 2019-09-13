export default function getFeaturedImg(_embedded,
  defo = 'https://ktuh.org/img/ktuh-logo.png') {
  return _embedded && _embedded['wp:featuredmedia']
    && _embedded['wp:featuredmedia']['0']
    && _embedded['wp:featuredmedia']['0'].source_url
    || defo;
}
