
function send()
{
    msg = document.getElementById("msg").value;
    firebaseConfig.databaseURL().ref(room_name).push({
        name:user_name,
        massage:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).no('value', function(snapshot) {document.getElementById("output").innerHTML=""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_messeage_id = childkey;
    message_data = childData;

    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<img class='user_tick' src='tick.png'></h4>";
    message_with_tap = "<h4 class='message_h4'>"+messege + "</h4>";
    like_button ="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+" onclick='updatelike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

    row = name_with_tag + message_with_tag +like_button + span_with_tag;
    document.getElementById("output").innerHTML += row;


} }); }); }
getData();

function updatelike(message_id)
{
    console.log("botón me gusta pulsado - "+ message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
        like : updated_likes
    });
}

    