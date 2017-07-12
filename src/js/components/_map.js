if ($('#map').length) initMap();

function initMap() {
  const mapCenter = { lat: 53.181793, lng: 50.081043 };
  const map = new google.maps.Map(document.getElementById('map'), {
    center: mapCenter,
    zoom: 17,
    disableDefaultUI: true
  });
  const markerImg = '../img/map-marker.png';
  const mapMarker = new google.maps.Marker({
    position: { lat: 53.18161191472641, lng: 50.07845766842365 },
    map,
    icon: markerImg
  });
}