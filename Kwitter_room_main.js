var firebaseConfig = {

    apiKey: "AIzaSyA6sp5AAH9nW1sox8LsnH5igDjMw9R7LXc",

    authDomain: "classtest-f9806.firebaseapp.com",

    databaseURL: "https://classtest-f9806-default-rtdb.firebaseio.com",

    projectId: "classtest-f9806",

    storageBucket: "classtest-f9806.appspot.com",

    messagingSenderId: "286514706665",

    appId: "1:286514706665:web:1e38f29ed572b401251878"

};

  firebase.initializeApp(firebaseConfig);

  function addUser()
{
    user_name = document.getElementById("user_name").value;

    firebase.database().ref("/").child(user_name).update({

        purpose: "adding user"

    });
    
}