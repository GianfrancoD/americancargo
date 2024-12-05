import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function SocialMedia() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full -ml-32 -mt-32 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100 rounded-full -mr-32 -mb-32 opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-4">
          Conéctate con Nosotros
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Mantente informado sobre nuestras últimas novedades y ofertas
          especiales
        </p>
        <div className="flex justify-center items-center space-x-8">
          {["facebook", "instagram", "twitter", "linkedin"].map((platform) => (
            <a
              key={platform}
              href={`https://www.${platform}.com/suramericacargo`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="sr-only">{platform}</span>
              {platform === "facebook" && (
                <Facebook size={32} className="text-blue-600" />
              )}
              {platform === "instagram" && (
                <Instagram size={32} className="text-pink-600" />
              )}
              {platform === "twitter" && (
                <Twitter size={32} className="text-blue-400" />
              )}
              {platform === "linkedin" && (
                <Linkedin size={32} className="text-blue-700" />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
