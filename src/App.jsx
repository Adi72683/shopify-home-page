import { useState, useEffect } from "react";
import "./App.css";

import UserTable from "./components/UserTable";
import ProductList from "./components/ProductList";
import AddUserForm from "./components/AddUserForm";

function App() {
  const [users, setUsers] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    role: "",
    email: "",
  });

  const [userStatus, setUserStatus] = useState("Offline");

  useEffect(() => {
    if (users.length > 0) {
      setUserStatus("Active");
    } else {
      setUserStatus("Offline");
    }
  }, [users]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddUser = () => {
    if (!formData.name || !formData.email) return;

    const newUser = {
      id: users.length + 1,
      ...formData,
    };

    setUsers([...users, newUser]);

    setFormData({ name: "", age: "", role: "", email: "" });
  };

  return (
    <div className="app">
      <h1>E Commerce</h1>

      <h3>Status: {userStatus}</h3>

      <AddUserForm
        formData={formData}
        handleChange={handleChange}
        handleAddUser={handleAddUser}
      />

      <UserTable users={users} />

      <ProductList />
    </div>
  );
}

export default App;