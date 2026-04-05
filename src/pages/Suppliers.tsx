import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { getSuppliers, deleteSupplier } from "../services/suppliers";

export default function Suppliers() {
  const [suppliers, setSuppliers] = useState<any[]>([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const data = await getSuppliers();
    setSuppliers(data || []);
  }

  async function handleDelete(id: number) {
    await deleteSupplier(id);
    load();
  }

  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Navbar />
        <h1>Suppliers</h1>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {suppliers.map((s: any) => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.phone}</td>
                <td>
                  <button>Edit</button>
                  <button onClick={() => handleDelete(s.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}
