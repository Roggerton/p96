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
//ADD YOUR FIREBASE LINKS

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
      purpose:"adding room"
  });
  localStorage.setItem("room_name", room_name);
  window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("ROOM NAME-"+ Room_names);
  row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML+=row;
  //End code
  });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
  }

  