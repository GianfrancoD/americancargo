import axios from "axios";
import { TrackingHelper } from "../helpers/trackingHelper";

export const handleServices = async (
  e: React.FormEvent,
  state: TrackingHelper,
  setState: React.Dispatch<React.SetStateAction<TrackingHelper>>
) => {
  e.preventDefault();
  setState((prev) => ({
    ...prev,
    loading: true,
    error: null,
  }));

  try {
    const response = await axios.post(
      `https://api.enviosuramerica.com/services-web/tracking-guia`,
      { guia: state.trackingNumber },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    console.log("Response from API:", response.data);

    if (response.status === 200) {
      let data = response.data;

      if (response.data.status === "ok") {
        const trackingResults = data.tracking;
        const guiaCourier = data.guia_courier || null;
        console.log("state: ", state);
        console.log(`prueba Guia: `, guiaCourier);
        console.log(`Prueba tracking: `, trackingResults);

        setState((prev) => ({
          ...prev,
          trackingResult: trackingResults,
          guiaCourier: guiaCourier,
          loading: false,
        }));
      } else {
        setState((prev) => ({
          ...prev,
          trackingResult: null,
          error: response.data.mensaje || "Error desconocido",
          loading: false,
        }));
      }
    } else {
      throw new Error(`HTTP error status ${response.status}`);
    }
  } catch (error: any) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
    setState((prev) => ({
      ...prev,
      error: "No se pudo obtener información del seguimiento.",
      loading: false,
    }));
  }
};
