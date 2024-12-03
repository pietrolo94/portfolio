import React, { useEffect, useState } from "react";

const TableTennisResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const apiUrl = "https://fast-api-backend-20ez.onrender.com/dati_atleta";
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data && data.incontri) {
          setResults(data.incontri);
        } else {
          console.error("Dati non validi ricevuti");
        }
        setLoading(false);
      } catch (error) {
        console.error("Errore nel recuperare i risultati:", error);
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-between py-16 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 mb-0">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600 dark:text-indigo-400">
          My Table Tennis Results
        </h2>
        {loading ? (
          <p className="text-center text-gray-600 dark:text-gray-400">
            Loading results...
          </p>
        ) : results.length > 0 ? (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse border border-gray-300 dark:border-gray-700 text-sm text-left rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-indigo-600 dark:bg-gray-700 text-white">
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-xs font-semibold uppercase tracking-wider">
                      Giornata
                    </th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-xs font-semibold uppercase tracking-wider">
                      Atleta 1
                    </th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-xs font-semibold uppercase tracking-wider">
                      Atleta 2
                    </th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-xs font-semibold uppercase tracking-wider">
                      Risultato
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((row, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0
                          ? "bg-white dark:bg-gray-800"
                          : "bg-gray-100 dark:bg-gray-700"
                      } hover:bg-indigo-100 dark:hover:bg-indigo-600`}
                    >
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                        {row.Giornata}
                      </td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                        {row.Atleta1}
                      </td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                        {row.Atleta2}
                      </td>
                      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 flex items-center space-x-2">
                        <span>{row.Risultato}</span>
                        <img
                          src={row.Immagine}
                          alt="Risultato"
                          className="w-4 h-4" // Immagine ancora più piccola
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400">
            No results available at the moment.
          </p>
        )}
      </div>

      {/* Aggiungi il link al sito ufficiale */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-4 mt-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            For more details, visit the official FITeT website:{" "}
            <a
              href="https://portale.fitet.org/risultati/new_rank/dettaglioatleta.php?ATLETA=810613&ZU=0&AVVERSARIO=0&ID_CLASS=224#fragment-1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 underline"
            >
              FITeT Official Website
            </a>
          </p>
        </div>
      </footer>
    </section>
  );
};

export default TableTennisResults;
