/* Functionality Buttons */
document.getElementById('btnData').addEventListener('click', () => {
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
  window.open('../main.html', '_self', 'true');
});

let petName;
let petMissingDate;
let petFeatures;

/* Save info to DB */
function saveToDB() {
  petName = document.getElementById('pet_name');
  petMissingDate = document.getElementById('pet_missing');
  petFeatures = document.getElementById('pet_features');
  return console.log(petName, petMissingDate, petFeatures);
}