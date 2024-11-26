import React from 'react';
// Importazione delle immagini JFIF
import viaDegliDei1 from '../images/via degli dei 1.jfif';
import viaDegliDei2 from '../images/via degli dei 2.jfif';
import viaDegliDei3 from '../images/via degli dei 3.jfif';
import viaDegliDei4 from '../images/via degli dei 4.jfif';
import granSasso1 from '../images/gran sasso 1.jfif';
import granSasso2 from '../images/gran sasso 2.jfif';
import granSasso3 from '../images/gran sasso 3.jfif';
import granSasso4 from '../images/gran sasso 4.jfif';
const trekkingData = [
  {
    title: 'Via degli Dei',
    description: 'La Via degli Dei è un cammino storico che collega Bologna a Firenze, attraversando l\'Appennino Tosco-Emiliano. Un\'avventura immersa nella natura e nella storia.',
    images: [viaDegliDei1, viaDegliDei2, viaDegliDei3,viaDegliDei4],
  },
  {
    title: 'Grande Traversata Elbana (GTE)',
    description: 'La GTE è un cammino che si snoda attraverso le Alpi, offrendo panorami mozzafiato e sfide impegnative. Un\'esperienza unica per gli amanti della montagna.',
    images: [granSasso1, granSasso2, granSasso3,granSasso4],
  },
  {
    title: 'Cammino del Gran Sasso',
    description: 'Il Cammino del Gran Sasso attraversa uno dei massicci più iconici d\'Italia, offrendo paesaggi spettacolari e un\'intensa immersione nella natura selvaggia.',
    images: [granSasso1, granSasso2, granSasso3,granSasso4],
  },
];

const Trekking = () => {
    return (
      <section className="min-h-screen flex flex-col justify-between py-16 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600 dark:text-indigo-400">
            Le mie Avventure di Trekking
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trekkingData.map((trek, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                <img
                  src={trek.images[0]}
                  alt={trek.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">{trek.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{trek.description}</p>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {trek.images.slice(1).map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={image}
                        alt={`${trek.title} - ${imgIndex + 1}`}
                        className="w-full h-24 object-cover rounded-md"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Trekking;

