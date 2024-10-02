function CategoryButton({ onCategory, categoryName, isActive }) {
  return (
    <button
      onClick={onCategory}
      className={`
        ${isActive ? 'text-blue-500 underline' : 'text-gray-500'}
        py-1.5 sm:py-2 md:py-2.5  /* Responsive vertical padding */
        px- sm:px-0 md:px-0  /* Responsive horizontal padding */
        flex font-medium font-inter 
        text-xs sm:text-sm  /* Responsive text size */
        transition duration-200 ease-in-out hover:text-blue-500 hover:underline  /* Hover effects */
        `}
    >
      {categoryName}
    </button>
  );
}

export default CategoryButton;
