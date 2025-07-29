import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrashIcon, MinusIcon } from "@heroicons/react/24/solid";

const formatDate = (dateStr) => {
  if (!dateStr) return "N/A";
  const date = new Date(dateStr);
  return isNaN(date) ? "Invalid date" : date.toLocaleDateString();
};

const InventoryTable = ({ inventory, onDelete, onDecrement }) => {
  const stockNames = inventory.map((stock) => stock.stockName);
  const [selectedStock, setSelectedStock] = useState(stockNames[0] || null);

  if (!inventory.length) {
    return (
      <div className="text-center text-gray-500 py-10">
        No inventory items to display.
      </div>
    );
  }

  const selectedStockData = inventory.find(
    (stock) => stock.stockName === selectedStock
  );

  return (
    <div className="flex gap-6">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-50 rounded-lg shadow-md p-4 space-y-3 h-fit sticky top-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">📦 Stocks</h2>
        {stockNames.map((stock) => (
          <button
            key={stock}
            onClick={() => setSelectedStock(stock)}
            className={`block w-full text-left px-3 py-2 rounded-md ${
              selectedStock === stock
                ? "bg-blue-600 text-white"
                : "hover:bg-blue-100 text-gray-800"
            }`}
          >
            {stock}
          </button>
        ))}
      </div>

      {/* Inventory Content */}
      <div className="w-3/4 space-y-6">
        {selectedStockData && (
          <div className="bg-white shadow-lg rounded-xl p-4">
            <h2 className="text-xl font-bold text-blue-700 mb-4">
              {selectedStockData.stockName}
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full border divide-y divide-gray-200">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                      Item
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                      Category
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                      Quantity
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                      Expiry
                    </th>
                    <th className="px-4 py-2 text-center text-sm font-medium text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence>
                    {selectedStockData.items.map((item) => (
                      <motion.tr
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="hover:bg-gray-50"
                      >
                        <td className="px-4 py-2 text-sm">{item.name}</td>
                        <td className="px-4 py-2 text-sm">{item.category || "Uncategorized"}</td>
                        <td className="px-4 py-2 text-sm">{item.quantity}</td>
                        <td className="px-4 py-2 text-sm">
                          {formatDate(item.expiryDate)}
                        </td>
                        <td className="px-4 py-2 text-center flex gap-2 justify-center">
                          <button
                            onClick={() => onDecrement(item.id)}
                            className="p-1 bg-yellow-100 hover:bg-yellow-200 text-yellow-700 rounded-full"
                            title="Reduce Quantity"
                          >
                            <MinusIcon className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => onDelete(item.id)}
                            className="p-1 bg-red-100 hover:bg-red-200 text-red-600 rounded-full"
                            title="Delete Item"
                          >
                            <TrashIcon className="h-5 w-5" />
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InventoryTable;
