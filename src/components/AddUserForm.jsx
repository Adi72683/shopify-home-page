function AddUserForm({ formData, handleChange, handleAddUser }) {
  return (
    <div className="card">
      <h2>Add User</h2>

      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      />

      <input
        name="role"
        placeholder="Role"
        value={formData.role}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <button className="primary-btn" onClick={handleAddUser}>
        Add User
      </button>
    </div>
  );
}

export default AddUserForm;