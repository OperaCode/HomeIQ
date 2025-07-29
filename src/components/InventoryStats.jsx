// src/components/InventoryStats.jsx
import React from "react";

const InventoryStats = ({ inventory }) => {
  const totalItems = inventory.length;
  const lowStock = inventory.filter(item => item.quantity <= 2).length;
  const expiredItems = inventory.filter(item => new Date(item.expiryDate) < new Date()).length;

  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold">Total Items</h3>
        <p className="text-2xl font-bold">{totalItems}</p>
      </div>
      <div className="bg-yellow-100 p-4 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold">Low Stock</h3>
        <p className="text-2xl font-bold">{lowStock}</p>
      </div>
      <div className="bg-red-100 p-4 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold">Expired</h3>
        <p className="text-2xl font-bold">{expiredItems}</p>
      </div>
    </div>
  );
};

export default InventoryStats;
