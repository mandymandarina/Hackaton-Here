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
  contComment.innerHTML += `<div>
  ${newMessage.val().text} <button class="btn-danger" id="btnDelete" ><i class="fas fa-trash" data-id="${newMessage.key}" onclick="preguntar()"></i>Eliminar</div></button>`;
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
