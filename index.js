// Nota: Este exemplo requer que você consinta com o compartilhamento de localização quando
// solicitado pelo seu navegador. Se você vir o erro "O serviço de geolocalização
// falhou. ", significa que você provavelmente não deu permissão para o navegador
// localize você.
let map, infoWindow;

function initMap() {
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
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button"); //Adiciona um botão

  locationButton.textContent = "Localização Atual"; //Adiciona um texto ao botão.

  locationButton.classList.add("custom-map-control-button"); //adicona uma classa ao botão para manipulação

  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
 
  locationButton.addEventListener("click", () => {
    
    if (navigator.geolocation) {
     
      navigator.geolocation.getCurrentPosition(
      
        (position) => {
          
          const pos = {
            
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Localização encontrada.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
       
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
     
      // Browser não suporta a geolocalização.
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

//Função onde verifica se houve erro.
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  
  infoWindow.setPosition(pos);
  
  infoWindow.setContent(
   
    browserHasGeolocation
     
    ? "Error: Erro de serviço geolicalizaçao."
      : "Error: Seu browser não suporta a geolocalização."
  );
  infoWindow.open(map);
}

function marcadores() {

  const marker = new google.maps.Marker({

    map: map

  });


}
