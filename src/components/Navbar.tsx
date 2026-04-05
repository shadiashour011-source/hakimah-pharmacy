import { useEffect, useState } from "react";
import { getAlerts } from "../services/inventory";

export default function Navbar() {
  const [alerts, setAlerts] = useState<any[]>([]);

  useEffect(() => {
    loadAlerts();
  }, []);

  async function loadAlerts() {
    try {
      const data = await getAlerts();
      setAlerts(data || []);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="navbar">
      <span>Hakimah Pharmacy System</span>
      <div className="alerts">Alerts: {alerts.length}</div>
    </div>
  );
}
