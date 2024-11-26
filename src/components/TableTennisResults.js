import React, { useEffect, useState } from 'react';

const TableTennisResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(
          "https://corsproxy.io/?https://portale.fitet.org/risultati/incontri_atleta_acc.php?ATLETA=810613"
        );
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");
        const rows = Array.from(doc.querySelectorAll("table tr"));

        const data = rows.map((row) => {
          const cells = Array.from(row.querySelectorAll("td")).map((cell) =>
            cell.textContent.trim()
          );
          return cells.slice(1);
        });

        const adjustedResults = data.map((row) => {
          if (row.length > 3) {
            row[3] = `${row[3]}  ${row[4]}`;
            row.splice(4, 1);
          }
          return row;
        });

        const filteredResults = adjustedResults.map((row) =>
          row.filter((cell) => cell !== "")
        );

        const nonEmptyResults = filteredResults.filter(
          (row) =>
            row.length > 0 &&
            !row.some((cell) => cell.includes("valido per la classifica"))
        );

        setResults(nonEmptyResults);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching results:", error);
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
        ) : results.length > 1 ? (
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
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-200"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400">
            No results available at the moment.
          </p>
        )}
      </div>
    </section>
  );
};

export default TableTennisResults;

