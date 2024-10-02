import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function BotPaginationDefault({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const getItemProps = (index) => ({
    variant: currentPage === index ? "filled" : "text",
    color: "gray",
    onClick: () => onPageChange(index),
    className: `text-gray-900 ${currentPage === index ? 'bg-lowBlue text-white' : 'bg-transparent'}`,
  });

  const renderPageNumbers = () => {
    const pagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + pagesToShow - 1);

    if (endPage - startPage < pagesToShow - 1) {
      startPage = Math.max(1, endPage - pagesToShow + 1);
    }

    return (
      <>
        {startPage > 1 && (
          <>
            <IconButton {...getItemProps(1)}>1</IconButton>
            {startPage > 2 && <span className="text-gray-500">...</span>}
          </>
        )}
        {pageNumbers.slice(startPage - 1, endPage).map((page) => (
          <IconButton key={page} {...getItemProps(page)}>
            {page}
          </IconButton>
        ))}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span className="text-gray-500">...</span>}
            <IconButton {...getItemProps(totalPages)}>{totalPages}</IconButton>
          </>
        )}
      </>
    );
  };

  const next = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const prev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  return (
    <div className="flex items-center gap-4 font-poppins">
      <Button
        variant="text"
        className={`flex items-center gap-2 text-lowBlue ${currentPage === 1 ? 'opacity-50' : ''}`}
        onClick={prev}
        disabled={currentPage === 1}
      >
        <ArrowLeftIcon 
          strokeWidth={2} 
          className={`h-4 w-4 text-lowBlue ${currentPage === 1 ? 'opacity-50' : ''}`} 
        /> 
        Previous
      </Button>
      <div className="flex items-center gap-2">
        {renderPageNumbers()}
      </div>
      <Button
        variant="text"
        className={`flex items-center gap-2 text-lowBlue ${currentPage === totalPages ? 'opacity-50' : ''}`}
        onClick={next}
        disabled={currentPage === totalPages}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className={`h-4 w-4 text-lowBlue ${currentPage === totalPages ? 'opacity-50' : ''}`} />
      </Button>
    </div>
  );
}
