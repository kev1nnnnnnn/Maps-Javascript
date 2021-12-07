// Nota: Este exemplo requer que você consinta com o compartilhamento de localização quando
// solicitado pelo seu navegador. Se você vir o erro "O serviço de geolocalização
// falhou. ", significa que você provavelmente não deu permissão para o navegador
// localize você.
let map, infoWindow;

function initMap() {

  const usuario1 = {
    lat: -3.10719,
    lng: -60.0261,
  }
  const usuario2 = {
    lat: -3.10719,
    lng: -60.4261,
  }


  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -3.10719, lng: 60.0261 },
    zoom: 6,
    styles: 
    [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#242f3e"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#746855"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#242f3e"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#d59563"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#d59563"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#263c3f"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#6b9a76"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#38414e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#212a37"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9ca5b3"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#746855"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#1f2835"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#f3d19c"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#2f3948"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#d59563"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#17263c"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#515c6d"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#17263c"
          }
        ]
      }
    ]
    
  });

  // ********* MOSTRA O TRÁFEGO DE TRANSITO *********
  const trafficLayer = new google.maps.TrafficLayer();

  trafficLayer.setMap(map);

    // ********* MARCADORES *********
    const image1 = "./assets/img/carro.png"
    const marker1 = new google.maps.Marker({
      position: usuario1,
      map: map,
      icon: image1,
    });

    const image2 = "./assets/img/carro.png"
    const marker2 = new google.maps.Marker({
      position: usuario2,
      map: map,
      icon: image2,
    });
        // ********* FIM MARCADORES *********
}

/* 
success *
Uma função de retorno que captura um objeto Position como seu parâmetro de entrada.

error Optional *
Uma função de retorno opcional que captura um objeto PositionError como seu parâmetro de entrada.
*/


var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  const obj = {
    latitude: crd.latitude,
    longitude: crd.longitude,
    metros: crd.accuracy,
  };

  const myJSON = JSON.stringify(obj);

  console.log(myJSON);


  /*console.log('Sua posicao atual e:');
  console.log('Latitude : ' + crd.latitude);
  console.log('Longitude: ' + crd.longitude);
  console.log('Mais ou menos ' + crd.accuracy + ' metros.');*/
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);






