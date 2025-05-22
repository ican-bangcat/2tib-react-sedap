import { useState } from "react";
import PageHeader from "../components/PageHeader";
import orders from "../data/orders.json";

export default function Orders() {
  const [orderData] = useState(orders);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    orderId: "",
    customerName: "",
    status: "Pending",
    totalPrice: "",
    orderDate: "",
  });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Order:", form);
    setShowModal(false);
    setForm({
      orderId: "",
      customerName: "",
      status: "Pending",
      totalPrice: "",
      orderDate: "",
    });
  };

  return (
    <div id="dashboard-container">
      <PageHeader title="Orders" breadcrumb={["Dashboard", "Orders"]}>
        <button
          onClick={() => setShowModal(true)}
          className="bg-hijau text-white px-4 py-2 rounded-lg"
        >
          Add New Order
        </button>
      </PageHeader>

      {/* TABEL */}
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-hijau text-left text-sm text-black uppercase">
            <tr>
              <th className="py-2 px-4 border-b">Order ID</th>
              <th className="py-2 px-4 border-b">Customer Name</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Total Price</th>
              <th className="py-2 px-4 border-b">Order Date</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {orderData.map((order) => (
              <tr key={order.orderId} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{order.orderId}</td>
                <td className="py-2 px-4 border-b">{order.customerName}</td>
                <td className="py-2 px-4 border-b">{order.status}</td>
                <td className="py-2 px-4 border-b">
                  Rp {order.totalPrice.toLocaleString("id-ID")}
                </td>
                <td className="py-2 px-4 border-b">{order.orderDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
            <h2 className="text-xl font-semibold mb-4">Add Order</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="orderId"
                placeholder="Order ID"
                className="w-full border p-2 rounded"
                value={form.orderId}
                onChange={handleInputChange}
                required
              />
              <input
                name="customerName"
                placeholder="Customer Name"
                className="w-full border p-2 rounded"
                value={form.customerName}
                onChange={handleInputChange}
                required
              />
              <select
                name="status"
                className="w-full border p-2 rounded"
                value={form.status}
                onChange={handleInputChange}
              >
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
              <input
                name="totalPrice"
                type="number"
                placeholder="Total Price"
                className="w-full border p-2 rounded"
                value={form.totalPrice}
                onChange={handleInputChange}
                required
              />
              <input
                name="orderDate"
                type="date"
                className="w-full border p-2 rounded"
                value={form.orderDate}
                onChange={handleInputChange}
                required
              />

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-hijau text-white px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
