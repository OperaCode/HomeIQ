import React, { useState, useEffect } from "react";
import InventoryStats from "../components/InventoryStats";
import AddItemForm from "../components/AddItemForm";
import InventoryTable from "../components/InventoryTable";

const Home = () => {
  const [inventory, setInventory] = useState(() => {
    const saved = localStorage.getItem("inventory");
    return saved ? JSON.parse(saved) : [];
  });

  // Sync inventory to localStorage
  useEffect(() => {
    localStorage.setItem("inventory", JSON.stringify(inventory));
  }, [inventory]);

  const handleDecrement = (id) => {
    setInventory((prev) =>
      prev.map((stock) => ({
        ...stock,
        items: stock.items.map((item) =>
          item.id === id && item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      }))
    );
  };

  const handleAddItem = (item) => {
    setInventory((prev) => [...prev, item]);
    console.log("Inventory added " + inventory);
  };

  const handleDeleteItem = (id) => {
    setInventory((prev) =>
      prev.map((stock) => ({
        ...stock,
        items: stock.items.filter((item) => item.id !== id),
      }))
    );
  };

  const handleDeleteStock = (stockName) => {
    setInventory((prev) =>
      prev.filter((stock) => stock.stockName !== stockName)
    );
  };

  return (
    <div className="min-h-screen bg-[#f9fdfb] text-gray-800">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-700">PantryPal</h1>
          <ul className="flex space-x-6 text-sm md:text-base font-medium">
            <li>
              <a href="#stats" className="hover:text-green-600 transition">
                Stats
              </a>
            </li>
            <li>
              <a href="#add" className="hover:text-green-600 transition">
                Add Item
              </a>
            </li>
            <li>
              <a href="#list" className="hover:text-green-600 transition">
                Inventory
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-green-600 transition">
                Exit App
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto space-y-10 px-4 py-8 scroll-smooth">
        {/* Header */}
        <header className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-700">
            Welcome to PantryPal
          </h2>
          <p className="text-gray-600 mt-2">
            Smartly track and manage your household inventory
          </p>
        </header>

        {/* Stats Section */}
        <section id="stats" className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">
            Inventory Stats
          </h3>
          <InventoryStats inventory={inventory} />
        </section>

        {/* Add Item Section */}
        <section id="add" className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">
            Add New Items
          </h3>
          <AddItemForm onAddStock={handleAddItem} />
        </section>

        {/* Inventory List Section */}
        <section id="list" className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">
            Inventory List
          </h3>
          <InventoryTable
            inventory={inventory}
            onDelete={handleDeleteItem}
            onDeleteStock={handleDeleteStock}
            onDecrement={handleDecrement}
          />
        </section>
      </div>
    </div>
  );
};

export default Home;
