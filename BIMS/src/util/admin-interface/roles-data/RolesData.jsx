import { useState } from 'react';
import Table from '../../../components/admin-interface/basic-components/table-components/table/Table';
import TableStatusButton from '../../../components/admin-interface/basic-components/table-components/button-components/TableStatusButton';

function RolesData({ activeCategory, onRowSelect, query }) {
  const [selectedRowIds, setSelectedRowIds] = useState([]); 
  const columns = [
    { Header: 'Access ID', accessor: 'accessId' },
    { Header: 'Full Name', accessor: 'fullName' },
    { Header: 'Access Level', accessor: 'accessLevel' },
    { Header: 'Position', accessor: 'position' },
    { Header: 'Date Activated', accessor: 'dateActivated' },
    { Header: 'Account Status', accessor: 'accountStatus' },
  ];

  const data = [
    {
      accessId: 'Kgwd_Bulaon_2024',
      fullName: 'Jun Bulaon',
      accessLevel: 'Content Manager',
      position: 'Brgy. Councilor',
      dateActivated: '02-21-2024',
      accountStatus: 'Active',
    },
    {
      accessId: 'Kgwd_Cruz_2024',
      fullName: 'Riodelle Cruz',
      accessLevel: 'Content Manager',
      position: 'Brgy. Councilor',
      dateActivated: '02-21-2024',
      accountStatus: 'Active',
    },
    {
      accessId: 'Kgwd_DelaCruz_2024',
      fullName: 'Juan Dela Cruz',
      accessLevel: 'System Auditor',
      position: 'Brgy. Councilor',
      dateActivated: '02-21-2024',
      accountStatus: 'Inactive',
    },
    {
      accessId: 'Kgwd_Esteban_2024',
      fullName: 'Jerome Esteban',
      accessLevel: 'Content Manager',
      position: 'Brgy. Councilor',
      dateActivated: '02-21-2024',
      accountStatus: 'Inactive',
    },
    {
      accessId: 'Kgwd_Faustin_2024',
      fullName: 'Teresa Faustin',
      accessLevel: 'System Auditor',
      position: 'Brgy. Councilor',
      dateActivated: '02-21-2024',
      accountStatus: 'Active',
    },
    {
      accessId: 'Kgwd_Magsakay_2024',
      fullName: 'Maria Santos',
      accessLevel: 'System Auditor',
      position: 'Brgy. Councilor',
      dateActivated: '02-21-2024',
      accountStatus: 'Inactive',
    },
    {
      accessId: 'SKChair_Medina_2024',
      fullName: 'James Medina',
      accessLevel: 'System Auditor',
      position: 'SK Chairman',
      dateActivated: '02-21-2024',
      accountStatus: 'Inactive',
    },
    {
      accessId: 'Treas_Nueva_2024',
      fullName: 'Joanne Nueva',
      accessLevel: 'Content Manager',
      position: 'Treasurer',
      dateActivated: '02-21-2024',
      accountStatus: 'Active',
    },
    {
      accessId: 'Kap_Angel_2024',
      fullName: 'Angel Reyes',
      accessLevel: 'Admin',
      position: 'Brgy. Captain',
      dateActivated: '02-21-2024',
      accountStatus: 'Active',
    },
    {
      accessId: 'Kgwd_Samonte_2024',
      fullName: 'Lj Samonte',
      accessLevel: 'System Auditor',
      position: 'Brgy. Councilor',
      dateActivated: '02-21-2024',
      accountStatus: 'Inactive',
    },
    {
      accessId: 'Sec_Santos_2024',
      fullName: 'Maria Santos',
      accessLevel: 'Admin',
      position: 'Secretary',
      dateActivated: '02-21-2024',
      accountStatus: 'Active',
    },
    {
      accessId: 'SKKgwd_Tuazon_2024',
      fullName: 'Luis Tuazon',
      accessLevel: 'System Auditor',
      position: 'SK Councilor',
      dateActivated: '02-21-2024',
      accountStatus: 'Inactive',
    },
    // Add more data here
    {
      accessId: 'Kgwd_Bulaon_2024',
      fullName: 'Jun Bulaon',
      accessLevel: 'Content Manager',
      position: 'Brgy. Councilor',
      dateActivated: '02-21-2024',
      accountStatus: 'Active',
    },
    {
      accessId: 'Kgwd_Cruz_2024',
      fullName: 'Riodelle Cruz',
      accessLevel: 'Content Manager',
      position: 'Brgy. Councilor',
      dateActivated: '02-21-2024',
      accountStatus: 'Active',
    },
    {
      accessId: 'Kgwd_DelaCruz_2024',
      fullName: 'Juan Dela Cruz',
      accessLevel: 'System Auditor',
      position: 'Brgy. Councilor',
      dateActivated: '02-21-2024',
      accountStatus: 'Inactive',
    },
    {
      accessId: 'Kgwd_Esteban_2024',
      fullName: 'Jerome Esteban',
      accessLevel: 'Content Manager',
      position: 'Brgy. Councilor',
      dateActivated: '02-21-2024',
      accountStatus: 'Inactive',
    },
    {
      accessId: 'Kgwd_Faustin_2024',
      fullName: 'Teresa Faustin',
      accessLevel: 'System Auditor',
      position: 'Brgy. Councilor',
      dateActivated: '02-21-2024',
      accountStatus: 'Active',
    },
    {
      accessId: 'Kgwd_Magsakay_2024',
      fullName: 'Maria Santos',
      accessLevel: 'System Auditor',
      position: 'Brgy. Councilor',
      dateActivated: '02-21-2024',
      accountStatus: 'Inactive',
    },
    {
      accessId: 'SKChair_Medina_2024',
      fullName: 'James Medina',
      accessLevel: 'System Auditor',
      position: 'SK Chairman',
      dateActivated: '02-21-2024',
      accountStatus: 'Inactive',
    },
    {
      accessId: 'Treas_Nueva_2024',
      fullName: 'Joanne Nueva',
      accessLevel: 'Content Manager',
      position: 'Treasurer',
      dateActivated: '02-21-2024',
      accountStatus: 'Active',
    },
    {
      accessId: 'Kap_Angel_2024',
      fullName: 'Angel Reyes',
      accessLevel: 'Admin',
      position: 'Brgy. Captain',
      dateActivated: '02-21-2024',
      accountStatus: 'Active',
    },
    {
      accessId: 'Kgwd_Samonte_2024',
      fullName: 'Lj Samonte',
      accessLevel: 'System Auditor',
      position: 'Brgy. Councilor',
      dateActivated: '02-21-2024',
      accountStatus: 'Inactive',
    },
    {
      accessId: 'Sec_Santos_2024',
      fullName: 'Maria Santos',
      accessLevel: 'Admin',
      position: 'Secretary',
      dateActivated: '02-21-2024',
      accountStatus: 'Active',
    },
    {
      accessId: 'SKKgwd_Tuazon_2024',
      fullName: 'Luis Tuazon',
      accessLevel: 'System Auditor',
      position: 'SK Councilor',
      dateActivated: '02-21-2024',
      accountStatus: 'Inactive',
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
      (activeCategory === "Administrators" && row.accessLevel === "Admin") || 
      (activeCategory === "Barangay Officials" && row.position.includes("Brgy.") || row.position.includes("SK"));

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
    <div className="w-full h-full bg-gray-200 m-0 p-0">
      <Table
        columns={columns}
        data={filteredData.map((row) => ({
          ...row,
          accountStatus: (
            <TableStatusButton
              changeStatus={() => alert(`Changing status for ${row.fullName}`)}
              statustxt={row.accountStatus}
              statusStyle={getStatusStyle(row.accountStatus)}
            />
          ),
        }))}
        withCheckbox={true}
        onRowSelect={handleSelectRow} 
      />
    </div>
  );
}

export default RolesData;
