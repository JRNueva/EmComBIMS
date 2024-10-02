import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import TableActions from "../basic-components/table-components/table-action/TableActions";
import FilterButton from "../basic-components/table-components/button-components/FilterButton";
import FilterModal from '../basic-components/table-components/modal-components/FilterModal';
import RestoreButton from '../basic-components/table-components/button-components/RestoreButton';
import ArchiveData from "../../../util/admin-interface/archive-data/ArchiveData";

import "./archives.css"; // Havent used 
import SearchBarDefault from '../basic-components/SearchBarDefault';

const validCategories  = ["All","Registry", "Records"];

function Archives() {
  const { category } = useParams();
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedRows, setSelectedRows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const categoryMap = {
      'registry': "Registry",
      'records': "Records",
      'all': "All"
    };

    const newCategory = categoryMap[category];

    if (newCategory) {
      setActiveCategory(newCategory);
    } else {
      navigate("/admin/archives/all");
    }
  }, [category, navigate]);

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    const formattedCategory = category.replace(/ /g, '-').toLowerCase(); 
    navigate(`/admin/archives/${formattedCategory}`); 
  };

  const handleRowSelect = (selectedRowIds) => {
    setSelectedRows(selectedRowIds);
  };

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
            labeltxt="Archives"
            filtervalue="Filter value"
            categories={validCategories}
            InsertButton={
              <>
                <FilterButton onFilter={handleFilter} />
                <RestoreButton isDisabled={selectedRows.length === 0} />
              </>
            }
            onCategorySelect={handleCategorySelect}
            activeCategory={activeCategory}
          />
        </div>

        <div className="flex-grow overflow-y-auto mb-1">
          <ArchiveData 
            activeCategory={activeCategory} 
            onRowSelect={handleRowSelect}
            query={searchQuery} />
        </div>

        <FilterModal
          isOpen={isFilterModalOpen}
          onClose={() => setIsFilterModalOpen(false)} 
        />

      </div>
    </main>
  );
}

export default Archives;
