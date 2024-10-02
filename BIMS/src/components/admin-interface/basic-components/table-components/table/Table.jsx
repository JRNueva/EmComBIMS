import { useState, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom'; 
import PropTypes from 'prop-types'; // Make sure to install prop-types
import CheckboxDefault from '../../form-components/fields/CheckboxDefault';

import "./table.css";

// recordType - Administrators, Barangay Officials, Residents, etc
function Table({ columns, data, onRowSelect, recordType = 'defaultCategory' }) {
  const location = useLocation();
  const [selectedRows, setSelectedRows] = useState([]);

  const toggleRowSelection = useCallback((rowIndex) => {
    const newSelectedRows = selectedRows.includes(rowIndex)
      ? selectedRows.filter((index) => index !== rowIndex)
      : [...selectedRows, rowIndex];
 
    setSelectedRows(newSelectedRows);
    onRowSelect(newSelectedRows); // Pass selected rows to parent
  }, [selectedRows, onRowSelect]);

  const handleSelectAll = (e) => {
    const allRowsSelected = e.target.checked;
    const newSelectedRows = allRowsSelected
      ? data.map((_, i) => i) // Select all rows
      : []; // Deselect all rows
    setSelectedRows(newSelectedRows);
    onRowSelect(newSelectedRows); // Notify parent of selection change
  };

  return (
    <div className="admin_table pl-16 overflow-x-auto h-full hide-scroll">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th
              scope="col"
              className="py-4 px-10 bg-gray-200 border-b border-gray-200 text-center text-xs sm:text-sm font-bold text-gray-600 font-inter sticky -top-1 z-10"
            >
              <CheckboxDefault 
                onChange={handleSelectAll}
                checked={selectedRows.length === data.length && data.length > 0} 
              />
            </th>
            {columns.map((column) => (
              <th
                key={column.accessor}
                scope="col"
                className="py-2 px-2 sm:px-4 bg-gray-200 border-b border-gray-200 text-left text-xs sm:text-sm font-bold text-gray-600 font-inter sticky -top-1 z-10"
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
                key={row.id || rowIndex} 
                className={`${
                  rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-100'
                } ${selectedRows.includes(rowIndex) ? 'bg-[#d8dde3]' : ''}`}
              >
                <td
                  className="py-2 px-2 sm:px-4 border-b border-gray-200 text-xs text-center sm:text-sm text-gray-700 font-inter"
                >
                  <CheckboxDefault 
                    onChange={() => toggleRowSelection(rowIndex)}
                    checked={selectedRows.includes(rowIndex)} 
                  />
                </td>
                
                <td
                  className="py-2 px-2 sm:px-4 border-b border-gray-200 text-xs sm:text-sm text-gray-700 font-inter text-left"
                >
                  <NavLink  
                    to={`${location.pathname}/${recordType}/${row[columns[0].accessor]}/view`}
                    className="hover:underline"
                  >
                    {row[columns[0].accessor]}
                  </NavLink>
                </td>
                
                {columns.slice(1).map((column) => (
                  <td
                    key={column.accessor}
                    className="py-2 px-2 sm:px-4 border-b border-gray-200 text-xs text-left sm:text-sm text-gray-700 font-inter"
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

Table.defaultProps = {
  recordType: 'defaultCategory', // Provide a default value
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRowSelect: PropTypes.func.isRequired,
};
export default Table;
