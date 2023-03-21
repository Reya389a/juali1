
//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyCZ8OLCEmvAIJ_14HlhmrxBkagvSwp6sqg",
      authDomain: "juali-f90ad.firebaseapp.com",
      databaseURL: "https://juali-f90ad-default-rtdb.firebaseio.com",
      projectId: "juali-f90ad",
      storageBucket: "juali-f90ad.appspot.com",
      messagingSenderId: "21229260766",
      appId: "1:21229260766:web:313089a0a3ef32c9cf174f"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Inicio del código
console.log("nombre sala " + room_name);
row = "<div clas = 'room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
     //Final del código

     });});}
getData();

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Hola "+user_name;
function addRoom()
{
     room_name=document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
           purpose: "sala añadida"
     });
     localStorage.setItem("room_name",room_name);
     window.location="kwitter_page.html"

}

function redirectToRoomName(name) 
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location ="kwitter.html";
}
