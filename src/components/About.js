import React from "react";
import { FaLaptopCode, FaChartBar, FaSwimmer } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200"
    >
      <div className="container mx-auto px-4">
        {/* Titolo principale */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold mb-4 text-gray-800 dark:text-gray-200">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Data Analyst with a passion for problem-solving and data
            visualization. Skilled in tools like Power BI, Excel, and SQL, with
            a proactive and adaptable attitude.
          </p>
        </motion.div>

        {/* Icone con descrizioni */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            hidden: { opacity: 0 },
          }}
        >
          {/* Card 1 */}
          <motion.div
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
          >
            <FaLaptopCode className="text-5xl text-indigo-600 dark:text-indigo-400 mb-4" />
            <h3 className="font-bold text-lg mb-2">Technical Skills</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Proficient in Excel, Power BI, SQL, and data analysis tools.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
          >
            <FaChartBar className="text-5xl text-purple-600 dark:text-purple-400 mb-4" />
            <h3 className="font-bold text-lg mb-2">Data Analysis</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Skilled in data visualization and analysis to drive insights.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
          >
            <FaSwimmer className="text-5xl text-green-600 dark:text-green-400 mb-4" />
            <h3 className="font-bold text-lg mb-2">Resilience</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Experience in roles requiring adaptability and teamwork, like
              lifeguard and swim instructor.
            </p>
          </motion.div>
        </motion.div>

        {/* Sezioni aggiuntive */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-3 text-gray-800 dark:text-gray-200">
            My Background
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            I have a diverse professional journey, ranging from lifeguard and
            swim instructor roles to data analysis. My academic background
            includes studies in computer engineering and certification in data
            analysis.
          </p>
          <p className="mb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
            Currently, I am a Data Analyst at{" "}
            <a
              href="https://www.dilaxia.com/" // Sostituisci con il link corretto
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Dilaxia S.p.A.
            </a>
            , where I apply my technical expertise to analyze and visualize data
            effectively.
          </p>

          <h3 className="text-3xl font-bold mb-3 text-gray-800 dark:text-gray-200">
            Beyond Work
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Outside of work, I enjoy table tennis, trekking, and swimming. These
            activities help me stay active and sharpen my focus. I also have a
            passion for learning and improving my skills, both personally and
            professionally.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
