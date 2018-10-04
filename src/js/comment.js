// para guardar la data del comment
function saveComment() {
  const commentPlace = comment.value;
  if (commentPlace === '') {
    errorTxt.innerHTML = '<div class="alert alert-danger alertConteiner" role="alert" id="errorTxt"> Error: Debes ingresar un comentarios </div>';
    // Limpiar el textarea
    document.getElementById('comment').value = '';
  } else {
    const currentUser = firebase.auth().currentUser;
    const commentPost = comment.value;
    const newMessageKey = firebase.database().ref().child('comments').push().key;
    firebase.database().ref(`comments/${newMessageKey}`).set({
      //creator: currentUser.uid,
      //creatorName: currentUser.displayName || currentUser.email,
      text: commentPlace,
      //email: currentUser.email,
    });
    // Limpiar el textarea
    document.getElementById('comment').value = '';    
  }
}

// Buscar mensajes desde data
firebase.database().ref('comments').on('child_added', (newMessage)=> {  
  let modiText = newMessage.val().text; 
  contComment.innerHTML += `<section class="enterComments" id="seccionPrincipal" data-idEdit='${newMessage.key}'>  
  
  <div class= "row photoUserComment"><img class="photouser" src ="icono/perfil-usuario.svg"> ${newMessage.val().creatorName}</div>

  <div class= "row textComment">
    <div class= "textInsert"> <input type="text" class="contEdit inputEdit" name="contEdit" data-editcon="${newMessage.val().text}" value="${modiText}">
      ${newMessage.val().text}               
    
    <i class="fas fa-pencil-alt" data-edit="${newMessage.val().text}" onclick ="editPost(event)"></i><i class="fas fa-trash" data-id="${newMessage.key}" onclick="preguntar()"></i>
  </div>                            
  </section>`;
});

//preguntar si se quiere eliminar publicacion
function preguntar() {
  confirmar = confirm('¿Desea eliminar el comentario?');
  if (confirmar) {
    deleteButtonClicked(event);
  } else {
    alert('Diste cancelar');
  }
}

// Funcion eliminar publicacion
function deleteButtonClicked(event) {  
  event.stopPropagation();
  const commentId = event.target.getAttribute('data-id');
  const commentRef = firebase.database().ref('comments').child(commentId);
  commentRef.remove();  
}
/*
function deleteButtonClicked() {  
  //event.stopPropagation();
  const commentId = document.getElementById('btnDelete');
  const commentRef = firebase.database().ref('comments').child('commentId');
  commentRef.remove();  
}*/

//funcion editar
function editPost(event) {
  event.stopPropagation();
  let contenidoEdit = document.getElementsByClassName('inputEdit')[0].classList.add('contEdit');
  contenidoEdit = document.getElementsByClassName('inputEdit')[0].classList.remove('contEdit');
  // contenidoEdit.style.display = 'block';
  let contenido = document.getElementsByClassName('inputEdit')[0];
  let menEdit = contenido.value;
  console.log('mensaje original ' + menEdit);
  let editar = event.target.getAttribute('data-edit');
  firebase.database().ref('comments/' + editar).once('value', function (edicion) {
    contenido.addEventListener('keypress', () => {
      let cambio = document.getElementsByClassName('inputEdit')[0];
      editar = event.target.getAttribute('data-edit');
      menEdit = cambio.value;
      console.log('mensaje editado ' + menEdit);
      firebase.database().ref('comments').child(editar).update({
        text: menEdit,
      });
      //contComment.style.display='none';
      //seccionPrincipal.innerHTML = '<section></section>';
    });
    console.log(editar);
  });
}


