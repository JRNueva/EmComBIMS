import { useState } from 'react';
import Table from "../../../components/admin-interface/basic-components/table-components/table/Table";
import TableStatusButton from "../../../components/admin-interface/basic-components/table-components/button-components/TableStatusButton";

function RegistryIncidentsData({activeCategory, onRowSelect, query }){

  const [selectedRowIds, setSelectedRowIds] = useState([]);  // Track selected rows
    const columns = [
        { Header: 'Incident No.', accessor: 'incidentNo' },
        { Header: 'Incident Type', accessor: 'incidentType' },
        { Header: 'Complainant Name', accessor: 'complainantName' },
        { Header: 'Party Involved', accessor: 'pInvolved' },
        { Header: 'Report Date', accessor: 'reportDate' },
        { Header: 'Status', accessor: 'incidentStatus' },
      ];
    
      const data = [
        {
            incidentNo: '00123',
            incidentType: 'Physical Assault',
            complainantName: 'Juan Dela Cruz',
            pInvolved: 'Mark Reyes',
            reportDate: '01-25-2024',
            incidentStatus: 'In Progress',
        },
        {
            incidentNo: '00124',
            incidentType: 'Noise Complaint',
            complainantName: 'Liza De Jesus',
            pInvolved: 'Anna Morales',
            reportDate: '06-20-2024',
            incidentStatus: 'Resolved',
        },
        {
            incidentNo: '00125',
            incidentType: 'Theft',
            complainantName: 'Pedro Mendoza',
            pInvolved: 'Jose Bautista',
            reportDate: '06-20-2024',
            incidentStatus: 'Pending',
        },
        {
            incidentNo: '00126',
            incidentType: 'Physical Assault',
            complainantName: 'Juan Dela Cruz',
            pInvolved: 'Mark Reyes',
            reportDate: '01-25-2024',
            incidentStatus: 'In Progress',
        },
        {
            incidentNo: '00127',
            incidentType: 'Noise Complaint',
            complainantName: 'Liza De Jesus',
            pInvolved: 'Anna Morales',
            reportDate: '06-20-2024',
            incidentStatus: 'Resolved',
        },
        {
            incidentNo: '00128',
            incidentType: 'Theft',
            complainantName: 'Pedro Mendoza',
            pInvolved: 'Jose Bautista',
            reportDate: '06-20-2024',
            incidentStatus: 'Pending',
        },
        {
            incidentNo: '00129',
            incidentType: 'Physical Assault',
            complainantName: 'Juan Dela Cruz',
            pInvolved: 'Mark Reyes',
            reportDate: '01-25-2024',
            incidentStatus: 'In Progress',
        },
        {
            incidentNo: '00130',
            incidentType: 'Noise Complaint',
            complainantName: 'Liza De Jesus',
            pInvolved: 'Anna Morales',
            reportDate: '06-20-2024',
            incidentStatus: 'Resolved',
        },
        {
            incidentNo: '00131',
            incidentType: 'Theft',
            complainantName: 'Pedro Mendoza',
            pInvolved: 'Jose Bautista',
            reportDate: '06-20-2024',
            incidentStatus: 'Pending',
        },
        {
            incidentNo: '00132',
            incidentType: 'Physical Assault',
            complainantName: 'Juan Dela Cruz',
            pInvolved: 'Mark Reyes',
            reportDate: '01-25-2024',
            incidentStatus: 'In Progress',
        },
        {
            incidentNo: '00133',
            incidentType: 'Noise Complaint',
            complainantName: 'Liza De Jesus',
            pInvolved: 'Anna Morales',
            reportDate: '06-20-2024',
            incidentStatus: 'Resolved',
        },
        {
            incidentNo: '00134',
            incidentType: 'Theft',
            complainantName: 'Pedro Mendoza',
            pInvolved: 'Jose Bautista',
            reportDate: '06-20-2024',
            incidentStatus: 'Pending',
        },
        {
            incidentNo: '00123',
            incidentType: 'Physical Assault',
            complainantName: 'Juan Dela Cruz',
            pInvolved: 'Mark Reyes',
            reportDate: '01-25-2024',
            incidentStatus: 'In Progress',
        },
        {
            incidentNo: '00124',
            incidentType: 'Noise Complaint',
            complainantName: 'Liza De Jesus',
            pInvolved: 'Anna Morales',
            reportDate: '06-20-2024',
            incidentStatus: 'Resolved',
        },
        {
            incidentNo: '00125',
            incidentType: 'Theft',
            complainantName: 'Pedro Mendoza',
            pInvolved: 'Jose Bautista',
            reportDate: '06-20-2024',
            incidentStatus: 'Pending',
        },
        {
            incidentNo: '00126',
            incidentType: 'Physical Assault',
            complainantName: 'Juan Dela Cruz',
            pInvolved: 'Mark Reyes',
            reportDate: '01-25-2024',
            incidentStatus: 'In Progress',
        },
        {
            incidentNo: '00127',
            incidentType: 'Noise Complaint',
            complainantName: 'Liza De Jesus',
            pInvolved: 'Anna Morales',
            reportDate: '06-20-2024',
            incidentStatus: 'Resolved',
        },
        {
            incidentNo: '00128',
            incidentType: 'Theft',
            complainantName: 'Pedro Mendoza',
            pInvolved: 'Jose Bautista',
            reportDate: '06-20-2024',
            incidentStatus: 'Pending',
        },
        {
            incidentNo: '00129',
            incidentType: 'Physical Assault',
            complainantName: 'Juan Dela Cruz',
            pInvolved: 'Mark Reyes',
            reportDate: '01-25-2024',
            incidentStatus: 'In Progress',
        },
        {
            incidentNo: '00130',
            incidentType: 'Noise Complaint',
            complainantName: 'Liza De Jesus',
            pInvolved: 'Anna Morales',
            reportDate: '06-20-2024',
            incidentStatus: 'Resolved',
        },
        {
            incidentNo: '00131',
            incidentType: 'Theft',
            complainantName: 'Pedro Mendoza',
            pInvolved: 'Jose Bautista',
            reportDate: '06-20-2024',
            incidentStatus: 'Pending',
        },
        {
            incidentNo: '00132',
            incidentType: 'Physical Assault',
            complainantName: 'Juan Dela Cruz',
            pInvolved: 'Mark Reyes',
            reportDate: '01-25-2024',
            incidentStatus: 'In Progress',
        },
        {
            incidentNo: '00133',
            incidentType: 'Noise Complaint',
            complainantName: 'Liza De Jesus',
            pInvolved: 'Anna Morales',
            reportDate: '06-20-2024',
            incidentStatus: 'Resolved',
        },
        {
            incidentNo: '00134',
            incidentType: 'Theft',
            complainantName: 'Pedro Mendoza',
            pInvolved: 'Jose Bautista',
            reportDate: '06-20-2024',
            incidentStatus: 'Pending',
        },
                {
            incidentNo: '00133',
            incidentType: 'Noise Complaint',
            complainantName: 'Liza De Jesus',
            pInvolved: 'Anna Morales',
            reportDate: '06-20-2024',
            incidentStatus: 'Resolved',
        },
        {
            incidentNo: '00134',
            incidentType: 'Theft',
            complainantName: 'Pedro Mendoza',
            pInvolved: 'Jose Bautista',
            reportDate: '06-20-2024',
            incidentStatus: 'Pending',
        },
        
        // Add more data here
      ];
    
      const getStatusStyle = (status) => {
        switch (status) {
          case 'In Progress':
            return 'bg-green-50 text-green-800 px-4 rounded-full flex items-center font-semibold font-inter';
          case 'Pending':
            return 'bg-orange-50 text-yellow-700 px-3 rounded-full flex items-center font-semibold font-inter';
          case 'Resolved':
            return 'bg-blue-50 text-blue-800 px-3 rounded-full flex items-center font-semibold font-inter';
          default:
            return 'bg-gray-300 text-gray-800 px-3 rounded-full flex items-center font-semibold font-inter';
        }
      };

      const fieldKeys = columns.map(column => column.accessor);
      const queryLower = typeof query === 'string' ? query.toLowerCase() : '';

      // Filter data based on activeCategory
      const filteredData = data.filter((row) => {
        const matchesCategory =
          activeCategory === "All" || 
          (activeCategory === "Pending" && row.incidentStatus === "Pending") || 
          (activeCategory === "In Progress" && row.incidentStatus === "In Progress") ||
          (activeCategory === "Resolved" && row.incidentStatus === "Resolved");

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
        <div className="w-full h-full bg-gray-200 pb-6">
          <Table
            recordType='incident-record-form'
            columns={columns}
            data={filteredData.map((row) => ({
              ...row,
            incidentStatus: (
                <TableStatusButton
                  changeStatus={() => alert(`Changing status for ${row.fullName}`)}
                  statustxt={row.incidentStatus}
                  statusStyle={getStatusStyle(row.incidentStatus)}
                />
              ),
            }))}
            withCheckbox={true}
            onRowSelect={handleSelectRow} 
          />
        </div>
      )
}
export default RegistryIncidentsData