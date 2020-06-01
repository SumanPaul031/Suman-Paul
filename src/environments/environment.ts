// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mapbox: {
    accessToken: 'pk.eyJ1Ijoic3VtYW4wMjA5IiwiYSI6ImNrYXR5bDJwMzBscTcycXB0YmE5b2lnZDAifQ.aMo1xDmWJqUe--x6hkslBQ'
  },
  firebaseConfig: {
    apiKey: "AIzaSyAC_lvN8RT1UgWREobgXLbKWP11uoC3o0w",
    authDomain: "suman-paul.firebaseapp.com",
    databaseURL: "https://suman-paul.firebaseio.com",
    projectId: "suman-paul",
    storageBucket: "suman-paul.appspot.com",
    messagingSenderId: "980959262935",
    appId: "1:980959262935:web:31796f9b0779506ae65892",
    measurementId: "G-D54L2QKNB6"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
