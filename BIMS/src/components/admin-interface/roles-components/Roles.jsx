import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import TableActions from "../basic-components/table-components/table-action/TableActions";
import RolesData from "../../../util/admin-interface/roles-data/RolesData";
import RolesAddModal from "./roles-sub-components/RolesAddModal";
import DeleteButton from "../basic-components/table-components/button-components/DeleteButton";
import AddButton from "../basic-components/table-components/button-components/AddButton";
import FilterButton from "../basic-components/table-components/button-components/FilterButton";
import ExportButton from "../basic-components/table-components/button-components/ExportButton"; 
import FilterModal from '../basic-components/table-components/modal-components/FilterModal';

import SearchBarDefault from "../basic-components/SearchBarDefault";

import "./roles.css"; // Havent used 

const validCategories = ["All", "Administrators", "Barangay Officials"];

function Roles() {
  const { category } = useParams();
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState();
  const [selectedRows, setSelectedRows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const categoryMap = {
      'barangay-officials': "Barangay Officials",
      'administrators': "Administrators",
      'all': "All"
    };

    const newCategory = categoryMap[category];

    if (newCategory) {
      setActiveCategory(newCategory);
    } else {
      navigate("/admin/roles/all"); // Redirect to default category if invalid
    }
  }, [category, navigate]);

  const handleAddButtonClick = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Category selection
  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    const formattedCategory = category.replace(/ /g, '-').toLowerCase(); 
    navigate(`/admin/roles/${formattedCategory}`); 
  };

  // Update selected rows from RecordsData
  const handleRowSelect = (selectedRowIds) => {
    setSelectedRows(selectedRowIds);
  };

  // Open the filter modal
  const handleFilter = () => {
    setIsFilterModalOpen(true); 
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };
  
  return (
    <main className="w-screen h-screen flex overflow-hidden">
      <div className="flex flex-col w-full">
        
        <SearchBarDefault 
          value={searchQuery} 
          onChange={handleSearchChange} 
        />

        <div className="pt-20 bg-[#F7F7F7]">
          <TableActions
            labeltxt={activeCategory === 'All' ? 'All Roles' : activeCategory} 
            filtervalue="Filter value"
            categories={validCategories}
            InsertButton={
              <>
                <DeleteButton isDisabled={selectedRows.length === 0} />
                <FilterButton onFilter={handleFilter} />
                {/*<ExportButton isDisabled={selectedRows.length === 0}/>*/}
                <AddButton buttonName="Add Account" onAdd={handleAddButtonClick} />
              </>
            }
            onCategorySelect={handleCategorySelect} 
            activeCategory={activeCategory}
          />
        </div>

        <div className="flex-grow overflow-y-auto mb-1">
          <RolesData 
            activeCategory={activeCategory} 
            onRowSelect={handleRowSelect} 
            query={searchQuery} /> 
        </div>

        <FilterModal
          isOpen={isFilterModalOpen}
          onClose={() => setIsFilterModalOpen(false)} // Close filter modal
        />
        <RolesAddModal isModalOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </main>
  );
}

export default Roles;