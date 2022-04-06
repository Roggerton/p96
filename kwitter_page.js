var firebaseConfig = {
    apiKey: "AIzaSyDJERAOvFEdoc2KTXmEw_rGdVSHpWBo-rk",
    authDomain: "kwitter-fc6a8.firebaseapp.com",
    databaseURL: "https://kwitter-fc6a8-default-rtdb.firebaseio.com",
    projectId: "kwitter-fc6a8",
    storageBucket: "kwitter-fc6a8.appspot.com",
    messagingSenderId: "307575016942",
    appId: "1:307575016942:web:8ff8d4adffa38c83cbd2ff"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function send(){
        msg=document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name: user_name, 
              message: msg,
              like: 0
        });
        document.getElementById("msg").value="";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
