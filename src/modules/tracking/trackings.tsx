import { useState } from "react";
import { handleServices } from "./services/trackingServices";
import { TrackingHelper } from "./helpers/trackingHelper";
import { Box, Link2 } from "lucide-react";

export const Tracking = () => {
  const [state, setState] = useState<TrackingHelper>({
    trackingNumber: "",
    trackingResult: null,
    loading: false,
    error: null,
    guiaCourier: null,
    guiaReferencia: "",
  });

  return (
    <section
      id="tracking"
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto px-4 relative">
        <h2 className="text-5xl font-bold text-center mb-6 text-blue-500">
          Seguimiento de Envío
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-center text-lg">
          Rastrea tu envío en tiempo real y mantente informado sobre su
          ubicación y estado actual.
        </p>
        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-2xl">
          <form
            onSubmit={(e) => handleServices(e, state, setState)}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="tracking-number"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Número de Seguimiento
              </label>
              <input
                type="text"
                id="tracking-number"
                value={state.trackingNumber}
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    trackingNumber: e.target.value,
                  }))
                }
                placeholder="Ingrese su número de seguimiento"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors text-lg font-semibold ${
                state.loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={state.loading}
            >
              {state.loading ? "Cargando..." : "Rastrear Envío"}
            </button>
          </form>
          {state.error && <p className="text-red-500">{state.error}</p>}
          {state.trackingResult && state.trackingResult.length > 0 && (
            <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Estado del Envío
              </h3>

              {state.trackingResult.map((item: any, index: number) => (
                <div key={index} className="mb-4">
                  <p>
                    <strong>Estado:</strong> {item.estado}
                  </p>
                  <p>
                    <strong>Descripción:</strong> {item.descripcion}
                  </p>
                  <p>
                    <strong>Fecha:</strong> {item.fecha}
                  </p>
                </div>
              ))}

              {state.guiaCourier && (
                <div className="bg-blue-500/70 px-9 py-2 rounded relative ">
                  <div className="flex flex-wrap max-[425px]:gap-0 max-[425px]:text-sm max-[425px]:justify-center gap-1">
                    <Box className=" absolute left-2.5 top-1.5 max-[375px]:top-4 min-[768px]:top-2 text-white" />
                    <strong className="text-white">Guía de Retiro:</strong>
                    <p className="text-white">{state.guiaCourier}</p>
                  </div>
                </div>
              )}
              {state.guiaReferencia && (
                <div className=" px-9 py-2 relative rounded ">
                  <div className="flex flex-wrap max-[425px]:gap-0 max-[425px]:text-sm max-[425px]:justify-center gap-1">
                    <Link2 className=" absolute left-2.5 top-1.5 max-[375px]:top-4 min-[768px]:top-2 text-blue-500/70" />
                    <strong className="text-blue-500/70">Referencia:</strong>
                    <p className="text-blue-500/70">{state.guiaReferencia}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {state.trackingResult && state.trackingResult.length === 0 && (
            <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Estado del Envío
              </h3>
              <p>
                No se encontraron datos para el número de seguimiento ingresado.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
