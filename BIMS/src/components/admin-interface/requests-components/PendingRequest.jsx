import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TableActions from "../basic-components/table-components/table-action/TableActions";
import FilterButton from "../basic-components/table-components/button-components/FilterButton";
import FilterModal from '../basic-components/table-components/modal-components/FilterModal';
import RequestData from "../../../util/admin-interface/request-data/RequestData";

export default function PendingRequest(query) {

    const [selectedRows, setSelectedRows] = useState([]);
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

    const handleRowSelect = (selectedRowIds) => {
        setSelectedRows(selectedRowIds);
    };

    const handleFilter = () => {
        setIsFilterModalOpen(true); 
    };

    return (
        <section className="w-full h-full flex"> 
            <div className="absolute -top-5 -left-1 flex flex-col w-full h-full">
                <div className="bg-gray97">
                    <TableActions
                        labeltxt="Pending Requests"
                        filtervalue="Filter value"
                        categories={[]}
                        InsertButton={
                            <FilterButton onFilter={handleFilter} />
                        }
                    />
                </div>
                <div className="w-full h-full overflow-y-auto"> 
                    <RequestData onRowSelect={handleRowSelect} query={query}/>
                </div>
                <FilterModal
                    isOpen={isFilterModalOpen}
                    onClose={() => setIsFilterModalOpen(false)} 
                />
            </div>
        </section>
    );
}
