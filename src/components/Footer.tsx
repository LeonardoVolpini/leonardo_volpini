import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import MyMail from './utils/MyMail';
import MyPhone from './utils/MyPhone';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        {/* Logo o Nome */}
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <h1 className="text-3xl font-semibold">Leonardo Volpini</h1>
        </div>

        {/* Informazioni di Contatto */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">   {/* Sulla stessa riga nel desktop, su righe diverse su mobile */}
          <MyMail textColor="text-secondary" />
          <MyPhone textColor="text-secondary" />
        </div>

        {/* Social Media */}
        <div className="flex space-x-6 mt-6 md:mt-0">
          <a href="https://www.linkedin.com/in/leonardo-volpini/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-2xl hover:text-blue-500">
            <FaLinkedin />
          </a>
          <a href="https://github.com/LeonardoVolpini" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-2xl hover:text-gray-400">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/leonardo_volpini/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className="text-2xl hover:text-rose-400">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Diritti d'Autore */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Leonardo Volpini - Privacy Policy - P.IVA: 00000000000</p>
      </div>
    </footer>
  );
};
