// Registro
function registerWithFirebase(){
    const emailValue = email.value;
    const passwordValue = password.value;

    if(emailValue.length != 0 && passwordValue.length != 0) {
        console.log('if');
    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
        .then(()=>{
            console.log("Usuario creado con éxito");
            location.href ='muro.html';
        })
        .catch((error)=>{
            console.log("Error de firebase > Código > "+error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            console.log("Error de firebase > Mensaje > "+error.message); //error.message nos mostrará el mensaje de firebase del mismo error
        });
}};

// Login
function loginWithFirebase(){
    const emailValue = email.value;
    const passwordValue = password.value;

    if(emailValue.length != 0 && passwordValue.length != 0) {
            
    firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
        .then(()=>{
            console.log("Usuario inició sesión con éxito");
            location.href ="../../muro.html";
        })
        .catch((error)=>{
            console.log("Error de firebase > Código > "+error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            console.log("Error de firebase > Mensaje > "+error.message); //error.message nos mostrará el mensaje de firebase del mismo error
        });
}}

// Facebook Login
function loginFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        console.log(token);
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        console.log(errorCode);
        var errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        var email = error.email;
        console.log(email);
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(credential);
        // ...
      });
}

function loginGoogle() {
    const authService = firebase.auth();

    // manejador de eventos para loguearse
document.getElementById('logeoGoogle').addEventListener('click', function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('email');
    authService.signInWithPopup(provider)
          .then(function(result) {
              // logueado con éxito
              console.log('Hemos autenticado al usuario ', result.user);
              location.href = "../../src/muro.html";
          })
          .catch(function(error) {
              // Fallo de login
              console.log('Se ha encontrado un error:', error);
          });
  });
}

function logout() {
    const authService = firebase.auth();
    // manejador de eventos para cerrar sesión (logout)
document.getElementById('botonlogout').addEventListener('click', function() {
    authService.signOut();
  });
}