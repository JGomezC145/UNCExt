// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBroxZ7MFy2cXE10I38UY8xTgjnQFAc6dw",
    authDomain: "tienda-de-productos1.firebaseapp.com",
    databaseURL: "https://tienda-de-productos1-default-rtdb.firebaseio.com",
    projectId: "tienda-de-productos1",
    storageBucket: "tienda-de-productos1.appspot.com",
    messagingSenderId: "286525481195",
    appId: "1:286525481195:web:e470b5c8e9c8fc408d5eae"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var downloads;
const download = document.getElementById("btn-download");
const db = firebase.firestore()

db.collection("UNCExt").doc("DWS").onSnapshot((doc) => {
    console.log("Downloads: ", doc.data().count);
    downloads = doc.data().count;
});

download.addEventListener("click", () =>{
    var newdownload = downloads + 1;
    db.collection("UNCExt").doc("DWS").set({
        count: newdownload
    })
})