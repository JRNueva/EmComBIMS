import React from 'react';
import { FileQuestion, FileType, Upload, X } from 'lucide-react';
import { Progress } from "@material-tailwind/react";

const ImportRecords = () => {
    function ProgressDefault() {
        return <Progress value={75} color="blue-gray" />;
    }

    return (
        <div className="information-container w-screen h-screen flex flex-row">
            <div className="w-full flex flex-col">
                <div className="w-full flex-grow p-4 bg-[#F7F7F7] flex flex-col items-center justify-center">
                    {/* Dropzone Component */}
                    <div className="flex items-center justify-center w-[500px] mb-6">
                        <label 
                            htmlFor="dropzone-file" 
                            className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
                        >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <Upload className="w-6 h-6 mb-4 text-gray-500 dark:text-gray-400" />
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Drag & Drop or
                                    <span className="font-semibold"> Choose File</span> to Upload
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                CVS or TXT
                                </p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-[500px] h-20 flex flex-col items-center bg-[#CDD2DC] p-4 mb-6">
                        <div className="flex flex-row items-center w-full">
                            <FileType className="text-gray-500" />
                            <div className="flex flex-col ml-2">
                                <h3 className="text-base font-semibold">Resident_Records.csv</h3>
                                <span className="text-xs text-gray-500">443 KB - 2 seconds left</span>
                            </div>
                            <button className="bg-transparent hover:bg-gray-300 ml-auto text-gray-500 font-bold py-1 px-4 rounded-full focus:outline-none focus:shadow-outline">
                                <X className="text-gray-500" />
                            </button>
                        </div>
                        <div className="w-full mt-2">
                            <ProgressDefault />
                        </div>
                    </div>

                    {/* View Standardized Format Link */}
                    <div className='w-[500px] h-20 flex flex-col items-center '>
                        <div className="w-[500px] h-20 flex flex-col items-center mt-44">
                        {/* Modal Guidelines if possible */}
                        <a href="/path-to-standardized-format" className="flex flex-row items-center space-x-2 text-base font-semibold text-[#667085] hover:underline">
                            <FileQuestion className="text-[#667085]" />
                            <span className="underline">View standardized format</span>
                        </a>
                    </div></div>
                    
                </div>
            </div>
        </div>
    );
};

export default ImportRecords;
