// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { urls } from "src/app/shared/constants/urls";

export const environment = {
    production: false,
    apiUrl: urls.devUrl,

    firebaseConfig: {
        apiKey: "AIzaSyAm6blV0hs82ElUDgjSPwrpf40O6ncUjd0",
        authDomain: "humphrey-stretton.firebaseapp.com",
        databaseURL: "https://humphrey-stretton.firebaseio.com",
        projectId: "humphrey-stretton",
        storageBucket: "humphrey-stretton.appspot.com",
        messagingSenderId: "545119041119",
        appId: "1:545119041119:web:b7094a8883697a6e6bcdea"
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
