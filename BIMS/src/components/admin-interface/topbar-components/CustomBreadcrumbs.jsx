import React from 'react';
import { Breadcrumbs } from "@material-tailwind/react";

const CustomBreadcrumbs = ({ breadcrumbs }) => {
  return (
    <Breadcrumbs separator=">" className="bg-white p-0 m-0 mb-2 text-black">
      {breadcrumbs.map((breadcrumb, index) => (
        <span 
          key={index} 
          className={`font-inter font-medium  ${index === breadcrumbs.length - 1 ? "text-[#748CAB]" : "text-gray-900 opacity-60"}`}>
          {breadcrumb.label}
        </span>
      ))}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
