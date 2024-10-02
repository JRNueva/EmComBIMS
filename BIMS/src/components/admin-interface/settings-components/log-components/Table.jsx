import React from 'react';
import "../../basic-components/table-components/table/table.css";

function Table({ columns = [], data = [] }) {  // Provide default values to avoid undefined

  return (
    <div className="py-3h-full text-left">
      <table className="w-full bg-white border border-gray-200 overflow-y-auto">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="py-2 px-8 bg-gray-200 border-b border-gray-200 text-left text-xs sm:text-sm font-bold text-gray-600 font-inter sticky -top-1 z-10"
              >
                {column.Header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length + 1} className="text-center py-4 bg-gray-300">
                <p className="text-base font-light opacity-40">No Record Available</p>
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex} // Use unique 'id' for key
                className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
              >
                {columns.map((column) => (
                  <td
                    key={column.accessor}
                    className="py-3 pl-8 border-b border-gray-200 text-xs sm:text-sm text-gray-700 font-inter text-nowrap"
                  >
                    {row[column.accessor]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
