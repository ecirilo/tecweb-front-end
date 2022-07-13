// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth: {
    domain: "dev-0hjo6w8t.us.auth0.com",
    clientId: "o762Hs4Z6QMCWzCMCrEfQBsqT2kRZaFT",
    audience: "https://dev-0hjo6w8t.us.auth0.com/api/v2/",
    redirectUri: window.location.origin
  },
  dev: {
    serverUrl: "http://localhost:8080"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
