// Nota: Este exemplo requer que você consinta com o compartilhamento de localização quando
// solicitado pelo seu navegador. Se você vir o erro "O serviço de geolocalização
// falhou. ", significa que você provavelmente não deu permissão para o navegador
// localize você.
let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -3.10719, lng: 60.0261 },
    zoom: 6,
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

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  
  infoWindow.setPosition(pos);
  
  infoWindow.setContent(
   
    browserHasGeolocation
     
    ? "Error: Erro de serviço geolicalizaçao."
      : "Error: Seu browser não suporta a geolocalização."
  );
  infoWindow.open(map);
}
