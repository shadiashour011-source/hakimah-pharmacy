import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { getDailyReport, getMonthlyReport } from "../services/reports";

export default function Reports() {
  const [daily, setDaily] = useState<any>(null);
  const [monthly, setMonthly] = useState<any>(null);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setDaily(await getDailyReport());
    setMonthly(await getMonthlyReport());
  }

  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Navbar />
        <h1>Reports</h1>

        <h2>Daily Report</h2>
        <pre>{JSON.stringify(daily, null, 2)}</pre>

        <h2>Monthly Report</h2>
        <pre>{JSON.stringify(monthly, null, 2)}</pre>

      </div>
    </div>
  );
}
