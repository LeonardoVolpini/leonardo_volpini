import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import MyMail from './utils/MyMail';
import MyPhone from './utils/MyPhone';

export const Contacts = () => {
  return (
    <section id="contact" className="pt-4">
      <div className="container mx-auto px-4">

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-6">Informazioni di Contatto</h3>

              <div className="space-y-8">
                <MyMail textColor='text-primary' />

                <MyPhone textColor='text-primary' />
              </div>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Social Media</h3>

              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/leonardo-volpini/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex items-center gap-3 w-full p-3 bg-secondary rounded-md hover:bg-secondary/80 hover:text-blue-500 transition-colors"
                >
                  <FaLinkedin />
                  <span className="text-primary">LinkedIn</span>
                </a>

                <a
                  href="https://www.instagram.com/leonardo_volpini/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="flex items-center gap-3 w-full p-3 bg-secondary rounded-md hover:bg-secondary/80 hover:text-rose-400 transition-colors"
                >
                  <FaInstagram />
                  <span className="text-primary">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}