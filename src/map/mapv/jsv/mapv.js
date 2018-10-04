//let secure = (location.protocol === 'https:') ? true : false;
let platform = new H.service.Platform({ //aqui se iniciliza el mapa
  useHTTPS: true ,
  app_id:'7ruK6i4yX7FUmmecHtyw', // // <- INGRESA TU IDENTIFICACIÓN DE LA APLICACIÓN AQUÍ
  app_code:'Kfxkypo1SzkZogn5nO4eag', // <- INGRESA TU APLICACIÓN CÓDIGO AQUÍ
});

let defaultLayers = platform.createDefaultLayers();
let mapPlaceholder = document.getElementById('mapContainer');

//el mapa reacciona correctamente cuando se cambie el tamaño de la ventana
window.addEventListener('resize', function(){
    map.getViewPort().resize();
  });

//coordenadas
var coordinates = {
  lat: -33.45, // ubicacio de santiago de chile
  lng: -70.6667
};
let mapOptions = {
  center: coordinates,
  zoom: 15
};

let map = new H.Map(
  mapContainer,
  defaultLayers.normal.map,
  mapOptions
);

let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

let HEREHQcoordinates;

//aqui empieza la geolocalizacion watchPosition Este método llamará a la función de éxito cada vez que cambie la posición del dispositivo.
function updatePosition (event) {
  HEREHQcoordinates = {
    lat: event.coords.latitude,
    lng: event.coords.longitude
  };
  console.log(HEREHQcoordinates);
  
  var marker = new H.map.Marker(HEREHQcoordinates);
  map.addObject(marker);
  map.setCenter(HEREHQcoordinates);
}

navigator.geolocation.watchPosition(updatePosition);

/*
function getDestinationLocation() {
  var endLocation = document.getElementById("inputGroupSelect02");
  return endLocation;
  console.log(endLocation);
}
function getRoute(position) {
  console.log('waypoint0 : geo!' + position.lat + ', ' + position.lng);
//ruteando el camino
var routingParameters = {
  // The routing mode:
   'mode': 'fastest;car',
  // The start point of the route:
  'waypoint0': 'geo!' + position.lat + ',' + position.lng,
  // The end point of the route:
  'waypoint1': 'geo!-33.422333,-70.644819',
  // To retrieve the shape of the route we choose the route
  // representation mode 'display'
  'representation': 'display'
  
};
var onResult = function(result) {
  var route,
    routeShape,
    startPoint,
    endPoint,
    linestring;
  if(result.response.route) {
  // Pick the first route from the response:
  route = result.response.route[0];
  // Pick the route's shape:
  routeShape = route.shape;

  // Create a linestring to use as a point source for the route line
  linestring = new H.geo.LineString();

  // Push all the points in the shape into the linestring:
  routeShape.forEach(function(point) {
    var parts = point.split(',');
    linestring.pushLatLngAlt(parts[0], parts[1]);
  });

  // Retrieve the mapped positions of the requested waypoints:
  startPoint = route.waypoint[0].mappedPosition;
  endPoint = route.waypoint[1].mappedPosition;

  // Create a polyline to display the route:
  var routeLine = new H.map.Polyline(linestring, {
    style: { strokeColor: 'blue', lineWidth: 10 }
  });

  // Create a marker for the start point:
  var startMarker = new H.map.Marker({
    lat: startPoint.latitude,
    lng: startPoint.longitude
  });

  let positionEnd = {
    lat: endPoint.latitude,
    lng: endPoint.longitude
};
  // Create a marker for the end point:
  var endMarker = new H.map.Marker(positionEnd);
 
  //var endMarker = new H.map.Marker({
  //lat: endPoint.latitude,
  //lng: endPoint.longitude});

  // Add the route polyline and the two markers to the map:
  map.addObjects([routeLine, startMarker, endMarker]);

  // Set the map's viewport to make the whole route visible:
  map.setViewBounds(routeLine.getBounds());
  }
};
// Get an instance of the routing service:
var router = platform.getRoutingService();

// Call calculateRoute() with the routing parameters,
// the callback and an error callback function (called if a
// communication error occurs):
router.calculateRoute(routingParameters, onResult,
  function(error) {
    alert(error.message);
  });
}
*/