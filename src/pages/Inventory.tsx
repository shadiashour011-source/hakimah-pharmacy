import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {
  getAllMedicines,
  deleteMedicine,
  getFEFOList,
} from "../services/inventory";

export default function Inventory() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    loadItems();
  }, []);

  async function loadItems() {
    const data = await getAllMedicines();
    setItems(data || []);
  }

  async function loadFEFO() {
    const data = await getFEFOList();
    setItems(data || []);
  }

  async function handleDelete(id: number) {
    await deleteMedicine(id);
    loadItems();
  }

  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Navbar />
        <h1>Inventory</h1>

        <button onClick={loadItems}>All</button>
        <button onClick={loadFEFO}>FEFO</button>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Stock</th>
              <th>Expiry</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {items.map((m: any) => (
              <tr key={m.id}>
                <td>{m.name}</td>
                <td>{m.stock}</td>
                <td>{m.expiry}</td>
                <td>
                  <button>Edit</button>
                  <button onClick={() => handleDelete(m.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}
