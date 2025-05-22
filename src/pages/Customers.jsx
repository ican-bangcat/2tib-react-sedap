import { useState } from "react";
import PageHeader from "../components/PageHeader";
import customers from "../data/customers.json";

export default function Customers() {
    const [customerData] = useState(customers);
    const [showModal, setShowModal] = useState(false);
    const [form, setForm] = useState({
        customerId: "",
        customerName: "",
        email: "",
        phone: "",
        loyalty: "Bronze",
    });

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Customer:", form);
        setShowModal(false); // tutup modal setelah submit
        setForm({ customerId: "", customerName: "", email: "", phone: "", loyalty: "Bronze" }); // reset form
    };

    return (
        <div id="dashboard-container">
            <PageHeader
                title="Customer"
                breadcrumb={["Dashboard", "Customer List"]}
            >
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-hijau text-white px-4 py-2 rounded-lg"
                >
                    Add New Customer
                </button>
            </PageHeader>

            {/* TABEL */}
            <div className="overflow-x-auto mt-4">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-hijau text-left text-sm text-black uppercase">
                        <tr>
                            <th className="py-2 px-4 border-b">Customer ID</th>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Phone</th>
                            <th className="py-2 px-4 border-b">Loyalty</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700">
                        {customerData.map((cust) => (
                            <tr key={cust.customerId} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b">{cust.customerId}</td>
                                <td className="py-2 px-4 border-b">{cust.customerName}</td>
                                <td className="py-2 px-4 border-b">{cust.email}</td>
                                <td className="py-2 px-4 border-b">{cust.phone}</td>
                                <td className="py-2 px-4 border-b">{cust.loyalty}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* MODAL
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                    <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
                        <h2 className="text-xl font-semibold mb-4">Add Customer</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                name="customerId"
                                placeholder="Customer ID"
                                className="w-full border p-2 rounded"
                                value={form.customerId}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                name="customerName"
                                placeholder="Name"
                                className="w-full border p-2 rounded"
                                value={form.customerName}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="w-full border p-2 rounded"
                                value={form.email}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                name="phone"
                                placeholder="Phone"
                                className="w-full border p-2 rounded"
                                value={form.phone}
                                onChange={handleInputChange}
                                required
                            />
                            <select
                                name="loyalty"
                                className="w-full border p-2 rounded"
                                value={form.loyalty}
                                onChange={handleInputChange}
                            >
                                <option value="Bronze">Bronze</option>
                                <option value="Silver">Silver</option>
                                <option value="Gold">Gold</option>
                            </select>

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
            )} */}
        </div>
    );
}
