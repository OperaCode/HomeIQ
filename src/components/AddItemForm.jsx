// src/components/AddItemForm.jsx
import React, { useState } from "react";

const AddItemForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    quantity: 1,
    category: "Food",
    expiryDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...formData, id: Date.now() });
    setFormData({ name: "", quantity: 1, category: "Food", expiryDate: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 bg-white p-4 rounded-xl shadow-md"
    >
      <h2 className="text-lg font-semibold mb-4">Add New Item</h2>
      <div className="flex items-center justify-between w-3/4">
        
        <div className="grid grid-cols-1">
          <label htmlFor="name">item name</label>
          <input
            type="text"
            name="name"
            placeholder="Item name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
        </div>
        <div className="grid grid-cols-1">
          <label htmlFor="">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            min={1}
            onChange={handleChange}
            required
            className="p-2 border rounded"
          />
        </div>
        <div className="grid grid-cols-1">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="p-2 border rounded"
          >
            <option value="Food">Food</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Toiletries">Toiletries</option>
          </select>
        </div>
        <div className="grid grid-cols-1">
          <label htmlFor="date">Expiry Date</label>
          <input
            type="date"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Item
      </button>
    </form>
  );
};

export default AddItemForm;
