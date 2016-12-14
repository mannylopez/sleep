var map = L.map('map').setView([41.29, -98.86], 4);


// L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     .openPopup();
// var Stamen_Toner = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
//   attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//   subdomains: 'abcd',
//   minZoom: 0,
//   maxZoom: 20,
//   ext: 'png'
// }).addTo(map);

var MapBox = L.tileLayer('http://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Imagery from <a href="http://mapbox.com/about/maps/">MapBox</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  id: 'manny.na22d87o',
  accessToken: 'pk.eyJ1IjoibWFubnkiLCJhIjoiMzBCNHFQUSJ9.VQQ9ZSW7viFT1yLhLiWLSA'
}).addTo(map);

// var locationSlept2015 = omnivore.csv('assets/data/2015sleep.csv').addTo(map);
var locationSlept2016 = omnivore.csv('assets/data/2016sleep.csv').addTo(map);
// var together = omnivore.csv('assets/data/together.csv').addTo(map);

// locationSlept2015.on('ready', function() {
//   locationSlept2015.eachLayer(function(layer) {
//     layer.bindPopup(layer.feature.properties.Date + ' ' + '<br>' + layer.feature.properties.Event + '<br>' + layer.feature.properties.Notes)
//   })
// }).addTo(map);

locationSlept2016.on('ready', function() {
  locationSlept2016.eachLayer(function(layer) {
    layer.bindPopup(layer.feature.properties.Date + ' ' + '<br>' + layer.feature.properties.Event + '<br>' + layer.feature.properties.Notes)
  })
}).addTo(map);

// together.on('ready', function() {
//   together.eachLayer(function(layer) {
//     layer.bindPopup(layer.feature.properties.Date + ' ' + '<br>' + layer.feature.properties.Event + '<br>' + layer.feature.properties.Notes)
//   })
// }).addTo(map);

