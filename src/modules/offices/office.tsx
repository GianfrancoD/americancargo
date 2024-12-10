import { MapPin, Phone } from "lucide-react";

export const Offices = () => {
  const offices = [
    {
      city: "La Victoria",
      address:
        "Av Aviación 950 CC. Gama plaza Moda 2do piso Local SN 193 - Local ZOOM",
      phone: "+51 927613970",
      icon: <MapPin className="w-6 h-6 text-blue-500" />,
    },
    {
      city: "Los Olivos",
      address:
        "Av. Alfredo Mendiola 3471, frnte a Meda Plaza, 2do piso Galeria Dolares",
      phone: "",
      icon: <MapPin className="w-6 h-6 text-blue-500" />,
    },
    {
      city: "Santa Anita",
      address:
        "Av. Nicolás Ayllón N 3080 Ate - Lima. C. C. Jessie Stand W11. Frente al Mall Aventura",
      phone: "",
      icon: <MapPin className="w-6 h-6 text-blue-500" />,
    },
    {
      city: "Breña",
      address: "Av. Venezuela 1179 C.C Estrella Plaza Local 136",
      phone: "",
      icon: <MapPin className="w-6 h-6 text-blue-500" />,
    },
  ];

  return (
    <section id="offices" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-500 mb-4">
            Nuestras Oficinas
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
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
              <div className="flex items-center mb-4">
                {office.icon}
                <h3 className="text-xl font-semibold ml-2 text-blue-500">
                  {office.city}
                </h3>
              </div>
              <p className="text-gray-600 mb-2">{office.address}</p>
              {office.phone && (
                <p className="text-gray-600 flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-blue-400" />
                  {office.phone}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
