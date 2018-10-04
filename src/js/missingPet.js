/* Functionality Buttons */
document.getElementById('start-missing-btn').addEventListener('click', () => {
  missingPetStart.classList.add('hide');
  missingPetStart.classList.remove('show');
  missingPetMap.classList.remove('hide');
  missingPetMap.classList.add('show');
});

document.getElementById('map-missing-btn').addEventListener('click', () => {
  missingPetMap.classList.add('hide');
  missingPetMap.classList.remove('show');
  missingPetForm.classList.remove('hide');
  missingPetForm.classList.add('show');
});

document.getElementById('form-missing-btn').addEventListener('click', () => {
  missingPetForm.classList.add('hide');
  missingPetForm.classList.remove('show');
  missingPetPhoto.classList.remove('hide');
  missingPetPhoto.classList.add('show');
});

document.getElementById('photo-missing-btn').addEventListener('click', () => {
  window.open('../index.html', '_self', 'true');
});
