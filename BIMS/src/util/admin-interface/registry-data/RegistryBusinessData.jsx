import { useState } from 'react';
import Table from "../../../components/admin-interface/basic-components/table-components/table/Table";
import TableStatusButton from "../../../components/admin-interface/basic-components/table-components/button-components/TableStatusButton";

function RegistryBusinessData({activeCategory , onRowSelect, query}){
  const [selectedRowIds, setSelectedRowIds] = useState([]); 
  const columns = [
      { Header: 'Permit No.', accessor: 'businessPermit' },
      { Header: 'Business Name', accessor: 'businessName' },
      { Header: 'Business Type', accessor: 'businessType' },
      { Header: 'Owner', accessor: 'owner' },
      { Header: 'Address', accessor: 'address' },
      { Header: 'Date Issued', accessor: 'dateIssued' },
      { Header: 'Expiration Date', accessor: 'expirationDate' },
      { Header: 'Status', accessor: 'businessStatus' },
    ];
  
  const data = [
    {
        businessPermit: '12345',
        businessName: 'JD Bakeshop',
        businessType: 'Bakery',
        owner: 'Juan Dela Cruz',
        address: '#123 Sampaguita Street',
        dateIssued: '01-25-2024',
        expirationDate: '01-24-2025',
        businessStatus: 'Active',
    },
    {
        businessPermit: '67890',
        businessName: 'Cozy Cafe',
        businessType: 'Coffee Shop',
        owner: 'Liza De Jesus',
        address: '#43 Narra Street',
        dateIssued: '06-20-2024',
        expirationDate: '06-19-2025',
        businessStatus: 'Active',
    },
    {
        businessPermit: '54321',
        businessName: 'Green Earth Store',
        businessType: 'Retail',
        owner: 'Marie Santos',
        address: '#87 Sampaguita Street',
        dateIssued: '08-16-2023',
        expirationDate: '08-15-2024',
        businessStatus: 'Expired',
    },
    {
        businessPermit: '98760',
        businessName: 'Fitness Hub',
        businessType: 'Gym',
        owner: 'Arnold Reyes',
        address: '#65 Narra Street',
        dateIssued: '09-05-2023',
        expirationDate: '09-04-2024',
        businessStatus: 'Inactive',
    },
    {
        businessPermit: '12345',
        businessName: 'JD Bakeshop',
        businessType: 'Bakery',
        owner: 'Juan Dela Cruz',
        address: '#123 Sampaguita Street',
        dateIssued: '01-25-2024',
        expirationDate: '01-24-2025',
        businessStatus: 'Active',
    },
    {
        businessPermit: '67890',
        businessName: 'Cozy Cafe',
        businessType: 'Coffee Shop',
        owner: 'Liza De Jesus',
        address: '#43 Narra Street',
        dateIssued: '06-20-2024',
        expirationDate: '06-19-2025',
        businessStatus: 'Active',
    },
    {
        businessPermit: '54321',
        businessName: 'Green Earth Store',
        businessType: 'Retail',
        owner: 'Marie Santos',
        address: '#87 Sampaguita Street',
        dateIssued: '08-16-2023',
        expirationDate: '08-15-2024',
        businessStatus: 'Expired',
    },
    {
        businessPermit: '98760',
        businessName: 'Fitness Hub',
        businessType: 'Gym',
        owner: 'Arnold Reyes',
        address: '#65 Narra Street',
        dateIssued: '09-05-2023',
        expirationDate: '09-04-2024',
        businessStatus: 'Inactive',
    },
    {
        businessPermit: '12345',
        businessName: 'JD Bakeshop',
        businessType: 'Bakery',
        owner: 'Juan Dela Cruz',
        address: '#123 Sampaguita Street',
        dateIssued: '01-25-2024',
        expirationDate: '01-24-2025',
        businessStatus: 'Active',
    },
    {
        businessPermit: '67890',
        businessName: 'Cozy Cafe',
        businessType: 'Coffee Shop',
        owner: 'Liza De Jesus',
        address: '#43 Narra Street',
        dateIssued: '06-20-2024',
        expirationDate: '06-19-2025',
        businessStatus: 'Active',
    },
    {
        businessPermit: '54321',
        businessName: 'Green Earth Store',
        businessType: 'Retail',
        owner: 'Marie Santos',
        address: '#87 Sampaguita Street',
        dateIssued: '08-16-2023',
        expirationDate: '08-15-2024',
        businessStatus: 'Expired',
    },
    {
        businessPermit: '98760',
        businessName: 'Fitness Hub',
        businessType: 'Gym',
        owner: 'Arnold Reyes',
        address: '#65 Narra Street',
        dateIssued: '09-05-2023',
        expirationDate: '09-04-2024',
        businessStatus: 'Inactive',
    },
    // Add more data here
    {
        businessPermit: '12345',
        businessName: 'JD Bakeshop',
        businessType: 'Bakery',
        owner: 'Juan Dela Cruz',
        address: '#123 Sampaguita Street',
        dateIssued: '01-25-2024',
        expirationDate: '01-24-2025',
        businessStatus: 'Active',
    },
    {
        businessPermit: '67890',
        businessName: 'Cozy Cafe',
        businessType: 'Coffee Shop',
        owner: 'Liza De Jesus',
        address: '#43 Narra Street',
        dateIssued: '06-20-2024',
        expirationDate: '06-19-2025',
        businessStatus: 'Active',
    },
    {
        businessPermit: '54321',
        businessName: 'Green Earth Store',
        businessType: 'Retail',
        owner: 'Marie Santos',
        address: '#87 Sampaguita Street',
        dateIssued: '08-16-2023',
        expirationDate: '08-15-2024',
        businessStatus: 'Expired',
    },
    {
        businessPermit: '98760',
        businessName: 'Fitness Hub',
        businessType: 'Gym',
        owner: 'Arnold Reyes',
        address: '#65 Narra Street',
        dateIssued: '09-05-2023',
        expirationDate: '09-04-2024',
        businessStatus: 'Inactive',
    },
    {
        businessPermit: '12345',
        businessName: 'JD Bakeshop',
        businessType: 'Bakery',
        owner: 'Juan Dela Cruz',
        address: '#123 Sampaguita Street',
        dateIssued: '01-25-2024',
        expirationDate: '01-24-2025',
        businessStatus: 'Active',
    },
    {
        businessPermit: '67890',
        businessName: 'Cozy Cafe',
        businessType: 'Coffee Shop',
        owner: 'Liza De Jesus',
        address: '#43 Narra Street',
        dateIssued: '06-20-2024',
        expirationDate: '06-19-2025',
        businessStatus: 'Active',
    },
    {
        businessPermit: '54321',
        businessName: 'Green Earth Store',
        businessType: 'Retail',
        owner: 'Marie Santos',
        address: '#87 Sampaguita Street',
        dateIssued: '08-16-2023',
        expirationDate: '08-15-2024',
        businessStatus: 'Expired',
    },
    {
        businessPermit: '98760',
        businessName: 'Fitness Hub',
        businessType: 'Gym',
        owner: 'Arnold Reyes',
        address: '#65 Narra Street',
        dateIssued: '09-05-2023',
        expirationDate: '09-04-2024',
        businessStatus: 'Inactive',
    },
    {
        businessPermit: '12345',
        businessName: 'JD Bakeshop',
        businessType: 'Bakery',
        owner: 'Juan Dela Cruz',
        address: '#123 Sampaguita Street',
        dateIssued: '01-25-2024',
        expirationDate: '01-24-2025',
        businessStatus: 'Active',
    },
    {
        businessPermit: '67890',
        businessName: 'Cozy Cafe',
        businessType: 'Coffee Shop',
        owner: 'Liza De Jesus',
        address: '#43 Narra Street',
        dateIssued: '06-20-2024',
        expirationDate: '06-19-2025',
        businessStatus: 'Active',
    },
    {
        businessPermit: '54321',
        businessName: 'Green Earth Store',
        businessType: 'Retail',
        owner: 'Marie Santos',
        address: '#87 Sampaguita Street',
        dateIssued: '08-16-2023',
        expirationDate: '08-15-2024',
        businessStatus: 'Expired',
    },
    {
        businessPermit: '98760',
        businessName: 'Fitness Hub',
        businessType: 'Gym',
        owner: 'Arnold Reyes',
        address: '#65 Narra Street',
        dateIssued: '09-05-2023',
        expirationDate: '09-04-2024',
        businessStatus: 'Inactive',
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-50 text-green-800 px-4 rounded-full flex items-center font-semibold font-inter';
      case 'Expired':
        return 'bg-red-50 text-red-800 px-3 rounded-full flex items-center font-semibold font-inter';
      case 'Inactive':
        return 'bg-gray-300 text-gray-800 px-3 rounded-full flex items-center font-semibold font-inter';
      default:
        return 'bg-gray-300 text-gray-800 px-3 rounded-full flex items-center font-semibold font-inter';
    }
  };

  const fieldKeys = columns.map(column => column.accessor);
  const queryLower = typeof query === 'string' ? query.toLowerCase() : '';

  const filteredData = data.filter((row) => {

    const matchesCategory =
      activeCategory === "All" || 
      (activeCategory === "Active Business") && row.businessStatus === "Active" || 
      (activeCategory === "Inactive Business") && row.businessStatus === "Inactive" ||
      (activeCategory === "Expired Permits") && row.businessStatus === "Expired";

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
    <div className="w-full h-full bg-gray-200 m-0 p-0 pb-6">
      <Table
        recordType='business-registration-form'
        columns={columns}
        data={filteredData.map((row) => ({
          ...row,
        businessStatus: (
            <TableStatusButton
              changeStatus={() => alert(`Changing status for ${row.fullName}`)}
              statustxt={row.businessStatus}
              statusStyle={getStatusStyle(row.businessStatus)}
            />
          ),
        }))}
        withCheckbox={true}
        onRowSelect={handleSelectRow} 
      />
    </div>
  )
}
export default RegistryBusinessData