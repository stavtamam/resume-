// const functions = require("firebase-functions");
// const admin = require('firebase-admin');
// const nodemailer = require('nodemailer');

// admin.initializeApp();
// // require('dotenv').config()

// // const { SENDER_EMAIL, SENDER_PASSWORD } = process.env;

// exports.sendEmailNotification = functions.firestore.document('submittions/(docId)').onCreate((snap, ctx) => {
//     const data = snap.data();

//     let authData = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         porrt: 587,
//         secure: false,
//         auth: {
//             user: "stavtamam@gmail.com",
//             pass: "Tutiti1997",
//         }
//     })
//     authData.sendMail({
//         from: "stavtamam@gmail.com",
//         to: "stavtamam@gmail.com",
//         subject: "your submittion info",
//         text: "hello stav!"
//     }).then(res => console.log("succsess")).catch(err => console.log(err));
// })



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
