import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaReact } from "react-icons/fa";
import { SiPowerbi } from "react-icons/si";

const Skills = () => {

  const skills = [
    {
      name: "Python",
      icon: <FaPython className="text-5xl text-yellow-500 dark:text-yellow-400" />,
      description: "Expertise in scripting, data analysis, and web development.",
      link: "/streamlit",
      buttonText: "Explore ML App",
    },
    {
      name: "Power BI",
      icon: <SiPowerbi className="text-5xl text-yellow-600 dark:text-yellow-500" />,
      description: "Creating interactive dashboards and insightful reports.",
      link: "/powerbi",
      buttonText: "View Power BI Dashboard",
    },
    {
      name: "React",
      icon: <FaReact className="text-5xl text-blue-400 dark:text-blue-300" />,
      description: "Building dynamic and responsive web applications.",
      link: "/login",
      buttonText: "Log in to private area",
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      <div className="container mx-auto px-4">
        {/* Titolo */}
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Core Skills
        </motion.h2>

        {/* Griglia delle Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-indigo-100 to-purple-100 
                   dark:from-gray-700 dark:to-gray-800 hover:shadow-2xl transition transform hover:-translate-y-1"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              onClick={skill.onClick} // Aggiungi l'onClick per il React
            >
              <div className="flex justify-center mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 text-center mb-2">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                {skill.description}
              </p>
              {skill.link && (
                <a
                  href={skill.link}
                  className="block text-center mt-4 text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-600"
                >
                  {skill.buttonText}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
