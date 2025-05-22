import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User List</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b text-left">#</th>
                <th className="py-2 px-4 border-b text-left">Image</th>
                <th className="py-2 px-4 border-b text-left">Username</th>
                <th className="py-2 px-4 border-b text-left">Name</th>
                <th className="py-2 px-4 border-b text-left">Email</th>
                <th className="py-2 px-4 border-b text-left">Gender</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b">
                    <img
                      src={user.image}
                      alt={user.username}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </td>
                  <td className="py-2 px-4 border-b">{user.username}</td>
                  <td className="py-2 px-4 border-b">
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                  <td className="py-2 px-4 border-b capitalize">
                    {user.gender}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
