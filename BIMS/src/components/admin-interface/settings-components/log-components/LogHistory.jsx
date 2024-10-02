import { useState } from 'react';
import TableActions from "../../basic-components/table-components/table-action/TableActions";
import FilterButton from "../../basic-components/table-components/button-components/FilterButton";
import FilterModal from '../../basic-components/table-components/modal-components/FilterModal';
import Table from "./Table";

const Loghistory = () => {
    // Define the columns for the table
    const columns = [
        { Header: 'Access ID', accessor: 'id' },
        { Header: 'Full Name', accessor: 'user' },
        { Header: 'Barangay Position', accessor: 'position' },
        { Header: 'Date', accessor: 'date' },
        { Header: 'Time', accessor: 'time' },
        { Header: 'Action', accessor: 'action' },
    ];

    // Define some data for the table
    const data = [
        { id: "BrgyKag_AGarcia2020", user: 'Andres Garcia', position: 'Mayor', date: '2024-09-05', time: '08:00', action: 'Added a new event to the calendar: "Community Meeting on Waste Management".' },
        { id: "BrgySec_JDoe2024", user: 'John Doe', position: 'Secretary', date: '2024-09-04', time: '12:30', action: 'Generated a report on barangay population demographics.' },
        { id: "BrgyHead_JS2023", user: 'Jane Smith', position: 'Barangay Head', date: '2024-09-03', time: '15:45', action: 'Sent an email announcement to all residents regarding the upcoming barangay fiesta celebration.' },
        { id: "BrgyKag_MLee2024", user: 'Maria Lee', position: 'Kagawad', date: '2024-09-02', time: '09:15', action: 'Updated the community bulletin with new safety protocols.' },
        { id: "BrgySec_JDelaCruz2024", user: 'Juan Dela Cruz', position: 'Secretary', date: '2024-09-01', time: '11:00', action: 'Prepared minutes for the recent barangay council meeting.' },
        { id: "BrgyHead_LTan2024", user: 'Lina Tan', position: 'Barangay Head', date: '2024-08-30', time: '14:20', action: 'Reviewed and approved the budget for the upcoming environmental program.' },
        { id: "BrgyKag_BSantos2024", user: 'Ben Santos', position: 'Kagawad', date: '2024-08-29', time: '10:05', action: 'Organized a health screening event for senior citizens.' },
        { id: "BrgySec_RPablo2024", user: 'Rita Pablo', position: 'Secretary', date: '2024-08-28', time: '13:30', action: 'Compiled the quarterly report on barangay infrastructure projects.' },
        { id: "BrgyHead_JGomez2024", user: 'James Gomez', position: 'Barangay Head', date: '2024-08-27', time: '16:00', action: 'Initiated a new scholarship program for underprivileged students.' },
        { id: "BrgyKag_JAlvarez2024", user: 'Jose Alvarez', position: 'Kagawad', date: '2024-08-26', time: '09:45', action: 'Coordinated a community clean-up drive.' },
        { id: "BrgyKag_AGarcia2020", user: 'Andres Garcia', position: 'Mayor', date: '2024-09-05', time: '08:00', action: 'Added a new event to the calendar: "Community Meeting on Waste Management".' },
        { id: "BrgySec_JDoe2024", user: 'John Doe', position: 'Secretary', date: '2024-09-04', time: '12:30', action: 'Generated a report on barangay population demographics.' },
        { id: "BrgyHead_JS2023", user: 'Jane Smith', position: 'Barangay Head', date: '2024-09-03', time: '15:45', action: 'Sent an email announcement to all residents regarding the upcoming barangay fiesta celebration.' },
        { id: "BrgyKag_MLee2024", user: 'Maria Lee', position: 'Kagawad', date: '2024-09-02', time: '09:15', action: 'Updated the community bulletin with new safety protocols.' },
        { id: "BrgySec_JDelaCruz2024", user: 'Juan Dela Cruz', position: 'Secretary', date: '2024-09-01', time: '11:00', action: 'Prepared minutes for the recent barangay council meeting.' },
        { id: "BrgyHead_LTan2024", user: 'Lina Tan', position: 'Barangay Head', date: '2024-08-30', time: '14:20', action: 'Reviewed and approved the budget for the upcoming environmental program.' },
        { id: "BrgyKag_BSantos2024", user: 'Ben Santos', position: 'Kagawad', date: '2024-08-29', time: '10:05', action: 'Organized a health screening event for senior citizens.' },
        { id: "BrgySec_RPablo2024", user: 'Rita Pablo', position: 'Secretary', date: '2024-08-28', time: '13:30', action: 'Compiled the quarterly report on barangay infrastructure projects.' },
        { id: "BrgyHead_JGomez2024", user: 'James Gomez', position: 'Barangay Head', date: '2024-08-27', time: '16:00', action: 'Initiated a new scholarship program for underprivileged students.' },
        { id: "BrgyKag_JAlvarez2024", user: 'Jose Alvarez', position: 'Kagawad', date: '2024-08-26', time: '09:45', action: 'Coordinated a community clean-up drive.' }
    ];
      
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

    const handleFilter = () => {
        setIsFilterModalOpen(true); 
    };
    
    return (
        <div className="w-screen h-screen flex flex-col overflow-hidden">
            <div className="flex flex-col w-full pt-20">
                <div className="bg-gray-100 justify-between items-center h-[115px]">
                    <div className="bg-gray97">
                        <TableActions
                            labeltxt="Log History"
                            filtervalue="Filter value"
                            categories={[]}
                            InsertButton={
                                <FilterButton onFilter={handleFilter} />
                            }
                        />
                    </div>
                </div>
            </div>
            <div className="pl-16 flex-grow overflow-y-auto mb-1 hide-scroll">
                <Table columns={columns} data={data} />
            </div>
            <FilterModal
                isOpen={isFilterModalOpen}
                onClose={() => setIsFilterModalOpen(false)} 
            />
        </div>
    );
};

export default Loghistory;
