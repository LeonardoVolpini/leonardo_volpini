import Image from "next/image";

export const AboutMe = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-center px-8 md:px-16 mt-16">
      {/* Sezione Testo - 2/3 */}
      <div className="md:w-2/3 pr-10 flex flex-col items-start md:items-start text-center md:text-left">
        <p className="text-2xl" style={{ color: '#1729e6' }}>
          Due parole su di me:
        </p>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Aiuto aziende e piccoli imprenditori a creare e gestire il loro spazio nel mercato digitale.
        </h1>

        <p className="mt-4 text-muted-foreground text-xl">
          Sono un ragazzo di 25 anni con una laurea triennale in ingegneria gestionale e una magistrale in ingegneria informatica, entrambe ottenute presso il dal Politecnico di Torino.<br />
          Da due anni sviluppo software per la Leonardo SpA, ma la mia vera passione è aiutare aziende e freelancer a crescere online. <br />
          Perciò creo siti web e sviluppo software su misura per semplificare e ottimizzare il loro lavoro.
        </p>

      </div>

      {/* Sezione Immagine - 1/3 */}
      <div className="hidden md:flex md:w-1/3 justify-center items-center mt-8 md:mt-0">
        <div className="relative w-full h-[80vh] overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/images/profile-picture.jpg"
            alt="Immagine personale di Leonardo Volpini"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};
