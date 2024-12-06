"use client";

import { useState } from "react";

export function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingResult, setTrackingResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTracking = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.enviosuramerica.com/services-web/tracking-guia?trackingNumber=${trackingNumber}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error al obtener los datos del seguimiento");
      }

      const data = await response.json();
      setTrackingResult(data.message || "Información no disponible");
    } catch (error) {
      console.error("Error:", error);
      setTrackingResult("No se pudo obtener información del seguimiento.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="tracking"
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto px-4 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full -mr-32 -mt-32 opacity-50 max-[1024px]:hidden"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100 rounded-full -ml-32 -mb-32 opacity-50"></div>
        <div className="relative z-10">
          <h2 className="text-5xl font-bold text-center mb-6 text-blue-600">
            Seguimiento de Envío
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-center text-lg">
            Rastrea tu envío en tiempo real y mantente informado sobre su
            ubicación y estado actual.
          </p>
          <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-2xl">
            <form onSubmit={handleTracking} className="space-y-6">
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
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Ingrese su número de seguimiento"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className={`w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors text-lg font-semibold ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Cargando..." : "Rastrear Envío"}
              </button>
            </form>
            {trackingResult && (
              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  Estado del Envío
                </h3>
                <p className="text-blue-600">{trackingResult}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
