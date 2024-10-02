import { CirclePlus, FolderDown, Trash2 } from "lucide-react";
import InformationPolicies from "./InformationPoliciesDialog";

import { useState } from "react";

function InformationPolicy() {
  // Policy Edit Dialog
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [policyData, setPolicyData] = useState({
    title: "",
    file: "",
    date: "",
    description: "", // Added description field
  });

  // Checkbox - barangay policies
  const [allPolicyChecked, setAllPolicyChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});

  // Policies data
  const policies = [
    {
      id: 1,
      title: "Policy 1",
      file: "policy1.pdf",
      date: "2024-9-01",
      description: "Description of Policy 1",
    },
    {
      id: 2,
      title: "Policy 2",
      file: "policy2.pdf",
      date: "2024-9-02",
      description: "Description of Policy 2",
    },
    {
      id: 3,
      title: "Policy 3",
      file: "policy3.pdf",
      date: "2024-9-03",
      description: "Description of Policy 3",
    },
    {
      id: 4,
      title: "Policy 4",
      file: "policy4.pdf",
      date: "2024-9-04",
      description: "Description of Policy 4",
    },
    // Add more policies here
  ];

  // Function to handle policy dialog management
  function openDialog(policy = null) {
    setPolicyData(policy);
    setIsPolicyOpen(true);
  }

  const closeDialog = () => setIsPolicyOpen(false);

  // Function to handle checkbox management
  const toggleAllCheckboxes = () => {
    const newCheckedItems = {};
    policies.forEach((policy) => {
      newCheckedItems[policy.id] = !allPolicyChecked;
    });
    setCheckedItems(newCheckedItems);
    setAllPolicyChecked(!allPolicyChecked);
  };

  const toggleCheckbox = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="relative">
      {/* Policy Table */}
      <div className="flex space-x-4 justify-end pr-6">
        <button className="flex items-center space-x-2 border border-slate-600 rounded-md p-1 px-3 text-slate-600 hover:text-slate-100 hover:bg-slate-700">
          <Trash2 className="h-5 w-5" strokeWidth={1.5} />
          <span>Delete</span>
        </button>
        <button className="flex items-center space-x-2 border border-slate-600 rounded-md p-1 px-3 text-slate-100 bg-slate-600 hover:text-slate-200 hover:bg-slate-700">
          <FolderDown className="h-5 w-5" strokeWidth={1.5} />
          <span>Export</span>
        </button>
      </div>
      <div className="p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-slate-600 border border-gray-200">
            <thead>
              <tr>
                <th className="p-3 border-b">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    checked={allPolicyChecked}
                    onChange={toggleAllCheckboxes}
                  />
                </th>
                <th className="p-3 border-b text-slate-100">Title</th>
                <th className="p-3 border-b text-slate-100">File</th>
                <th className="p-3 border-b text-slate-100">
                  Description
                </th>{" "}
                <th className="p-3 border-b text-slate-100">Date</th>
                {/* New column */}
              </tr>
            </thead>
            <tbody>
              {policies.map((policy, index) => (
                <tr
                  key={policy.id}
                  className={`hover:bg-slate-700 text-slate-600 hover:text-slate-100 ${
                    index % 2 === 0 ? "bg-slate-200" : "bg-slate-100"
                  }`}
                  onClick={() => openDialog(policy)}
                  style={{ cursor: "pointer" }}
                >
                  <td className="p-3 border-b text-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-slate-600"
                      checked={!!checkedItems[policy.id]}
                      onClick={(e) => e.stopPropagation()}
                      onChange={() => toggleCheckbox(policy.id)}
                    />
                  </td>
                  <td className="p-3 border-b">
                    <div className="flex items-center">
                      <div className="w-full h-[4vh] flex justify-center items-center gap-2">
                        {policy.title}
                      </div>
                    </div>
                  </td>
                  <td className="p-3 border-b">
                    <div className="relative">
                      <a href={policy.file} className="hover:underline">
                        {policy.file}
                      </a>
                    </div>
                  </td>

                  <td className="p-3 border-b">
                    <div className="w-full h-[4vh] flex justify-center items-center gap-2">
                      {policy.description} {/* Display description */}
                    </div>
                  </td>
                  <td className="p-3 border-b">
                    <div className="w-full h-[4vh] flex justify-center items-center gap-2">
                      {policy.date}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Adding Policy Button */}
      <div className="flex justify-center items-center w-full">
        <button
          onClick={() => openDialog(null)}
          className="w-8/12 h-[8vh] text-white bg-slate-600 flex justify-center items-center gap-2 hover:bg-slate-800"
        >
          <CirclePlus />
          Add Policy
        </button>
      </div>
      {isPolicyOpen && (
        <InformationPolicies
          closeDialog={closeDialog}
          initialData={policyData}
        />
      )}
    </div>
  );
}

export default InformationPolicy;
