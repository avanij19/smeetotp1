// setting up firebase with our website
const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyC4huYBYfdU8rTRuoTOqhMyM_dR8Qt0tgo",
    authDomain: "as-smt1.firebaseapp.com",
    projectId: "as-smt1",
    storageBucket: "as-smt1.appspot.com",
    messagingSenderId: "862808991671",
    appId: "1:862808991671:web:ae7924d2cb3969d77eaa32"
 });
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in 
    document.write("You are Signed Up")
    console.log(result)
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message)
    // ..
  });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    console.log("Sign in successful:", result);
    // Redirect user to another HTML page
    window.location.href = "ass1.html";

  })
  .catch((error) => {
    console.log(error.code);
    alert("Invalid mail or password");
    console.log(error.message);

  });
}