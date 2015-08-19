var map = L.map('map').setView([41.29, -98.86], 4);


// L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     .openPopup();
var Stamen_Toner = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

var locationSlept = omnivore.csv('assets/data/sleep.csv').addTo(map);

locationSlept.on('ready', function() {
  locationSlept.eachLayer(function(layer) {
    layer.bindPopup(layer.feature.properties.Date + ' ' + '<br>' + layer.feature.properties.Event + '<br>' + layer.feature.properties.Notes)
  })
}).addTo(map);


