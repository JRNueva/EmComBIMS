import { useState } from 'react';

function Accordion({ document, isOpen, onClick }) {
  const { id, title, doc } = document;
  return (
    <div className={`py-3 font-inter text-white ${isOpen ? 'bg-lowBlue' : 'bg-mediumBlue'}`}>
      <h2>
        <button
          className="flex items-center justify-between 
            w-full px-10 py-2 text-left text-sm font-light"
          onClick={(e) => {
            e.preventDefault();
            onClick(id);
          }}
          aria-expanded={isOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <span>{title}</span>
          <svg
            className="fill-white shrink-0 ml-8"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7" width="16"
              height="2" rx="1"
              className={`transform origin-center 
                transition duration-200 ease-out ${isOpen ? '!rotate-180' : ''}`} />
            <rect
              y="7" width="16"
              height="2" rx="1"
              className={`transform origin-center rotate-90 
                transition duration-200 ease-out ${isOpen ? '!rotate-180' : ''}`}
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid overflow-hidden transition-all duration-300 ease-in-out bg-lightGray
                ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 h-0'}`}
      >
        <div className="flex flex-col items-center py-5 justify-center bg-gray-300" >
        {doc ? (
          <a href={doc} target="_blank" rel="noopener noreferrer" 
            className="flex justify-center items-center">
            <object
              data={`${doc}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
              type="application/pdf"
              width="470px"
              height="600px"
              style={{ display: 'block', margin: '0 auto' }}
            >
              <p className="my-10 text-center text-gray-500" >Your browser does not support PDFs. 
                <a href={doc} target="_blank" rel="noopener noreferrer" className="text-mediumBlue italic">
                  Download the PDF
                </a>.
              </p>
            </object>
          </a>
        ) : (
          <p className="my-10 text-center text-gray-500" >Document not available</p>
        )}
        </div>
      </div>
    </div>
  );
}

export default function AnimatedAccordionPage({ documents }) {
  const [openId, setOpenId] = useState(null);

  const handleAccordionClick = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return <section className="relative flex flex-col mt-20 mb-40 overflow-hidden">
    <div className="w-full min-h-screen mx-auto px-8 md:px-12 lg:px-24">
      <div className="divide-y divide-slate-200">
        {documents.map((document) => (
          <Accordion
            key={document.id}
            document={document}
            isOpen={openId === document.id}
            onClick={handleAccordionClick}
          />
        ))}
      </div>
    </div>
  </section>
}
