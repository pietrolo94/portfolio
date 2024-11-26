import React from "react";
import { Link } from "react-router-dom"; // Importa Link da React Router
import { FaTableTennis, FaMountain, FaBitcoin } from "react-icons/fa";

const Passions = () => {
  return (
    <section
      id="passions"
      className="py-16 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">My Passions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tennis Tavolo */}
          <div className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-700 hover:shadow-2xl transition transform hover:-translate-y-1">
            <FaTableTennis className="text-5xl text-blue-500 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              Table Tennis
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              I have a strong passion for table tennis, and I compete in local
              and regional tournaments.
            </p>
            <Link
              to="/table-tennis-results" // Il link alla pagina dei risultati
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              View My Results
            </Link>
          </div>

          {/* Trekking */}
          <div className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900 dark:to-green-700 hover:shadow-2xl transition transform hover:-translate-y-1">
            <FaMountain className="text-5xl text-green-500 dark:text-green-400 mb-4" />
            <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">
              Trekking
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Exploring new trails and connecting with nature is one of my
              favorite pastimes.
            </p>
            <Link
              to="/trekking" // Link alla pagina sul trekking
              className="text-green-600 dark:text-green-400 hover:underline"
            >
              Discover My Recent Adventures
            </Link>
          </div>

          {/* Bitcoin */}
          <div className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-900 dark:to-yellow-700 hover:shadow-2xl transition transform hover:-translate-y-1">
            <FaBitcoin className="text-5xl text-yellow-500 dark:text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
              Bitcoin
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              I'm passionate about Bitcoin and the future of digital currencies.
            </p>
            <Link
              to="/bitcoin" // Link alla pagina su Bitcoin
              className="text-yellow-600 dark:text-yellow-400 hover:underline"
            >
              Learn More About Bitcoin
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Passions;

