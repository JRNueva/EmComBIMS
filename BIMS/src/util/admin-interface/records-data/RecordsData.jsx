import { useState } from "react";
import Table from "../../../components/admin-interface/basic-components/table-components/table/Table";
import TableStatusButton from "../../../components/admin-interface/basic-components/table-components/button-components/TableStatusButton";
import PropTypes from 'prop-types';

function RecordsData({ activeCategory, onRowSelect, query }) {
  const [selectedRowIds, setSelectedRowIds] = useState([]);  // Track selected rows

  const columns = [
    { Header: 'Form No.', accessor: 'formNo' },
    { Header: 'Form Type', accessor: 'formType' },
    { Header: 'Requested By', accessor: 'requestedBy' },
    { Header: 'Request Date', accessor: 'requestDate' },
    { Header: 'Status', accessor: 'recordStatus' },
  ];

  const data = [
      // Existing data entries
      {
          formNo: '00123',
          formType: 'Indigency Form',
          requestedBy: 'Juan Dela Cruz',
          requestDate: '01-25-2024',
          recordStatus: 'In Progress',
      },
      {
          formNo: '00124',
          formType: 'Barangay ID',
          requestedBy: 'Liza De Jesus',
          requestDate: '03-20-2024',
          recordStatus: 'Completed',
      },
      {
          formNo: '00125',
          formType: 'Business Clearance',
          requestedBy: 'Pedro Mendoza',
          requestDate: '06-20-2024',
          recordStatus: 'Pending',
      },
      {
          formNo: '00126',
          formType: 'Business Clearance',
          requestedBy: 'Alice Guo',
          requestDate: '09-07-2024',
          recordStatus: 'Rejected',
      },
      // New entries
      {
          formNo: '00127',
          formType: 'Indigency Form',
          requestedBy: 'Maria Clara',
          requestDate: '02-10-2024',
          recordStatus: 'In Progress',
      },
      {
          formNo: '00128',
          formType: 'Indigency Form',
          requestedBy: 'Jose Rizal',
          requestDate: '02-15-2024',
          recordStatus: 'Completed',
      },
      {
          formNo: '00129',
          formType: 'Indigency Form',
          requestedBy: 'Andres Bonifacio',
          requestDate: '03-01-2024',
          recordStatus: 'Pending',
      },
      {
          formNo: '00130',
          formType: 'Indigency Form',
          requestedBy: 'Emilio Aguinaldo',
          requestDate: '03-05-2024',
          recordStatus: 'Rejected',
      },
      {
          formNo: '00131',
          formType: 'Indigency Form',
          requestedBy: 'Corazon Aquino',
          requestDate: '03-10-2024',
          recordStatus: 'In Progress',
      },
      {
          formNo: '00132',
          formType: 'Indigency Form',
          requestedBy: 'Ninoy Aquino',
          requestDate: '03-12-2024',
          recordStatus: 'Completed',
      },
      {
          formNo: '00133',
          formType: 'Indigency Form',
          requestedBy: 'Ferdinand Marcos',
          requestDate: '04-01-2024',
          recordStatus: 'Pending',
      },
      {
          formNo: '00134',
          formType: 'Indigency Form',
          requestedBy: 'Leni Robredo',
          requestDate: '04-05-2024',
          recordStatus: 'Rejected',
      },
      {
          formNo: '00135',
          formType: 'Indigency Form',
          requestedBy: 'Duterte',
          requestDate: '04-10-2024',
          recordStatus: 'In Progress',
      },
      {
          formNo: '00136',
          formType: 'Indigency Form',
          requestedBy: 'Sara Duterte',
          requestDate: '04-15-2024',
          recordStatus: 'Completed',
      },
      // Barangay ID entries
      {
          formNo: '00137',
          formType: 'Barangay ID',
          requestedBy: 'Marvin Gaye',
          requestDate: '05-01-2024',
          recordStatus: 'In Progress',
      },
      {
          formNo: '00138',
          formType: 'Barangay ID',
          requestedBy: 'Taylor Swift',
          requestDate: '05-05-2024',
          recordStatus: 'Completed',
      },
      {
          formNo: '00139',
          formType: 'Barangay ID',
          requestedBy: 'Michael Jackson',
          requestDate: '05-10-2024',
          recordStatus: 'Pending',
      },
      {
          formNo: '00140',
          formType: 'Barangay ID',
          requestedBy: 'Beyonce',
          requestDate: '05-15-2024',
          recordStatus: 'Rejected',
      },
      {
          formNo: '00141',
          formType: 'Barangay ID',
          requestedBy: 'Katy Perry',
          requestDate: '05-20-2024',
          recordStatus: 'In Progress',
      },
      {
          formNo: '00142',
          formType: 'Barangay ID',
          requestedBy: 'Lady Gaga',
          requestDate: '06-01-2024',
          recordStatus: 'Completed',
      },
      {
          formNo: '00143',
          formType: 'Barangay ID',
          requestedBy: 'Elton John',
          requestDate: '06-05-2024',
          recordStatus: 'Pending',
      },
      {
          formNo: '00144',
          formType: 'Barangay ID',
          requestedBy: 'Adele',
          requestDate: '06-10-2024',
          recordStatus: 'Rejected',
      },
      {
          formNo: '00145',
          formType: 'Barangay ID',
          requestedBy: 'Ed Sheeran',
          requestDate: '06-15-2024',
          recordStatus: 'In Progress',
      },
      {
          formNo: '00146',
          formType: 'Barangay ID',
          requestedBy: 'Billie Eilish',
          requestDate: '06-20-2024',
          recordStatus: 'Completed',
      },
      // Business Clearance entries
      {
          formNo: '00147',
          formType: 'Business Clearance',
          requestedBy: 'Albert Einstein',
          requestDate: '07-01-2024',
          recordStatus: 'In Progress',
      },
      {
          formNo: '00148',
          formType: 'Business Clearance',
          requestedBy: 'Isaac Newton',
          requestDate: '07-05-2024',
          recordStatus: 'Completed',
      },
      {
          formNo: '00149',
          formType: 'Business Clearance',
          requestedBy: 'Charles Darwin',
          requestDate: '07-10-2024',
          recordStatus: 'Pending',
      },
      {
          formNo: '00150',
          formType: 'Business Clearance',
          requestedBy: 'Galileo Galilei',
          requestDate: '07-15-2024',
          recordStatus: 'Rejected',
      },
      {
          formNo: '00151',
          formType: 'Business Clearance',
          requestedBy: 'Nikola Tesla',
          requestDate: '07-20-2024',
          recordStatus: 'In Progress',
      },
      {
          formNo: '00152',
          formType: 'Business Clearance',
          requestedBy: 'Stephen Hawking',
          requestDate: '07-25-2024',
          recordStatus: 'Completed',
      },
      {
          formNo: '00153',
          formType: 'Business Clearance',
          requestedBy: 'Marie Curie',
          requestDate: '07-30-2024',
          recordStatus: 'Pending',
      },
      {
          formNo: '00154',
          formType: 'Business Clearance',
          requestedBy: 'Jane Goodall',
          requestDate: '08-01-2024',
          recordStatus: 'Rejected',
      },
      {
          formNo: '00155',
          formType: 'Business Clearance',
          requestedBy: 'Rosa Parks',
          requestDate: '08-05-2024',
          recordStatus: 'In Progress',
      },
      {
          formNo: '00156',
          formType: 'Business Clearance',
          requestedBy: 'Malala Yousafzai',
          requestDate: '08-10-2024',
          recordStatus: 'Completed',
      },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'In Progress':
        return 'bg-green-50 text-green-800 px-4 rounded-full flex items-center font-semibold font-inter';
      case 'Pending':
        return 'bg-orange-50 text-yellow-700 px-3 rounded-full flex items-center font-semibold font-inter';
      case 'Completed':
        return 'bg-blue-50 text-blue-800 px-3 rounded-full flex items-center font-semibold font-inter';
      case 'Rejected':
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
      (activeCategory === "Pending" && row.recordStatus === "Pending") || 
      (activeCategory === "In Progress" && row.recordStatus === "In Progress") ||
      (activeCategory === "Rejected" && row.recordStatus === "Rejected") ||
      (activeCategory === "Completed" && row.recordStatus === "Completed") 

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
        columns={columns}
        data={filteredData.map((row) => ({
          ...row,
          recordStatus: (
            <TableStatusButton
              changeStatus={() => alert(`Changing status for ${row.fullName}`)}
              statustxt={row.recordStatus}
              statusStyle={getStatusStyle(row.recordStatus)}
            />
          ),
        }))}
        withCheckbox={true}
        onRowSelect={handleSelectRow}  // Pass selected row handler to Table
      />
    </div>
  );
}

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  withCheckbox: PropTypes.bool,
  onRowSelect: PropTypes.func,
};

export default RecordsData;
