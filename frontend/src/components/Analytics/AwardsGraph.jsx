import React from "react";
import { Bar } from "react-chartjs-2";

export const AwardsGraph = ({ data }) => {
  // Filter out entries with "No name" username and awards count set to 0
  const filteredData = data.filter(
    (item) => item.userName !== "No name" && item.awardsCount !== 0
  );

  // Extracting usernames and award counts from the filtered data
  const usernames = filteredData.map((item) => item.userName);
  const awardCounts = filteredData.map((item) => item.awardsCount);

  // Creating the chart data object
  const chartData = {
    labels: usernames,
    datasets: [
      {
        label: "Awards Received",
        data: awardCounts,
        backgroundColor: "rgba(75,192,192,0.6)",
      },
    ],
  };

  // Chart options
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        precision: 0,
      },
    },
  };

  return (
    <div className="h-[300px]">
      <h2>Awards Received by Each Faculty</h2>
      {filteredData.length > 0 ? (
        <Bar data={chartData} options={chartOptions} />
      ) : (
        <p>No awards data available.</p>
      )}
    </div>
  );
};
