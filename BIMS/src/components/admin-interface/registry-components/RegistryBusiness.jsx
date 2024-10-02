import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import TableActions from "../basic-components/table-components/table-action/TableActions";
import DeleteButton from "../basic-components/table-components/button-components/DeleteButton";
import AddButton from "../basic-components/table-components/button-components/AddButton";
import FilterButton from "../basic-components/table-components/button-components/FilterButton";
import ExportButton from "../basic-components/table-components/button-components/ExportButton"; 
import ExportModal from '../basic-components/table-components/modal-components/ExportModal';
import FilterModal from '../basic-components/table-components/modal-components/FilterModal';

import RegistryBusinessData from "../../../util/admin-interface/registry-data/RegistryBusinessData";

import "./registry_tables.css";
import SearchBarDefault from '../basic-components/SearchBarDefault';

const validCategories = ["All", "Active Business", "Inactive Business", "Expired Permits"];

function RegistryBusiness(){

  const { status } = useParams();
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedRows, setSelectedRows] = useState([]); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false); 
  const [searchQuery, setSearchQuery] = useState(''); 

  useEffect(() => {
    const categoryMap = {
        'all': "All",
        'active-business': "Active Business",
        'inactive-business': "Inactive Business",
        "expired-permits": "Expired Permits"
    };

    const newCategory = categoryMap[status];

    if (newCategory) {
      setActiveCategory(newCategory);
    } else {
      navigate("/admin/registry/business-information/all");
    }
  }, [status, navigate]);

  const handleCategorySelect = (status) => {
    setActiveCategory(status);
    const formattedStatus = status.replace(/ /g, '-').toLowerCase(); 
      
    if (formattedStatus) {
      navigate(`/admin/registry/business-information/${formattedStatus}`);
    }
  };

  // Function to update selected rows from RecordsData
  const handleRowSelect = (selectedRowIds) => {
    setSelectedRows(selectedRowIds);
  };

  const handleExport = () => {
    setIsModalOpen(true); // Open the export modal
  };

  const handleFilter = () => {
    setIsFilterModalOpen(true); // Open the filter modal
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };
  
  return(
    <main className="w-screen h-screen flex overflow-hidden">
      <div className="flex flex-col w-full">

        <SearchBarDefault 
          value={searchQuery} 
          onChange={handleSearchChange} 
        />

        <div className="pt-20 bg-[#F7F7F7] h-full">
          <TableActions
              labeltxt="Business Information"
              filtervalue="Filter value"
              categories={validCategories}
              InsertButton={
              <>
                  <DeleteButton  isDisabled={selectedRows.length === 0} />
                  <FilterButton onFilter={handleFilter}/>
                  <ExportButton isDisabled={selectedRows.length === 0} onExport={handleExport}/>
                  <AddButton buttonName="Add"/>
              </>
              }
              onCategorySelect={handleCategorySelect}  // Pass category select handler
              activeCategory={activeCategory}
          />

          <div className="flex-grow h-full overflow-y-auto mb-1">
            <RegistryBusinessData 
              activeCategory={activeCategory} 
              onRowSelect={handleRowSelect}
              query={searchQuery} />
          </div>

      </div>
              
    </div>
  <ExportModal
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)} // Close modal function
  />
  <FilterModal
    isOpen={isFilterModalOpen}
    onClose={() => setIsFilterModalOpen(false)} // Close filter modal
  />
</main>

  );
}
export default RegistryBusiness;