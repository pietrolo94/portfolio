import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      <div className="container mx-auto px-4 text-center">
        {/* Titolo */}
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
          Contact Me
        </h2>

        {/* Descrizione */}
        <p className="mb-6 text-gray-600 dark:text-gray-400">
        Feel free to reach out for collaborations or just a friendly chat 😊.
        </p>

        {/* Pulsante per Email */}
        <a
          href="mailto:pietro.zoffoli1994@gmail.com"
          className="px-6 py-3 bg-indigo-600 text-white dark:bg-indigo-500 dark:hover:bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 transition-transform transform hover:-translate-y-1"
        >
          Send Email
        </a>
      </div>
    </section>
  );
};

export default Contact;

