// src/components/InventoryTable.jsx
import React from "react";
import {motion, AnimatePresence} from "framer-motion"

const InventoryTable = ({ inventory, onDelete }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-md overflow-x-auto">
//       <table className="min-w-full">
//         <thead className="bg-gray-100 text-left">
//           <tr>
//             <th className="py-2 px-4">Name</th>
//             <th className="py-2 px-4">Quantity</th>
//             <th className="py-2 px-4">Category</th>
//             <th className="py-2 px-4">Expiry</th>
//             <th className="py-2 px-4">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {inventory.map(item => (
//             <tr key={item.id} className="border-t">
//               <td className="py-2 px-4">{item.name}</td>
//               <td className="py-2 px-4">{item.quantity}</td>
//               <td className="py-2 px-4">{item.category}</td>
//               <td className="py-2 px-4">
//                 {item.expiryDate ? new Date(item.expiryDate).toLocaleDateString() : "—"}
//               </td>
//               <td className="py-2 px-4">
//                 <button
//                   onClick={() => onDelete(item.id)}
//                   className="text-red-600 hover:underline"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//           {inventory.length === 0 && (
//             <tr>
//               <td colSpan="5" className="py-4 px-4 text-center text-gray-500">
//                 No items added yet.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );

return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      role="grid"
      aria-labelledby="inventory-table"
    >
      <h2 id="inventory-table" className="sr-only">Pantry Inventory Table</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry</th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <AnimatePresence>
            {inventory.length === 0 ? (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center text-gray-500">No items in pantry</td>
              </tr>
            ) : (
              inventory.map((item, index) => (
                <motion.tr
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.expiry ? new Date(item.expiry).toLocaleDateString() : "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <motion.button
                      onClick={() => onDelete(item.id)}
                      className="text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`Delete ${item.name}`}
                    >
                      <TrashIcon className="w-5 h-5" />
                    </motion.button>
                  </td>
                </motion.tr>
              ))
            )}
          </AnimatePresence>
        </tbody>
      </table>
    </motion.div>
  );


};

export default InventoryTable;
