import React, { useState } from "react";

const AddItemForm = ({ onAddStock }) => {
  const [stockName, setStockName] = useState("");
  const [registerDate, setRegisterDate] = useState("");
  const [items, setItems] = useState([
    { id: Date.now(), name: "", quantity: 1, category: "Food", expiryDate: "" },
  ]);

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    setItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, [name]: name === "quantity" ? parseInt(value) : value } : item
      )
    );
  };

  const addNewItemField = () => {
    setItems((prev) => [
      ...prev,
      { id: Date.now(), name: "", quantity: 1, category: "Food", expiryDate: "" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!stockName || items.some((item) => item.name.trim() === "")) return;

    const newStock = {
      stockName: stockName.trim(),
      registerDate,
      items,
    };

    onAddStock(newStock); // <-- ✅ FIXED FUNCTION NAME

    // Reset form
    setStockName("");
    setRegisterDate("");
    setItems([
      { id: Date.now(), name: "", quantity: 1, category: "Food", expiryDate: "" },
    ]);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 py-2">➕ Create New Stock</h2>

      {/* Stock Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Stock Name</label>
          <input
            type="text"
            value={stockName}
            onChange={(e) => setStockName(e.target.value)}
            placeholder="e.g., Dry Goods"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Register Date</label>
          <input
            type="date"
            value={registerDate}
            onChange={(e) => setRegisterDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Pantry Items */}
      <h3 className="text-xl font-semibold text-gray-700 pt-4">Pantry Items</h3>
      {items.map((item, index) => (
        <div key={item.id} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Item Name</label>
            <input
              type="text"
              name="name"
              value={item.name}
              onChange={(e) => handleItemChange(index, e)}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={item.quantity}
              onChange={(e) => handleItemChange(index, e)}
              min="1"
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              name="category"
              value={item.category}
              onChange={(e) => handleItemChange(index, e)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="Food">Food</option>
              <option value="Cleaning">Cleaning</option>
              <option value="Toiletries">Toiletries</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
            <input
              type="date"
              name="expiryDate"
              value={item.expiryDate}
              onChange={(e) => handleItemChange(index, e)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={addNewItemField}
          className="text-blue-600 hover:underline"
        >
          ➕ Add Another Item
        </button>
        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700"
        >
          ✅ Register Stock
        </button>
      </div>
    </form>
  );
};

export default AddItemForm;
