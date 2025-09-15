import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Chart from "react-google-charts";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = [
    ["Category", "Percentage"],
    ["Software Graduates", 15],
    ["Post Graduates", 5],
    ["Other Graduates", 48],
    ["Support Staff", 10],
    ["Certified Professionals", 14],
    ["Medical Graduates", 8],
  ];

  const options = {
    is3D: true, // Enables 3D effect
    pieStartAngle: 30, // Rotates the chart
    sliceVisibilityThreshold: 0.02, // Hides very small slices
    legend: "none", // Removes legend
    colors: ["#BE01EB", "#35A853", "#4187D6", "#F7AA01", "#DFF401", "#78a54d"],
    chartArea: { width: "80%", height: "80%" }, // Improves spacing
  };

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"500px"}
    />
  );
};

export default PieChart;
