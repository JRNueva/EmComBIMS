import { useState } from "react";
import Table from "../../../components/admin-interface/basic-components/table-components/table/Table";
import TableStatusButton from "../../../components/admin-interface/basic-components/table-components/button-components/TableStatusButton";
import { useParams } from "react-router-dom";

function RequestData({ onRowSelect, query }) {
  const [selectedRowIds, setSelectedRowIds] = useState([]); 

    const columns = [
    { Header: 'Form No.', accessor: 'formNo' },
    { Header: 'Form Type', accessor: 'formType' },
    { Header: 'Submitted By', accessor: 'submittedBy' },
    { Header: 'Contact Detail', accessor: 'contactDetail' },
    { Header: 'Date Submitted', accessor: 'dateSubmitted' },
    { Header: 'Time Submitted', accessor: 'timeSubmitted' },
    { Header: 'Action', accessor: 'action' },
  ]
  
  const data = [
      {
          formNo: '00123',
          formType: 'Indigency Form',
          submittedBy: 'Juan Dela Cruz',
          contactDetail: 'juan.delacruz@example.com',
          dateSubmitted: '01-25-2024',
          timeSubmitted: '10:00 AM',
          recordStatus: 'Pending',
      },
      {
          formNo: '00124',
          formType: 'Barangay ID',
          submittedBy: 'Liza De Jesus',
          contactDetail: '234-567-8901',
          dateSubmitted: '03-20-2024',
          timeSubmitted: '11:15 AM',
          recordStatus: 'Pending',
      },
      {
          formNo: '00125',
          formType: 'Business Clearance',
          submittedBy: 'Pedro Mendoza',
          contactDetail: 'pedro.mendoza@example.com',
          dateSubmitted: '06-20-2024',
          timeSubmitted: '09:30 AM',
          recordStatus: 'Pending',
      },
      {
          formNo: '00126',
          formType: 'Business Clearance',
          submittedBy: 'Alice Guo',
          contactDetail: '456-789-0123',
          dateSubmitted: '09-07-2024',
          timeSubmitted: '02:45 PM',
          recordStatus: 'Pending',
      },
      {
          formNo: '00127',
          formType: 'Indigency Form',
          submittedBy: 'Juan Dela Cruz',
          contactDetail: 'juan.delacruz@example.com',
          dateSubmitted: '01-25-2024',
          timeSubmitted: '10:00 AM',
          recordStatus: 'Pending',
      },
      {
          formNo: '00128',
          formType: 'Barangay ID',
          submittedBy: 'Liza De Jesus',
          contactDetail: 'liza.dejesus@example.com',
          dateSubmitted: '03-20-2024',
          timeSubmitted: '11:15 AM',
          recordStatus: 'Pending',
      },
      {
          formNo: '00129',
          formType: 'Business Clearance',
          submittedBy: 'Pedro Mendoza',
          contactDetail: '345-678-9012',
          dateSubmitted: '06-21-2024',
          timeSubmitted: '09:30 AM',
          recordStatus: 'Pending',
      },
      {
          formNo: '00130',
          formType: 'Business Clearance',
          submittedBy: 'Alice Guo',
          contactDetail: 'alice.gu@example.com',
          dateSubmitted: '09-08-2024',
          timeSubmitted: '02:45 PM',
          recordStatus: 'Pending',
      },
      {
          formNo: '00131',
          formType: 'Indigency Form',
          submittedBy: 'Maria Lopez',
          contactDetail: '567-890-1234',
          dateSubmitted: '02-10-2024',
          timeSubmitted: '03:00 PM',
          recordStatus: 'Pending',
      },
      {
          formNo: '00132',
          formType: 'Barangay Clearance',
          submittedBy: 'Carlos Santos',
          contactDetail: 'carlos.santos@example.com',
          dateSubmitted: '05-15-2024',
          timeSubmitted: '11:30 AM',
          recordStatus: 'Pending',
      },
      {
          formNo: '00133',
          formType: 'Business Clearance',
          submittedBy: 'Anna Chen',
          contactDetail: '789-012-3456',
          dateSubmitted: '07-01-2024',
          timeSubmitted: '12:15 PM',
          recordStatus: 'Pending',
      },
      {
          formNo: '00134',
          formType: 'Indigency Form',
          submittedBy: 'Rosa Parks',
          contactDetail: 'rosa.parks@example.com',
          dateSubmitted: '04-25-2024',
          timeSubmitted: '02:30 PM',
          recordStatus: 'Pending',
      },
      {
          formNo: '00135',
          formType: 'Barangay ID',
          submittedBy: 'David Kim',
          contactDetail: '901-234-5678',
          dateSubmitted: '06-15-2024',
          timeSubmitted: '09:45 AM',
          recordStatus: 'Pending',
      },
      {
          formNo: '00136',
          formType: 'Business Clearance',
          submittedBy: 'Sarah Connor',
          contactDetail: 'sarah.connor@example.com',
          dateSubmitted: '08-30-2024',
          timeSubmitted: '03:10 PM',
          recordStatus: 'Pending',
      },
      {
          formNo: '00137',
          formType: 'Indigency Form',
          submittedBy: 'Tom Hardy',
          contactDetail: '123-456-7890',
          dateSubmitted: '02-20-2024',
          timeSubmitted: '10:00 AM',
          recordStatus: 'Pending',
      },
      {
          formNo: '00138',
          formType: 'Barangay ID',
          submittedBy: 'Nina West',
          contactDetail: 'nina.west@example.com',
          dateSubmitted: '04-18-2024',
          timeSubmitted: '11:15 AM',
          recordStatus: 'Pending',
      },
      {
          formNo: '00139',
          formType: 'Business Clearance',
          submittedBy: 'Jack Black',
          contactDetail: '345-678-9012',
          dateSubmitted: '06-22-2024',
          timeSubmitted: '09:30 AM',
          recordStatus: 'Pending',
      },
      {
          formNo: '00140',
          formType: 'Indigency Form',
          submittedBy: 'Olivia Wilde',
          contactDetail: 'olivia.wilde@example.com',
          dateSubmitted: '03-10-2024',
          timeSubmitted: '02:45 PM',
          recordStatus: 'Pending',
      },
      {
          formNo: '00141',
          formType: 'Barangay Clearance',
          submittedBy: 'Leo Messi',
          contactDetail: '567-890-1234',
          dateSubmitted: '05-22-2024',
          timeSubmitted: '11:30 AM',
          recordStatus: 'Pending',
      },
      {
          formNo: '00142',
          formType: 'Business Clearance',
          submittedBy: 'Emma Watson',
          contactDetail: 'emma.watson@example.com',
          dateSubmitted: '07-15-2024',
          timeSubmitted: '12:15 PM',
          recordStatus: 'Pending',
      },
      {
          formNo: '00143',
          formType: 'Indigency Form',
          submittedBy: 'Robert Downey Jr.',
          contactDetail: 'robert.downey@example.com',
          dateSubmitted: '02-11-2024',
          timeSubmitted: '02:30 PM',
          recordStatus: 'Pending',
      },
      {
          formNo: '00144',
          formType: 'Barangay ID',
          submittedBy: 'Jasmine Garcia',
          contactDetail: '890-123-4567',
          dateSubmitted: '08-25-2024',
          timeSubmitted: '09:45 AM',
          recordStatus: 'Pending',
      },
      {
          formNo: '00145',
          formType: 'Business Clearance',
          submittedBy: 'James Bond',
          contactDetail: 'james.bond@example.com',
          dateSubmitted: '09-10-2024',
          timeSubmitted: '03:10 PM',
          recordStatus: 'Pending',
      },
      {
          formNo: '00146',
          formType: 'Indigency Form',
          submittedBy: 'Natasha Romanoff',
          contactDetail: 'natasha.romanoff@example.com',
          dateSubmitted: '03-12-2024',
          timeSubmitted: '10:00 AM',
          recordStatus: 'Pending',
      },
      {
          formNo: '00147',
          formType: 'Barangay Clearance',
          submittedBy: 'Steve Rogers',
          contactDetail: 'steve.rogers@example.com',
          dateSubmitted: '07-28-2024',
          timeSubmitted: '11:15 AM',
          recordStatus: 'Pending',
      },
      {
          formNo: '00148',
          formType: 'Business Clearance',
          submittedBy: 'Tony Stark',
          contactDetail: 'tony.stark@example.com',
          dateSubmitted: '01-05-2024',
          timeSubmitted: '09:30 AM',
          recordStatus: 'Pending',
      },
      {
          formNo: '00149',
          formType: 'Indigency Form',
          submittedBy: 'Bruce Wayne',
          contactDetail: 'bruce.wayne@example.com',
          dateSubmitted: '06-10-2024',
          timeSubmitted: '02:45 PM',
          recordStatus: 'Pending',
      },
      {
          formNo: '00150',
          formType: 'Barangay ID',
          submittedBy: 'Clark Kent',
          contactDetail: 'clark.kent@example.com',
          dateSubmitted: '02-15-2024',
          timeSubmitted: '03:00 PM',
          recordStatus: 'Pending',
      },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Approve':
        return 'bg-green-50 text-green-800 px-4 rounded-full flex items-center font-semibold font-inter';
      case 'Reject':
        return 'bg-red-50 text-red-800 px-3 rounded-full flex items-center font-semibold font-inter';
      default:
        return '';
    }
  };

  const queryLower = query.searchValue.toLowerCase();
  const fieldKeys = columns.map(column => column.accessor !== 'action' ? column.accessor : '').filter(Boolean);
  const filteredData = data.filter((row) => {
    const matchesQuery = fieldKeys.some(field => {
      const value = row[field];
      if (value && typeof value === 'string') {
        const result = value.toLowerCase().includes(queryLower); 
        return result;
      }
      return false;
    });

    return matchesQuery;
  });

  const handleSelectRow = (selectedIds) => {
    setSelectedRowIds(selectedIds);
    onRowSelect(selectedIds);  
  };

  const updateStatus = (formNo, newStatus) => {
    setData(prevData =>
      prevData.map(item =>
        item.formNo === formNo ? { ...item, recordStatus: newStatus } : item
      )
    );
  };

  return (
    <div className="w-full h-full bg-gray-200 font-medium">
      <Table
        columns={columns}
        data={filteredData.map((row) => ({
          ...row,
          action: (
            <div className="flex space-x-2"> 
              <TableStatusButton
                changeStatus={() => updateStatus(row.formNo, 'Completed')}
                statustxt="Approve"
                statusStyle={getStatusStyle('Approve')} 
              />
              <TableStatusButton
                changeStatus={() => updateStatus(row.formNo, 'Rejected')}
                statustxt="Reject" 
                statusStyle={getStatusStyle('Reject')} 
              />
            </div>
          ),
        }))}
        withCheckbox={true}
        onRowSelect={handleSelectRow}  
      />
    </div>
  );
}

export default RequestData;