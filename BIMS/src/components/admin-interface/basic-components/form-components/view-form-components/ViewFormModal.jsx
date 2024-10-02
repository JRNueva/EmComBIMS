import { useState, useEffect } from "react";
import FormDefault from '../form-sub-components/FormDefault.jsx';

import editIcon from '../../../../../assets/admin-interface/icons/form/edit.svg';

export default function ViewFormModal({ formParts, response = {}, disabled = false }) {
  
  const [parts, setParts] = useState([]);

  useEffect(() => {
    if (formParts) {
      setParts(formParts);
    }
  }, [formParts]);

  return (
    <div className="pt-5 pb-10">
      {parts.length > 0 && (
        parts.map((part, index) => (
          <div key={part.id} className="flex flex-col w-full border border-lightGray mb-5">
            <div className="flex w-full h-12 px-5 justify-between bg-softGray">
              <span className="my-auto font-inter text-base font-medium">
                {part.title || `Part ${index + 1}`}
              </span>
              <img src={editIcon} alt="edit" className="w-10 py-3"/>
            </div>

            <div className="flex flex-col my-auto px-5 py-24 justify-center items-center gap-5">
              <div className="flex flex-wrap justify-center gap-10">
                <FormDefault
                  pages={part.inputs || []} 
                  values={response}        
                  disabled={disabled}
                />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
