# KTUH Custom React Theme

## Build and Deployment Instructions
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Insert the following code into a file `./src/utils/config.js`, replacing the `siteUrl` field  with the base URL in use and:
    ```Javascript
    export default {
      siteUrl: 'http://localhost:8080/'
    }
    ```
4. Run `npm run-script build` to build.
5. Deploy this theme however preferred, whether via FTP or the WordPress admin panel.
