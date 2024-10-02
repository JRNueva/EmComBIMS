import { useState } from 'react';
import { Search } from 'lucide-react';

function AdminSearchbox() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
    // Add your search logic here
  };

  return (
    <div className="flex items-center border border-mediumBlue rounded-full overflow-hidden w-full h-10 sm:-mr-20 sm:w-auto">
      <input
        type="text"
        className="p-2 sm:w-64 md:w-50 lg:w-80 focus:outline-none"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-mediumBlue text-white p-3 flex items-center justify-center  hover:bg-darkestBlue"
      >
        <Search className="
          h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6
          mr-1 sm:mr-2 bg-blues
        " />
      </button>
    </div>
  );
}

export default AdminSearchbox;
