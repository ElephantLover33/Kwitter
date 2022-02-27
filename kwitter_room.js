
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyA5tjiCX_1gxY1J9F9omIIJh7_1LH6hCr8",
      authDomain: "kwitter-955c7.firebaseapp.com",
      databaseURL: "https://kwitter-955c7-default-rtdb.firebaseio.com",
      projectId: "kwitter-955c7",
      storageBucket: "kwitter-955c7.appspot.com",
      messagingSenderId: "467503288847",
      appId: "1:467503288847:web:8eeb19056ba03a3dbb097a"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
