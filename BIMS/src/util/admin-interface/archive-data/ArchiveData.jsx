import { useState } from "react";
import Table from "../../../components/admin-interface/basic-components/table-components/table/Table";

function ArchiveData({ activeCategory, onRowSelect, query }) {
  const [selectedRowIds, setSelectedRowIds] = useState([]);

  const columns = [
    { Header: 'Archive No.', accessor: 'archiveNo' },
    { Header: 'Type', accessor: 'type' },
    { Header: 'Location', accessor: 'location' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Date Archived', accessor: 'dateArchive' },
    { Header: 'Archived By', accessor: 'archivedBy' },
    { Header: 'Reason for Archiving', accessor: 'reason' },
  ];

  const data = [
    {
      archiveNo: '001',
      type: 'Indigency Form',
      location: 'Records',
      name: 'Juan Dela Cruz',
      dateArchive: '01-25-2024',
      archivedBy: 'Anne Santos',
      reason: 'Request Cancelled'
    },
    {
      archiveNo: '002',
      type: 'Barangay Clearance',
      location: 'Records',
      name: 'Maria Lopez',
      dateArchive: '02-10-2024',
      archivedBy: 'Carlos Rivera',
      reason: 'Request Cancelled'
    },
    {
      archiveNo: '003',
      type: 'Business Permit',
      location: 'Registry',
      name: 'ABC Store',
      dateArchive: '03-15-2024',
      archivedBy: 'Linda Garcia',
      reason: 'Relocation'
    },
    {
      archiveNo: '004',
      type: 'Incident Report',
      location: 'Registry',
      name: 'Case #1234 - Theft',
      dateArchive: '04-05-2024',
      archivedBy: 'Jose Martinez',
      reason: 'Transferred to Higher Authority'
    },
    {
      archiveNo: '005',
      type: 'Barangay ID',
      location: 'Records',
      name: 'Mark Reyes',
      dateArchive: '05-20-2024',
      archivedBy: 'Anne Santos',
      reason: 'ID Not Claimed'
    },
    {
      archiveNo: '006',
      type: 'Indigency Form',
      location: 'Records',
      name: 'Anna Cruz',
      dateArchive: '06-10-2024',
      archivedBy: 'Carlos Rivera',
      reason: 'Request Denied'
    },
    {
      archiveNo: '007',
      type: 'Business Permit',
      location: 'Registry',
      name: 'XYZ Cafe',
      dateArchive: '07-15-2024',
      archivedBy: 'Linda Garcia',
      reason: 'Relocation'
    },
    {
      archiveNo: '008',
      type: 'Barangay Clearance',
      location: 'Records',
      name: 'Pedro Santos',
      dateArchive: '08-25-2024',
      archivedBy: 'Maria Lopez',
      reason: 'Request Cancelled'
    },
    {
      archiveNo: '009',
      type: 'Incident Report',
      location: 'Registry',
      name: 'Case #5678 - Assault',
      dateArchive: '09-05-2024',
      archivedBy: 'Jose Martinez',
      reason: 'No Further Action'
    },
    {
      archiveNo: '010',
      type: 'Barangay ID',
      location: 'Records',
      name: 'Jane Smith',
      dateArchive: '10-01-2024',
      archivedBy: 'Anne Santos',
      reason: 'ID Expired'
    },
    {
      archiveNo: '011',
      type: 'Barangay Clearance',
      location: 'Records',
      name: 'Pedro Santos',
      dateArchive: '08-25-2024',
      archivedBy: 'Maria Lopez',
      reason: 'Request Cancelled'
    },
    {
      archiveNo: '012',
      type: 'Incident Report',
      location: 'Registry',
      name: 'Case #5678 - Assault',
      dateArchive: '09-05-2024',
      archivedBy: 'Jose Martinez',
      reason: 'No Further Action'
    },
    {
      archiveNo: '013',
      type: 'Barangay ID',
      location: 'Records',
      name: 'Jane Smith',
      dateArchive: '10-01-2024',
      archivedBy: 'Anne Santos',
      reason: 'ID Expired'
    },
    //
    {
      archiveNo: '008',
      type: 'Barangay Clearance',
      location: 'Records',
      name: 'Pedro Santos',
      dateArchive: '08-25-2024',
      archivedBy: 'Maria Lopez',
      reason: 'Request Cancelled'
    },
    {
      archiveNo: '009',
      type: 'Incident Report',
      location: 'Registry',
      name: 'Case #5678 - Assault',
      dateArchive: '09-05-2024',
      archivedBy: 'Jose Martinez',
      reason: 'No Further Action'
    },
    {
      archiveNo: '010',
      type: 'Barangay ID',
      location: 'Records',
      name: 'Jane Smith',
      dateArchive: '10-01-2024',
      archivedBy: 'Anne Santos',
      reason: 'ID Expired'
    },
    {
      archiveNo: '011',
      type: 'Barangay Clearance',
      location: 'Records',
      name: 'Pedro Santos',
      dateArchive: '08-25-2024',
      archivedBy: 'Maria Lopez',
      reason: 'Request Cancelled'
    },
    {
      archiveNo: '012',
      type: 'Incident Report',
      location: 'Registry',
      name: 'Case #5678 - Assault',
      dateArchive: '09-05-2024',
      archivedBy: 'Jose Martinez',
      reason: 'No Further Action'
    },
    {
      archiveNo: '013',
      type: 'Barangay ID',
      location: 'Records',
      name: 'Jane Smith',
      dateArchive: '10-01-2024',
      archivedBy: 'Anne Santos',
      reason: 'ID Expired'
    },
    //
        {
      archiveNo: '001',
      type: 'Indigency Form',
      location: 'Records',
      name: 'Juan Dela Cruz',
      dateArchive: '01-25-2024',
      archivedBy: 'Anne Santos',
      reason: 'Request Cancelled'
    },
    {
      archiveNo: '002',
      type: 'Barangay Clearance',
      location: 'Records',
      name: 'Maria Lopez',
      dateArchive: '02-10-2024',
      archivedBy: 'Carlos Rivera',
      reason: 'Request Cancelled'
    },
    {
      archiveNo: '003',
      type: 'Business Permit',
      location: 'Registry',
      name: 'ABC Store',
      dateArchive: '03-15-2024',
      archivedBy: 'Linda Garcia',
      reason: 'Relocation'
    },
    {
      archiveNo: '004',
      type: 'Incident Report',
      location: 'Registry',
      name: 'Case #1234 - Theft',
      dateArchive: '04-05-2024',
      archivedBy: 'Jose Martinez',
      reason: 'Transferred to Higher Authority'
    },
    {
      archiveNo: '005',
      type: 'Barangay ID',
      location: 'Records',
      name: 'Mark Reyes',
      dateArchive: '05-20-2024',
      archivedBy: 'Anne Santos',
      reason: 'ID Not Claimed'
    },
    {
      archiveNo: '006',
      type: 'Indigency Form',
      location: 'Records',
      name: 'Anna Cruz',
      dateArchive: '06-10-2024',
      archivedBy: 'Carlos Rivera',
      reason: 'Request Denied'
    },
    {
      archiveNo: '007',
      type: 'Business Permit',
      location: 'Registry',
      name: 'XYZ Cafe',
      dateArchive: '07-15-2024',
      archivedBy: 'Linda Garcia',
      reason: 'Relocation'
    },
    {
      archiveNo: '008',
      type: 'Barangay Clearance',
      location: 'Records',
      name: 'Pedro Santos',
      dateArchive: '08-25-2024',
      archivedBy: 'Maria Lopez',
      reason: 'Request Cancelled'
    },
    {
      archiveNo: '009',
      type: 'Incident Report',
      location: 'Registry',
      name: 'Case #5678 - Assault',
      dateArchive: '09-05-2024',
      archivedBy: 'Jose Martinez',
      reason: 'No Further Action'
    },
    {
      archiveNo: '010',
      type: 'Barangay ID',
      location: 'Records',
      name: 'Jane Smith',
      dateArchive: '10-01-2024',
      archivedBy: 'Anne Santos',
      reason: 'ID Expired'
    },
    {
      archiveNo: '011',
      type: 'Barangay Clearance',
      location: 'Records',
      name: 'Pedro Santos',
      dateArchive: '08-25-2024',
      archivedBy: 'Maria Lopez',
      reason: 'Request Cancelled'
    },
    {
      archiveNo: '012',
      type: 'Incident Report',
      location: 'Registry',
      name: 'Case #5678 - Assault',
      dateArchive: '09-05-2024',
      archivedBy: 'Jose Martinez',
      reason: 'No Further Action'
    },
    {
      archiveNo: '013',
      type: 'Barangay ID',
      location: 'Records',
      name: 'Jane Smith',
      dateArchive: '10-01-2024',
      archivedBy: 'Anne Santos',
      reason: 'ID Expired'
    },
    //
    {
      archiveNo: '008',
      type: 'Barangay Clearance',
      location: 'Records',
      name: 'Pedro Santos',
      dateArchive: '08-25-2024',
      archivedBy: 'Maria Lopez',
      reason: 'Request Cancelled'
    },
    {
      archiveNo: '009',
      type: 'Incident Report',
      location: 'Registry',
      name: 'Case #5678 - Assault',
      dateArchive: '09-05-2024',
      archivedBy: 'Jose Martinez',
      reason: 'No Further Action'
    },
    {
      archiveNo: '010',
      type: 'Barangay ID',
      location: 'Records',
      name: 'Jane Smith',
      dateArchive: '10-01-2024',
      archivedBy: 'Anne Santos',
      reason: 'ID Expired'
    },
    {
      archiveNo: '011',
      type: 'Barangay Clearance',
      location: 'Records',
      name: 'Pedro Santos',
      dateArchive: '08-25-2024',
      archivedBy: 'Maria Lopez',
      reason: 'Request Cancelled'
    },
    {
      archiveNo: '012',
      type: 'Incident Report',
      location: 'Registry',
      name: 'Case #5678 - Assault',
      dateArchive: '09-05-2024',
      archivedBy: 'Jose Martinez',
      reason: 'No Further Action'
    },
    {
      archiveNo: '013',
      type: 'Barangay ID',
      location: 'Records',
      name: 'Jane Smith',
      dateArchive: '10-01-2024',
      archivedBy: 'Anne Santos',
      reason: 'ID Expired'
    },
    

    
  ];

  const fieldKeys = columns.map(column => column.accessor);
  const queryLower = typeof query === 'string' ? query.toLowerCase() : '';

  const filteredData = data.filter((row) => {

    const matchesCategory =
      activeCategory === "All" || 
      (activeCategory === "Registry" && row.location === "Registry") || 
      (activeCategory === "Records" && row.location === "Records");

    const matchesQuery = fieldKeys.some(field => 
      row[field].toLowerCase().includes(queryLower)
    );

    return matchesCategory && matchesQuery;
  });

  const handleSelectRow = (selectedIds) => {
    setSelectedRowIds(selectedIds);
    onRowSelect(selectedIds);
  };

  return (
    <div className="w-full h-full bg-gray-200 m-0 p-0">
      <Table
        columns={columns}
        data={filteredData}
        withCheckbox={true}
        onRowSelect={handleSelectRow}
      />
    </div>
  );
}

export default ArchiveData;