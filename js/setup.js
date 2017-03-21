function initMap() {
  var venue = {lat: 36.8433, lng: -76.36651};
  window.map = new google.maps.Map(document.getElementById('map'), {
    center: venue,
    disableDefaultUI: true,
    draggable: false,
    scrollwheel: false,
    zoom: 14
  });

  window.marker = new google.maps.Marker({
    map: map,
    position: venue,
    title: "4101 Duke Drive"
  });
}

// initialize map on page load
window.addEventListener("load", initMap);

// re-center map on page resize
window.addEventListener("resize", function recenterMap () {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
});

// initialize lightGallery grid and controls
lightGallery(document.getElementById('lightGallery'));
