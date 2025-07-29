import React from "react";
import {
  ExclamationTriangleIcon,
  ClockIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

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
  const allItems = inventory.flatMap((stock) => stock.items || []);

  const totalItems = allItems.length;
  const totalQuantity = allItems.reduce(
    (sum, item) => sum + (item.quantity || 0),
    0
  );
  const lowStock = allItems.filter((item) => item.quantity <= 2).length;
  const expiredItems = allItems.filter((item) => {
    const expiry = new Date(item.expiryDate);
    return expiry.toString() !== "Invalid Date" && expiry < new Date();
  }).length;

  const upcomingExpiries = allItems.filter((item) => {
    const expiry = new Date(item.expiryDate);
    const today = new Date();
    const in7Days = new Date();
    in7Days.setDate(today.getDate() + 7);
    return (
      expiry.toString() !== "Invalid Date" &&
      expiry > today &&
      expiry <= in7Days
    );
  }).length;

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
        title="Expiring Soon"
        value={upcomingExpiries}
        bg="bg-orange-100"
        text="text-orange-800"
      />
      <StatCard
        icon={ClipboardDocumentListIcon}
        title="Total Quantity"
        value={totalQuantity}
        bg="bg-green-100"
        text="text-green-800"
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
