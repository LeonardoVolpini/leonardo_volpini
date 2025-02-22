import { Mail, Phone } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Contattami
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Informazioni di Contatto</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>volpini.leonardo@gmail.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+39 320 7159594</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Social Media</h3>

              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/leonardo-volpini/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full p-3 bg-secondary rounded-md hover:bg-secondary/80 transition-colors"
                >
                  <span className="text-primary">LinkedIn</span>
                </a>

                <a
                  href="https://github.com/LeonardoVolpini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full p-3 bg-secondary rounded-md hover:bg-secondary/80 transition-colors"
                >
                  <span className="text-primary">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}