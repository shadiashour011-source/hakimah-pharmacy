import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { getAllMedicines } from "../services/inventory";
import { getTodaySales } from "../services/sales";

export default function Dashboard() {
  const [totalMedicines, setTotalMedicines] = useState(0);
  const [lowStock, setLowStock] = useState(0);
  const [expired, setExpired] = useState(0);
  const [todaySales, setTodaySales] = useState(0);

  useEffect(() => {
    loadKPIs();
  }, []);

  async function loadKPIs() {
    try {
      const meds = await getAllMedicines();
      setTotalMedicines(meds.length || 0);
      setLowStock((meds || []).filter((m: any) => m.stock <= 10).length);
      setExpired((meds || []).filter((m: any) => new Date(m.expiry) < new Date()).length);

      const sales = await getTodaySales();
      setTodaySales(sales.total || 0);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Navbar />

        <h1>Dashboard</h1>

        <div className="kpi-grid">
          <div className="kpi-card">
            <h3>Total Medicines</h3>
            <p className="kpi-number">{totalMedicines}</p>
          </div>

          <div className="kpi-card">
            <h3>Low Stock Items</h3>
            <p className="kpi-number">{lowStock}</p>
          </div>

          <div className="kpi-card">
            <h3>Expired Medicines</h3>
            <p className="kpi-number">{expired}</p>
          </div>

          <div className="kpi-card">
            <h3>Today Sales</h3>
            <p className="kpi-number">SAR {todaySales}</p>
          </div>
        </div>

        <div className="chart-placeholder">
          <h2>Sales Overview</h2>
          <p>Chart will appear here after API integration.</p>
        </div>
      </div>
    </div>
  );
}
