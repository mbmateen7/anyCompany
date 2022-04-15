import { urls } from "src/app/shared/constants/urls";

export const environment = {
    production: true,
    apiUrl: urls.stagingUrl,
    // apiUrl: urls.awsUrl,

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
