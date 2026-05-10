// Cargar ANAGA.geojson
const ROUTE_URL = "./ANAGA.geojson";

async function loadGuide() {
  try {
    const response = await fetch(ROUTE_URL);
    const data = await response.json();

    // Título y descripción
    document.getElementById("guide-title").textContent = "Anaga";
    document.getElementById("guide-description").textContent = "The Pirate Coast";

    const tracksContainer = document.getElementById("audio-list");
    tracksContainer.innerHTML = "";

    // Generar lista de audios según los puntos del GeoJSON
    data.features.forEach((feature, index) => {
      const li = document.createElement("li");
      li.textContent = feature.properties.Name;

      li.onclick = () => {
        const player = document.getElementById("player");
        player.src = `https://xzymbvnljudyypdyuisf.supabase.co/storage/v1/object/public/audioguuides/Anaga.${index + 1}.wav`;
        player.play();
      };

      tracksContainer.appendChild(li);
    });

  } catch (error) {
    console.error("Error cargando la audioguía:", error);
  }
}

loadGuide();
