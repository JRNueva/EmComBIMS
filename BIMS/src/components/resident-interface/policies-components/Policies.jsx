import { useLocation } from 'react-router-dom';

import AnimatedAccordionPage from './Accordion.jsx';

import { BARANGAY_POLICIES } from '../../../util/resident-interface/BarangayPolicies.js';

function RootLayoutPolicies() {
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop(); 
  
  const policy = BARANGAY_POLICIES.find((policy) => currentPath.includes(policy.id));

  return (
    <>
      <div className="flex-col pt-40 px-8 md:px-12 lg:px-24 font-inter">
        <div className="flex-col font-inter my-auto text-wrap">
          <h3 className="font-semibold text-4xl text-balance">
            {policy.title}
          </h3>
          <p className="py-5 font-light">
            {policy.desc}
          </p>
        </div>
      </div>

      <section className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <AnimatedAccordionPage 
          documents={policy.documents}/>
      </section>
    </>
  );
}

export default RootLayoutPolicies;



