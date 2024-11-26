import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A fantastic project description.",
      image: "https://via.placeholder.com/150", // Placeholder per immagine
    },
    {
      title: "Project 2",
      description: "Another awesome project.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Project 3",
      description: "A creative project idea.",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200"
    >
      <div className="container mx-auto px-4">
        {/* Titolo */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold mb-4 text-gray-800 dark:text-gray-200">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            A showcase of my favorite projects, combining creativity and
            technical skills.
          </p>
        </motion.div>

        {/* Griglia dei Progetti */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            hidden: { opacity: 0 },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 overflow-hidden"
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
            >
              {/* Immagine del Progetto */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />

              {/* Contenuto */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Pulsante "View Details" */}
              <div className="absolute bottom-4 right-4">
                <a
                  href="#"
                  className="px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-700 dark:hover:bg-indigo-600 transition"
                >
                  View Details
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

