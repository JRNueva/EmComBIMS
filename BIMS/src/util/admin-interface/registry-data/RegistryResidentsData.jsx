import { useState } from 'react';
import Table from "../../../components/admin-interface/basic-components/table-components/table/Table";
import TableStatusButton from "../../../components/admin-interface/basic-components/table-components/button-components/TableStatusButton";

function RegistryResidentsData({activeCategory, onRowSelect, query}){

  const [selectedRowIds, setSelectedRowIds] = useState([]); 

  const columns = [
    { Header: 'Resident ID', accessor: 'residentId' },
    { Header: 'Full Name', accessor: 'fullName' },
    { Header: 'Gender', accessor: 'gender' },
    { Header: 'Address', accessor: 'address' },
    { Header: 'Last Updated', accessor: 'lastUpdated' },
    { Header: 'Status', accessor: 'residentStatus' },
  ];

  const data = [
    {
        residentId: 'RSID1001',
        fullName: 'Cardo Dalisay',
        gender: 'Male',
        address: '#123 Sampaguita Street',
        lastUpdated: '02-21-2024',
        residentStatus: 'Active',
    },
    {
        residentId: 'RSID1002',
        fullName: 'Cardo Dalisay',
        gender: 'Male',
        address: '#123 Sampaguita Street',
        lastUpdated: '02-21-2024',
        residentStatus: 'Deceased',
    },
    {
        residentId: 'RSID1003',
        fullName: 'Cardo Dalisay',
        gender: 'Male',
        address: '#123 Sampaguita Street',
        lastUpdated: '02-21-2024',
        residentStatus: 'Active',
    },
    {
        residentId: 'RSID1004',
        fullName: 'Cardo Dalisay',
        gender: 'Male',
        address: '#123 Sampaguita Street',
        lastUpdated: '02-21-2024',
        residentStatus: 'Active',
    },
    {
        residentId: 'RSID1005',
        fullName: 'Cardo Dalisay',
        gender: 'Male',
        address: '#123 Sampaguita Street',
        lastUpdated: '02-21-2024',
        residentStatus: 'Deceased',
    },
    {
        residentId: 'RSID1006',
        fullName: 'Cardo Dalisay',
        gender: 'Male',
        address: '#123 Sampaguita Street',
        lastUpdated: '02-21-2024',
        residentStatus: 'Active',
    },
    {
        residentId: 'RSID1007',
        fullName: 'Cardo Dalisay',
        gender: 'Male',
        address: '#123 Sampaguita Street',
        lastUpdated: '02-21-2024',
        residentStatus: 'Active',
    },
    {
        residentId: 'RSID1008',
        fullName: 'Cardo Dalisay',
        gender: 'Male',
        address: '#123 Sampaguita Street',
        lastUpdated: '02-21-2024',
        residentStatus: 'Deceased',
    },
    {
        residentId: 'RSID1009',
        fullName: 'Cardo Dalisay',
        gender: 'Male',
        address: '#123 Sampaguita Street',
        lastUpdated: '02-21-2024',
        residentStatus: 'Active',
    },
    {
        residentId: 'RSID1010',
        fullName: 'Cardo Dalisay',
        gender: 'Male',
        address: '#123 Sampaguita Street',
        lastUpdated: '02-21-2024',
        residentStatus: 'Active',
    },
    {
        residentId: 'RSID1011',
        fullName: 'Cardo Dalisay',
        gender: 'Male',
        address: '#123 Sampaguita Street',
        lastUpdated: '02-21-2024',
        residentStatus: 'Deceased',
    },
    {
        residentId: 'RSID1012',
        fullName: 'Cardo Dalisay',
        gender: 'Male',
        address: '#123 Sampaguita Street',
        lastUpdated: '02-21-2024',
        residentStatus: 'Active',
    },
    {
        residentId: 'RSID1013',
        fullName: 'Cardo Dalisay',
        gender: 'Male',
        address: '#123 Sampaguita Street',
        lastUpdated: '02-21-2024',
        residentStatus: 'Active',
    },
    {
        residentId: 'RSID1014',
        fullName: 'Cardo Dalisay',
        gender: 'Male',
        address: '#123 Sampaguita Street',
        lastUpdated: '02-21-2024',
        residentStatus: 'Deceased',
    },
    // Add more data here

    {
        residentId: 'RSID1001',
        fullName: 'Cardo Dalisay',
        gender: 'Male',
        address: '#123 Sampaguita Street',
        lastUpdated: '02-21-2024',
        residentStatus: 'Active',
    },
    {
        residentId: 'RSID1002',
        fullName: 'Cardo Dalisay',
        gender: 'Male',
        address: '#123 Sampaguita Street',
        lastUpdated: '02-21-2024',
        residentStatus: 'Deceased',
    },
    {
        residentId: 'RSID1003',
        fullName: 'Cardo Dalisay',
        gender: 'Male',
        address: '#123 Sampaguita Street',
        lastUpdated: '02-21-2024',
        residentStatus: 'Active',
    },
    {
        residentId: 'RSID1004',
        fullName: 'Cardo Dalisay',
        gender: 'Male',
        address: '#123 Sampaguita Street',
        lastUpdated: '02-21-2024',
        residentStatus: 'Active',
    },
    {
        residentId: 'RSID1005',
        fullName: 'Cardo Dalisay',
        gender: 'Male',
        address: '#123 Sampaguita Street',
        lastUpdated: '02-21-2024',
        residentStatus: 'Deceased',
    },
    {
        residentId: 'RSID1006',
        fullName: 'Cardo Dalisay',
        gender: 'Male',
        address: '#123 Sampaguita Street',
        lastUpdated: '02-21-2024',
        residentStatus: 'Active',
    },
    {
        residentId: 'RSID1007',
        fullName: 'Cardo Dalisay',
        gender: 'Male',
        address: '#123 Sampaguita Street',
        lastUpdated: '02-21-2024',
        residentStatus: 'Active',
    },
    {
        residentId: 'RSID1008',
        fullName: 'Cardo Dalisay',
        gender: 'Male',
        address: '#123 Sampaguita Street',
        lastUpdated: '02-21-2024',
        residentStatus: 'Deceased',
    },
    {
        residentId: 'RSID1009',
        fullName: 'Cardo Dalisay',
        gender: 'Male',
        address: '#123 Sampaguita Street',
        lastUpdated: '02-21-2024',
        residentStatus: 'Active',
    },
    {
        residentId: 'RSID1010',
        fullName: 'Cardo Dalisay',
        gender: 'Male',
        address: '#123 Sampaguita Street',
        lastUpdated: '02-21-2024',
        residentStatus: 'Active',
    },
    {
        residentId: 'RSID1011',
        fullName: 'Cardo Dalisay',
        gender: 'Male',
        address: '#123 Sampaguita Street',
        lastUpdated: '02-21-2024',
        residentStatus: 'Deceased',
    },
    {
        residentId: 'RSID1012',
        fullName: 'Cardo Dalisay',
        gender: 'Male',
        address: '#123 Sampaguita Street',
        lastUpdated: '02-21-2024',
        residentStatus: 'Active',
    },
    {
        residentId: 'RSID1013',
        fullName: 'Cardo Dalisay',
        gender: 'Male',
        address: '#123 Sampaguita Street',
        lastUpdated: '02-21-2024',
        residentStatus: 'Active',
    },
    {
        residentId: 'RSID1014',
        fullName: 'Cardo Dalisay',
        gender: 'Male',
        address: '#123 Sampaguita Street',
        lastUpdated: '02-21-2024',
        residentStatus: 'Deceased',
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-50 text-green-800 px-4 rounded-full flex items-center font-semibold font-inter';
      case 'Inactive':
        return 'bg-red-50 text-red-800 px-3 rounded-full flex items-center font-semibold font-inter';
      default:
        return 'bg-gray-300 text-gray-800 px-3 rounded-full flex items-center font-semibold font-inter';
    }
  };

  const fieldKeys = columns.map(column => column.accessor);
  const queryLower = typeof query === 'string' ? query.toLowerCase() : '';
  
  const filteredData = data.filter((row) => {

    const matchesCategory =
      activeCategory === "All" || 
      (activeCategory === "Active") && row.residentStatus === "Active" || 
      (activeCategory === "Deceased") && row.residentStatus === "Deceased";

    const matchesQuery = fieldKeys.some(field => 
      row[field].toLowerCase().includes(queryLower)
    );

    return matchesCategory && matchesQuery;
  });

  const handleSelectRow = (selectedIds) => {
    setSelectedRowIds(selectedIds);
    onRowSelect(selectedIds);  // Pass selected rows to parent
  };

  return (
    <div className="w-full h-full bg-gray-200 m-0 pb-6">
      <Table
        recordType='resident-profile'
        columns={columns}
        data={filteredData.map((row) => ({
          ...row,
          residentStatus: (
            <TableStatusButton
              changeStatus={() => alert(`Changing status for ${row.fullName}`)}
              statustxt={row.residentStatus}
              statusStyle={getStatusStyle(row.residentStatus)}
            />
          ),
        }))}
        withCheckbox={true}
        onRowSelect={handleSelectRow} 
      />
    </div>
  )
}
export default RegistryResidentsData