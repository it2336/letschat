  var firebaseConfig = {
      apiKey: "AIzaSyBRl1d59081tXNDlUP14zwsx-H-fXNgK_Q",
      authDomain: "kwitter-1-2.firebaseapp.com",
      projectId: "kwitter-1-2",
      storageBucket: "kwitter-1-2.appspot.com",
      messagingSenderId: "862957926246",
      appId: "1:862957926246:web:4e336f3d47ea7b68ccfaa7",
      measurementId: "G-NRT5W6ME15"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "welcome " + user_name + " !";

  function addRoom() {

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose: "room_name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "talk.html";
  }

  function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key;
              room_names = childKey;
              console.log(room_names);
              row = "<div class='room_name' id=" + room_names + " onclick='redirect(this.id)'>#" + room_names + "</div><hr>";
              document.getElementById("output").innerHTML += row;

          });
      });
  }
  getData();


  function redirect(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "talk.html";
      document.getElementById("room_name").value = "";
  }

  function logout() {

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "login.html";

  }
