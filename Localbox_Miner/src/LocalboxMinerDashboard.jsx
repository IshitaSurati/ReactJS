import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import "../src/App.css"; 

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LocalboxMinerDashboard = () => {
  const [status, setStatus] = useState("Idle");
  const [hashRate, setHashRate] = useState(0);
  const [uptime, setUptime] = useState(0);
  const [earnings, setEarnings] = useState(0);
  const [hashRateHistory, setHashRateHistory] = useState([]);
  const [earningsHistory, setEarningsHistory] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHashRate = (Math.random() * 100).toFixed(2);
      const newEarnings = Math.random() * 0.01;
      setHashRate(newHashRate);
      setUptime((prev) => prev + 1);
      setEarnings((prev) => prev + newEarnings);
      setHashRateHistory((prev) => [...prev.slice(-9), newHashRate]);
      setEarningsHistory((prev) => [...prev.slice(-9), (prev[prev.length - 1] || 0) + newEarnings]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const startMining = () => {
    setStatus("Mining...");
  };

  const stopMining = () => {
    setStatus("Stopped");
    setHashRate(0);
  };

  const hashRateData = {
    labels: Array.from({ length: hashRateHistory.length }, (_, i) => i + 1),
    datasets: [
      {
        label: "Hash Rate (H/s)",
        data: hashRateHistory,
        borderColor: "#007bff",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        fill: true,
      },
    ],
  };

  const earningsData = {
    labels: Array.from({ length: earningsHistory.length }, (_, i) => i + 1),
    datasets: [
      {
        label: "Earnings ($)",
        data: earningsHistory,
        borderColor: "#28a745",
        backgroundColor: "rgba(40, 167, 69, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Localbox Miner Dashboard</h1>
      <div className="stats-container">
        {[
          { title: "Status", value: status, class: "primary" },
          { title: "Hash Rate", value: `${hashRate} H/s`, class: "info" },
          { title: "Uptime", value: `${uptime} sec`, class: "success" },
          { title: "Earnings", value: `$${earnings.toFixed(4)}`, class: "warning" },
        ].map((item, index) => (
          <div key={index} className={`stat-card ${item.class}`}>
            <h2>{item.title}</h2>
            <p>{item.value}</p>
          </div>
        ))}
      </div>

      <div className="charts-container">
        <div className="chart-card">
          <h3>Hash Rate Over Time</h3>
          <Line data={hashRateData} height={200} />
        </div>
        <div className="chart-card">
          <h3>Earnings Over Time</h3>
          <Line data={earningsData} height={200} />
        </div>
      </div>

      <div className="buttons-container">
        <button onClick={startMining} className="start-btn">Start Mining</button>
        <button onClick={stopMining} className="stop-btn">Stop Mining</button>
      </div>
    </div>
  );
};

export default LocalboxMinerDashboard;
