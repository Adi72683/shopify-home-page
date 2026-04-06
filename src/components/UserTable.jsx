import { useState } from "react";

function UserTable({ users }) {
  const [showTable, setShowTable] = useState(false);

  return (
    <div className="card">
      <button className="primary-btn" onClick={() => setShowTable(true)}>
        Show Users
      </button>

      {showTable && (
        <div>
          <h2>User List</h2>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Role</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user,index,array) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.role}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default UserTable;