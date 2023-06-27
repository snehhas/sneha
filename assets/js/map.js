function myMap() {
  var mapContainer = document.createElement("div");
  mapContainer.setAttribute("id", "map");
  document.body.appendChild(mapContainer);

  var mapOptions = {
    center: new google.maps.LatLng(51.5, -0.2),
    zoom: 10
  };
  var map = new google.maps.Map(mapContainer, mapOptions);
}
