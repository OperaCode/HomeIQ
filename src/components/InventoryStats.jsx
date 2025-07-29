import React from "react";
import { ExclamationTriangleIcon, ClockIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/outline";

const StatCard = ({ icon: Icon, title, value, bg, text }) => (
  <div className={`flex items-center p-4 rounded-xl shadow-md ${bg} ${text}`}>
    <div className="p-3 bg-white rounded-full shadow mr-4">
      <Icon className="h-6 w-6 text-gray-700" />
    </div>
    <div>
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="text-xl font-bold">{value}</p>
    </div>
  </div>
);

const InventoryStats = ({ inventory }) => {
  const totalItems = inventory.length;
  const lowStock = inventory.filter(item => item.quantity <= 2).length;
  const expiredItems = inventory.filter(item => new Date(item.expiryDate) < new Date()).length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <StatCard
        icon={ClipboardDocumentListIcon}
        title="Total Items"
        value={totalItems}
        bg="bg-blue-100"
        text="text-blue-800"
      />
      <StatCard
        icon={ExclamationTriangleIcon}
        title="Low Stock"
        value={lowStock}
        bg="bg-yellow-100"
        text="text-yellow-800"
      />
      <StatCard
        icon={ClockIcon}
        title="Expired Items"
        value={expiredItems}
        bg="bg-red-100"
        text="text-red-800"
      />
    </div>
  );
};

export default InventoryStats;
