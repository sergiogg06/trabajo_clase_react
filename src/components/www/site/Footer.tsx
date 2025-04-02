import React from "react";
import { Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-6 py-10 mt-12 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-4">Mi Empresa</h4>
          <p className="text-sm">Construyendo soluciones web modernas con pasión y código limpio.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Inicio</a></li>
            <li><a href="#" className="hover:underline">Servicios</a></li>
            <li><a href="#" className="hover:underline">Proyectos</a></li>
            <li><a href="#" className="hover:underline">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Términos</a></li>
            <li><a href="#" className="hover:underline">Privacidad</a></li>
            <li><a href="#" className="hover:underline">Cookies</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
          <div className="flex space-x-4">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
