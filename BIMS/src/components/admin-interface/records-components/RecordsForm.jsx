import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import TableActions from "../basic-components/table-components/table-action/TableActions";
import DeleteButton from "../basic-components/table-components/button-components/DeleteButton";
import AddButton from "../basic-components/table-components/button-components/AddButton";
import FilterButton from "../basic-components/table-components/button-components/FilterButton";
import ExportButton from "../basic-components/table-components/button-components/ExportButton"; 
import ExportModal from '../basic-components/table-components/modal-components/ExportModal';
import FilterModal from '../basic-components/table-components/modal-components/FilterModal';

import RecordsFormData from "../../../util/admin-interface/records-data/RecordsFormData";

import "./records.css"; // Havent used 
import SearchBarDefault from '../basic-components/SearchBarDefault';

const validCategories = ["All", "Pending", "In Progress", "Completed", "Rejected"];
const recordsData = [
    {
        "id": "barangay-indigency-form",
        "label": "Barangay Indigency"
    },
    {
        "id": "business-clearance-form",
        "label": "Business Clearance"
    },
    {
        "id": "cedula-form",
        "label": "Cedula Form"
    },
    {
        "id": "barangay-accreditation-form",
        "label": "Barangay Accreditation Form"
    },
    {
        "id": "barangay-clearance-form",
        "label": "Barangay Clearance"
    }
];

function RecordsForm() {
  const { form, status } = useParams();
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedRows, setSelectedRows] = useState([]); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false); 
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const categoryMap = {
        'all': "All",
        'pending': "Pending",
        'in-progress': "In Progress",
        'completed': "Completed",
        'rejected': "Rejected"
    };

    const newCategory = categoryMap[status];

    if (newCategory) {
      setActiveCategory(newCategory);
    } else {
      navigate(`/admin/${form}/all`);
    }
  }, [status, navigate]);

  useEffect(() => {
    const selectedCategory = recordsData.find(item => item.label === form);
    if (selectedCategory) {
        setCategoryForm(selectedCategory.id);
    }
  }, [activeCategory]);

  const handleCategorySelect = (status) => {
    setActiveCategory(status);
    const formattedStatus = status.replace(/ /g, '-').toLowerCase(); 
      
    if (formattedStatus === 'all') {
        navigate(`/admin/records/${form}`);
    } else {
        navigate(`/admin/records/${form}/${formattedStatus}`);
    }
  };

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

  return (
    <main className="w-screen h-screen flex overflow-hidden">
        
      <SearchBarDefault 
        value={searchQuery} 
        onChange={handleSearchChange} 
      />

      <div className="w-full h-full">
        <div className="pt-20 bg-[#F7F7F7] h-full">
          <TableActions
            labeltxt={'All Records'}
            filtervalue="Filter value"
            categories={validCategories}
            InsertButton={
              <>
                <DeleteButton isDisabled={selectedRows.length === 0} />
                <FilterButton onFilter={handleFilter} />
                <ExportButton
                  isDisabled={selectedRows.length === 0}
                  onExport={handleExport} // Pass the export handler
                />
                <AddButton buttonName="Add" />
              </>
            }
            onCategorySelect={handleCategorySelect}
            activeCategory={activeCategory}
          />
          <div className="flex-grow h-full overflow-y-auto mb-1">
            <RecordsFormData 
              formCategory={form}
              activeCategory={activeCategory} 
              onRowSelect={handleRowSelect}
              query={searchQuery} />
          </div>
        </div>
      </div>

      {/* Export modal */}
      <ExportModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Close modal function
      />

      {/* Filter modal */}
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)} // Close filter modal
      />
    </main>
  );
}

export default RecordsForm;