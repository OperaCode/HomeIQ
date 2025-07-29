import React, { useState, useEffect } from "react";
// import ItemCard from "../components/ItemCard";
import { TrashIcon } from "@heroicons/react/24/solid";
import InventoryStats from "../components/InventoryStats";
import AddItemForm from "../components/AddItemForm";
import InventoryTable from "../components/InventoryTable";

const Home = () => {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("pantryItems");
    return saved ? JSON.parse(saved) : [];
  });
   const [inventory, setInventory] = useState([]);

  // Save to localStorage on item change
  useEffect(() => {
    localStorage.setItem("pantryItems", JSON.stringify(items));
  }, [items]);

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

 

  const handleAddItem = item => {
    setInventory(prev => [...prev, item]);
  };

  const handleDeleteItem = id => {
    setInventory(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Pantry</h1>
      <InventoryStats inventory={inventory} />
      <AddItemForm onAdd={handleAddItem} />
      <InventoryTable inventory={inventory} onDelete={handleDeleteItem} />
     
    </div>
  );
};

export default Home;
