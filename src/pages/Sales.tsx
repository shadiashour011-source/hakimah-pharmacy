import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { getSales } from "../services/sales";
import jsPDF from "jspdf";

export default function Sales() {
  const [sales, setSales] = useState<any[]>([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const data = await getSales();
    setSales(data || []);
  }

  function exportPDF(sale: any) {
    const doc = new jsPDF();
    doc.text(`Invoice #${sale.id}`, 10, 10);
    doc.text(`Total: ${sale.total}`, 10, 20);
    doc.text(`Date: ${sale.date}`, 10, 30);
    doc.save(`invoice-${sale.id}.pdf`);
  }

  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Navbar />
        <h1>Sales</h1>

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Total</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {sales.map((s: any) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.total}</td>
                <td>{s.date}</td>
                <td>
                  <button onClick={() => exportPDF(s)}>PDF</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}
