import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import logo from "../../assets/logo.jpeg";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-500 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4 max-[768px]:place-content-center max-[768px]:place-items-center">
          <div className="space-y-4 max-[768px]:flex max-[768px]:flex-col max-[768px]:justify-center max-[768px]:items-center">
            <img
              src={logo}
              alt="Suramérica Cargo"
              className="h-[15vh] max-[768px]:h-[25vh] w-auto max-[768px]:w-[50vw]"
            />
            <p className="text-blue-200 max-[768px]:text-center">
              Conectando negocios globalmente con soluciones logísticas
              innovadoras.
            </p>
          </div>
          <div className="space-y-4 max-[768px]:text-center">
            <h3 className="text-xl font-semibold mb-2">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Envío Aéreo
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Envío Marítimo
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Envío Terrestre
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4 max-[768px]:text-center">
            <h3 className="text-xl font-semibold mb-2">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center max-[768px]:justify-center">
                <Phone size={18} className="mr-2" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center max-[768px]:flex max-[768px]:justify-center">
                <Mail size={18} className="mr-2" />
                <span>info@suramericacargo.com</span>
              </li>
              <li className="flex items-center max-[768px]:flex max-[768px]:justify-center">
                <MapPin size={18} className="mr-2" />
                <span>Calle Principal 123, Ciudad</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4 max-[768px]:flex max-[768px]:flex-col max-[768px]:justify-center">
            <h3 className="text-xl font-semibold mb-2 max-[768px]:text-center">
              Síguenos
            </h3>
            <div className="flex space-x-4">
              <a
                href="/"
                className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="/"
                className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="/"
                className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-blue-700 text-center text-sm text-blue-300">
          © {new Date().getFullYear()} Suramérica Cargo. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
