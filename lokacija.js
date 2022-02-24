// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js";

var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        navigator.geolocation.getCurrentPosition(vneseVbazo);
        //navigator.geolocation.getCurrentPosition(dajVbazo);
    } else { 
            x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
    return position;
}


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSeKoss9AER2WPNJ4RRjms8dwPFj7u3Oo",
  authDomain: "mojabaza-932e9.firebaseapp.com",
  databaseURL: "https://mojabaza-932e9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mojabaza-932e9",
  storageBucket: "mojabaza-932e9.appspot.com",
  messagingSenderId: "287978341109",
  appId: "1:287978341109:web:a1ed5634a2129f6d39bbbc",
  measurementId: "G-FJXDZDVFLC"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
export function vneseVbazo (lokacija) { 
    //var y = document.getElementById("demo");
    
    //var lokacija = navigator.geolocation.getCurrentPosition(showPosition);
    //y.innerHTML = "Nekaj: " + lokacija.coords.latitude + 
    //"<br>Longitude: " + lokacija.coords.longitude;
    set(ref(database, 'lokacije/'), {

        sirina: 46,
        dolzina: 11

    });
}