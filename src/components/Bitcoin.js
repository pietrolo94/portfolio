import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const Bitcoin = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=90&interval=daily"
        );
        const data = await response.json();

        const labels = data.prices.map((price) =>
          new Date(price[0]).toLocaleDateString()
        );
        const prices = data.prices.map((price) => price[1]);

        setChartData({
          labels,
          datasets: [
            {
              label: "Bitcoin Price (USD)",
              data: prices,
              borderColor: "rgba(255, 206, 86, 0.6)",
              backgroundColor: "rgba(255, 206, 86, 0.2)",
              fill: true,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching Bitcoin data:", error);
      }
    };

    fetchBitcoinData();
  }, []);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <h2 className="text-3xl font-bold text-center mb-4 text-yellow-500">
          My Bitcoin Journey
        </h2>
        {/* Subtitle */}
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-8">
          I started exploring Bitcoin and cryptocurrencies during the COVID-19 pandemic as a way to protect my capital from rampant inflation. This period ignited my passion for understanding blockchain technology and its transformative potential.
        </p>

        {/* Chart Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-yellow-500 mb-4 text-center">
            Bitcoin Price - Last 90 Days (Daily)
          </h3>
          {chartData ? (
            <div className="w-full sm:w-3/4 lg:w-2/3 mx-auto">
              <Line data={chartData} />
            </div>
          ) : (
            <p className="text-center">Loading chart...</p>
          )}
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* History Section */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">
              The Beginning of Bitcoin
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Bitcoin was introduced in 2009 by an anonymous entity known as
              Satoshi Nakamoto. It is the first decentralized digital currency
              that uses blockchain technology to enable peer-to-peer
              transactions without the need for intermediaries.
            </p>
          </div>

          {/* Why I’m Passionate */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">
              Why I’m Passionate
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Bitcoin’s revolutionary impact on the global financial system
              inspires me. The transparency and security of blockchain
              technology, combined with its potential to empower individuals
              economically, make it a fascinating subject for me.
            </p>
          </div>
        </div>

        {/* Fun Facts Section */}
        <div className="mt-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-yellow-500 mb-4">
            Fun Facts About Bitcoin
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Did you know that Bitcoin’s total supply is capped at 21 million
            coins, making it a deflationary asset? The first real-world Bitcoin
            transaction was for two pizzas, costing 10,000 BTC in 2010. At its
            peak, Bitcoin’s market capitalization has exceeded $1 trillion.
          </p>
        </div>

        {/* Resources Section */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold text-yellow-500 mb-4 text-center">
            Resources to Learn More
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            For more information, you can visit the{" "}
            <a
              href="https://bitcoin.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Bitcoin Official Website
            </a>{" "}
            or watch this{" "}
            <a
              href="https://www.youtube.com/watch?v=bBC-nXj3Ng4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              video explaining how Bitcoin works
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bitcoin;





