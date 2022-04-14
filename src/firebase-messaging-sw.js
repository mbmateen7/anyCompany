// Scripts for firebase and firebase messaging
 importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
 importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

 // Initialize the Firebase app in the service worker by passing the generated config
 const firebaseConfig = {
   
    apiKey: "AIzaSyAm6blV0hs82ElUDgjSPwrpf40O6ncUjd0",
    authDomain: "humphrey-stretton.firebaseapp.com",
    databaseURL: "https://humphrey-stretton.firebaseio.com",
    projectId: "humphrey-stretton",
    storageBucket: "humphrey-stretton.appspot.com",
    messagingSenderId: "545119041119",
    appId: "1:545119041119:web:b7094a8883697a6e6bcdea"
 };

 firebase.initializeApp(firebaseConfig);

 // Retrieve firebase messaging
 const messaging = firebase.messaging();

 messaging.onBackgroundMessage(function(payload) {
   console.log("Received background message ", payload);

   const notificationTitle = payload.notification.title;
   const notificationOptions = {
     body: payload.notification.body,
   };

   self.registration.showNotification(notificationTitle, notificationOptions);
 });