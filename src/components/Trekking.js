import React, { useState } from 'react';
// Importazione delle immagini JFIF
import viaDegliDei1 from '../images/via degli dei 1.jfif';
import viaDegliDei2 from '../images/via degli dei 2.jfif';
import viaDegliDei3 from '../images/via degli dei 3.jfif';
import viaDegliDei4 from '../images/via degli dei 4.jfif';
import granSasso1 from '../images/gran sasso 1.jfif';
import granSasso2 from '../images/gran sasso 2.jfif';
import granSasso3 from '../images/gran sasso 3.jfif';
import granSasso4 from '../images/gran sasso 4.jfif';
import Gte1 from '../images/Gte1.jfif';
import Gte2 from '../images/Gte2.jfif';
import Gte3 from '../images/Gte3.jfif';
import Gte4 from '../images/Gte4.jfif';

const trekkingData = [
  {
    title: 'Via degli Dei',
    description: 'La Via degli Dei è un percorso di 130km che attraversa l\'Appennino Tosco-Emiliano: da piazza Maggiore a Bologna, fino a piazza della Signoria a Firenze. Boschi, sentieri e antiche strade millenarie, vi porteranno a scoprire il fascino delle montagne tra l\'Emilia e la Toscana.',
    images: [viaDegliDei1, viaDegliDei2, viaDegliDei3, viaDegliDei4],
  },
  {
    title: 'Grande Traversata Elbana (GTE)',
    description: 'La Grande Traversata Elbana (GTE) percorre il crinale dell\'Elba, da Cavo, all\'estremo nord-est, passando le cime più alte della dorsale orientale, i rilievi più dolci della parte centrale e massiccio granitico del Monte Capanne prima di biforcarsi e scendere di nuovo al mare con la scelta fra il nord-ovest di Patresi e il sud-ovest di Pomonte.',
    images: [Gte1,Gte2,Gte3,Gte4],
  },
  {
    title: 'Cammino del Gran Sasso',
    description: 'il Cammino del Gran Sasso È un sentiero ad anello, diviso in più tappe e percorribile in più giorni. In sessantuno chilometri in cinque tappe attraversa i paesaggi incontaminati del Gran Sasso, pascoli e vette, laghi e valloni, lo splendido borgo medievale di Castel del Monte e Rocca di Calascio, fortificazione medievale di controllo, inserita dal National Geographic tra i 15 castelli più belli al mondo.',
    images: [granSasso1, granSasso2, granSasso3, granSasso4],
  },
];

const Trekking = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleToggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const truncateDescription = (description, maxLength = 100) => {
    if (description.length > maxLength) {
      return `${description.substring(0, maxLength)}...`;
    }
    return description;
  };

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <section className="min-h-screen flex flex-col justify-between py-16 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600 dark:text-indigo-400">
        My Trekking Adventures
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trekkingData.map((trek, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <img
                src={trek.images[0]}
                alt={trek.title}
                className="w-full h-64 object-cover cursor-pointer"
                onClick={() => openModal(trek.images[0])} // Apre il modale per la prima immagine
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">{trek.title}</h3>
                
                {/* Troncamento della descrizione con la possibilità di espandere */}
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {expandedIndex === index
                    ? trek.description
                    : truncateDescription(trek.description)}
                </p>
                
                {/* Pulsante per espandere/collassare la descrizione */}
                <button
                  onClick={() => handleToggleDescription(index)}
                  className="mt-2 text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  {expandedIndex === index ? 'Leggi meno' : 'Leggi di più'}
                </button>
                
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {trek.images.slice(1).map((image, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={image}
                      alt={`${trek.title} - ${imgIndex + 1}`}
                      className="w-full h-24 object-cover rounded-md cursor-pointer"
                      onClick={() => openModal(image)} // Apre il modale per ogni immagine
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modale per ingrandire l'immagine */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={currentImage}
              alt="Immagine ingrandita"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 text-white text-xl p-2"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Trekking;
