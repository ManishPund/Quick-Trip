const coordinates = listing.geometry.coordinates.reverse();

let map = L.map("map").setView(coordinates, 13);
L.tileLayer(
  "https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=pYgzwdGBIB1brV5RCaCI",
  {
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 1,
    maxZoom: 19,
    attribute:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(map);

let marker = L.marker(coordinates).addTo(map);

let popup = L.popup()
  .setLatLng(coordinates)
  .setContent(
    `<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`
  )
  .openOn(map);

marker.bindPopup(popup).openPopup();
