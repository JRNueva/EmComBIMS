import { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import DocumentRequest from './document-request-components/DocumentRequest.jsx';
import PendingRequest from './PendingRequest.jsx';
import SearchBarDefault from '../basic-components/SearchBarDefault.jsx';

const data = [
  {
    label: "Document Request",
    value: "document-request",
    comp: DocumentRequest,
  },
  {
    label: "Pending Request",
    value: "pending-request",
    comp: PendingRequest,
  },
];

export default function Requests() {
  const [searchQuery, setSearchQuery] = useState(''); 

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };
  
  return (
    <main className="h-screen w-screen flex bg-gray97">

      <SearchBarDefault 
          value={searchQuery} 
          onChange={handleSearchChange} 
        />

      <div className="w-full h-full pt-32">
        <Tabs id="custom-animation" value="document-request" 
          orientation="vertical" className="flex flex-col h-full rounded-xl"
        >
          <TabsHeader
            className="flex flex-row mx-28 p-2 w-[25rem] rounded-lg border-2 border-lightGray bg-gray97"
            indicatorProps={{
              className: "bg-softGray shadow-none z-60",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
            className="w-full h-full p-0 overflow-hidden" 
          >
            {data.map(({ value, comp: Component }) => (
              <TabPanel key={value} value={value}
                className="w-full h-full" 
              >
                <Component searchValue={String(searchQuery)}/>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </main>
  );
}
