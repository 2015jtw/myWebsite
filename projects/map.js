// Code created by Saeesh Mangwani
// Date Updated: 20/02/2020

mapboxgl.accessToken =
'pk.eyJ1Ijoic2FlZXNobSIsImEiOiJjazVmcTkzYnEwMjUxM2xxZHFuN2hnM3c5In0.MSQfGe9MwtUy_XPIKyyY5w';

var map = new mapboxgl.Map({
  container:'map',
  style:'mapbox://styles/saeeshm/ck6wnnyic010i1is7frtok1np',
  center: [-73.57963, 45.49717], // starting position [lng, lat]
  zoom: 11.6, // starting zoom'
  pitch: 45 //starting pitch
  }
);

//adding controls navigation (zoom and orientation) and scale
map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.ScaleControl());

//function to add a geojson(json) layer to the map
map.on('load', function(p)
  {

    //creating an array containing the names of all of our json
    var file_names = ['JW','KW','SM']

    //looping through each json and adding it as a source for the map
    file_names.forEach(function(value)
      {
        var url = 'https://neogeoweb.ca/group8/A3/' + value + '.json';
        map.addSource(value, {type: 'geojson', data: url})
      }
    )

    // using those sources to add layers to the map in another loop.
    // First layer is K elly's
    map.addLayer(
      {
        id: 'kelly',
        type: 'line',
        source: 'KW',
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint':{
          'line-color':'#ff710c',
          'line-width':5,
          'line-opacity':0.8
        }
      }
    );

    // Saeesh's layer
    map.addLayer(
      {
        id: 'saeesh',
        type: 'line',
        source: 'SM',
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint':{
          'line-color':'#d70cff',
          'line-width':5,
          'line-opacity':0.8
        }
      }
    );

    // Josh's layer
    map.addLayer(
      {
        id: 'josh',
        type: 'line',
        source: 'JW',
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint':{
          'line-color':'#35ff0c',
          'line-width':5,
          'line-opacity':0.8
        }
      }
    );

    //now that the layers are iniatialized, creating an array storing the names of the layers
    var layer_list = ['josh','kelly','saeesh']

    // iterating through that array to add click-interaction functionalities to
    // each layer. This enables the user to click on a line to view a description of
    // it (saved as a property of the feature in the json file). It additionally
     // the pointer depending on whether it is howevering over a line feature or not
     layer_list.forEach(function(value){
        map.on('click',value,function(e)
          {
            //getting the coordinates of the pointer on the layer and the
            // description saved in the properties of the layer
            var coordinates = e.lngLat;
            var description = e.features[0].properties.description;

            //adding a popup at the click-point that provides the description
            new mapboxgl.Popup()
              .setLngLat(coordinates)
              .setHTML(description)
              .addTo(map);
          }
        );

        // Change the cursor to a pointer when the mouse is over the places layer.
        map.on('mouseenter',value, function()
          {
            map.getCanvas().style.cursor = 'pointer';
          }
        );

        // Change it back to a pointer when it leaves.
        map.on('mouseleave',value, function()
          {
            map.getCanvas().style.cursor = '';
          }
        );
     });
   }
);

// An array containing the names of the three layers we're using (note that they
// are capitalized, since this is their display appearance. The case will be
// changed for when they are used to refer to layer ids)
var toggle_layer_ids = ['Josh','Kelly','Saeesh'];

// A loop that iterates through each of the layers, creating a button element for
// each one and sets its class to "active".
for (var i = 0; i < toggle_layer_ids.length; i++) {
  var id = toggle_layer_ids[i];
  var link = document.createElement('a');
  link.href = '#';
  link.className = 'active';
  link.textContent = id;

  // defining an onclick function for when the buttons are clicked.
  link.onclick = function() {
    //getting the button name in lowercase to use it to refer to the layer id
    var clickedLayer = this.textContent.toLowerCase();
    // getting the current opacity attribute of the line
    var opacity = map.getPaintProperty(clickedLayer, 'line-opacity');

    // if opacity is 0.8, resetting it to 0 upon clicking and turning the class
    // name to empty (inactive)
    if (opacity == 0.8) {
      map.setPaintProperty(clickedLayer, 'line-opacity', 0);
      this.className = '';
    // conversely if the opacity is already at 0 then setting the class name to
    // active and resetting opacity up to 0.8
    } else {
      this.className = 'active';
      map.setPaintProperty(clickedLayer, 'line-opacity', 0.8);
    }
  };

  // appending the created element as a child of the menu element, to create a
  // complete navigation menu.
  var layers = document.getElementById('menu');
  layers.appendChild(link);
}
