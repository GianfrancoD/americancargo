export function Offices() {
  const offices = [
    {
      city: "La Victoria",
      address:
        "Av Aviación 950 CC. Gama plaza Moda 2do piso Local SN 193 - Local ZOOM",
      phone: "+57 1 234 5678",
    },
    {
      city: "Los Olivos",
      address:
        "Av. Alfredo Mendiola 3471, frnte a Meda Plaza, 2do piso Galeria Dolares",
      phone: "+51 1 234 5678",
    },
    {
      city: "Santa Anita",
      address:
        "Av. Nicolás Ayllón N 3080 Ate - Lima. C. C. Jessie Stand W11. Frente al Mall Aventura",
      phone: "+593 2 234 5678",
    },
    {
      city: "Breña",
      address: "Av. Venezuela 1179 C.C Estrella Plaza Local 136",
      phone: "+1 305 234 5678",
    },
  ];

  return (
    <section id="offices" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-500 mb-4">
            Nuestras Oficinas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos presentes en las principales ciudades para atender tus
            necesidades logísticas
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100 rounded-bl-full"></div>
              <h3 className="text-xl font-semibold mb-2 text-blue-500">
                {office.city}
              </h3>
              <p className="text-gray-600 mb-2">{office.address}</p>
              <p className="text-gray-600 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {office.phone}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
