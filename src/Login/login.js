// Registro
function registerWithFirebase(){
    const emailValue = email.value;
    const passwordValue = password.value;

    if(emailValue.length != 0 && passwordValue.length != 0) {
        console.log('if');
    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
        .then(()=>{
            console.log("Usuario creado con éxito");
            location.href ="";
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
            location.href ="";
        })
        .catch((error)=>{
            console.log("Error de firebase > Código > "+error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            console.log("Error de firebase > Mensaje > "+error.message); //error.message nos mostrará el mensaje de firebase del mismo error
        });
}}

// Facebook Login
function loginFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();

    auth().signInWithPopup(provider).then(function(result){
        alert("Exito");
        console.log(result);
    }).catch(function(error){
        alert("Error");
        console.log(error);
    });
}