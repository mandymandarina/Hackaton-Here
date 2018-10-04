btnData.addEventListener('click', () => {
  const ubication = `https://places.cit.api.here.com/places/v1/discover/search?app_id=7ruK6i4yX7FUmmecHtyw&app_code=Kfxkypo1SzkZogn5nO4eag&at=${HEREHQcoordinates.lat},${HEREHQcoordinates.lng}&q=${inputGroupSelect02.value}&pretty`
  fetch(ubication)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.results.items.forEach((item)=>{
      let data = {
      name: item.title,
      direccion: item.vicinity
    }
    });
    renderInfo(data);
  });
});

const renderInfo = (data) => {
  contenedorData.innerHTML += `<p class="descriptionFodd"> Nombre Local: ${JSON.stringify(data.results.items[0].title)}
  Dirección: ${JSON.stringify(data.results.items[0].vicinity)} Calificación: ${JSON.stringify(data.results.items[0].averageRating)}</p>`;
}