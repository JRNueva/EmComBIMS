import React from 'react';
import { FileQuestion, FileType, Upload, X } from 'lucide-react';
import {  Select, Option } from "@material-tailwind/react";

const Backup = () => {

    return (
        <div className="information-container w-screen h-screen flex flex-row text-left">
            <div className="w-full flex flex-col bg-[#F7F7F7]">
                <div className="pt-24 pl-28 pb-12 w-full flex mt-4 *:gap-4 overflow-hidden ">
                    <div className=" w-full md:w-[100%] flex flex-col">
                        <div className="relative inline-block m-3 mt-7 group">
                            <div className ="font-semibold text-3xl">Overview</div>
                            <div className='font-semibold text-sm mb-3 mt-5'>Size of backup: <span className='font-normal'>4.23 GB</span></div>
                            <div className='font-semibold text-sm mb-8'>Last backup: <span className='font-normal '>04/20/2024    1:25 PM</span></div>
                            <button
                                className=" h-8 mb-8 sm:w-32 py-1 px-4 border-2 font-bold bg-slate-600 text-snow text-xs border-slate-600  rounded-lg hover:bg-slate-800 transition-colors duration-300"
                            >
                                Backup Now
                            </button>
                            <div className="flex items-center justify-items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 text-blue-600"/>
                                <div className="ml-3 text-[15px] font-inter font-bold">Enable Scheduled Backups</div>
                            </div>                                
                        </div>
                    </div>
                </div>
                <div className="py-10 pl-24 w-full flex mt-1 *:gap-2 overflow-hidden">
                    <div className="w-full  flex flex-col">
                        <div className="grid grid-cols-4 p-7 gap-12">
                            <div>
                            Scheduled Backup Type
                                <div className="w-32 mt-3">
                                    <Select label="Select 1">
                                        <Option>Lorem ipsum</Option>
                                        <Option>Lorem ipsum</Option>
                                        <Option>Lorem ipsum</Option>
                                        <Option>Lorem ipsum</Option>
                                        <Option>Lorem ipsum</Option>
                                    </Select>
                                </div>
                            </div>
                            <div>
                                    Start Time
                                    <div className="w-32 mt-3">
                                    <form className="mx-auto">
                                        <div className="flex">
                                        <input 
                                    type="time" 
                                    id="time" 
                                    className="w-full rounded-none rounded-s-lg bg-gray-50 border text-gray-900 leading-none focus:ring-blue-500 focus:border-blue-500 block text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    min="09:00" 
                                    max="18:00" 
                                    value="00:00" 
                                    required
                                />                                            
                                        </div>
                                    </form>
                                </div>
                                </div>
                                        <div>
                                Frequency
                                    <div className="w-32 mt-3">
                                        <Select label="Select 1">
                                            <Option>Lorem ipsum</Option>
                                            <Option>Lorem ipsum</Option>
                                            <Option>Lorem ipsum</Option>
                                            <Option>Lorem ipsum</Option>
                                            <Option>Lorem ipsum</Option>
                                        </Select>
                                    </div>
                                </div>
                            <div>
                                Keep my Backups 
                                <div className="w-32 mt-3">
                                    <Select label="Select 1">
                                        <Option>Lorem ipsum</Option>
                                        <Option>Lorem ipsum</Option>
                                        <Option>Lorem ipsum</Option>
                                        <Option>Lorem ipsum</Option>
                                        <Option>Lorem ipsum</Option>
                                    </Select>
                                </div>
                            </div>
                            <div>
                                Range of Backup
                                <div className="w-32 mt-3">
                                    <Select label="Select 1">
                                        <Option>Lorem ipsum</Option>
                                        <Option>Lorem ipsum</Option>
                                        <Option>Lorem ipsum</Option>
                                        <Option>Lorem ipsum</Option>
                                        <Option>Lorem ipsum</Option>
                                    </Select>
                                </div>
                                </div>
                            <div>
                                Media Quality 
                                <div className="w-32 mt-3">
                                    <Select label="Select 1">
                                        <Option>Lorem ipsum</Option>
                                        <Option>Lorem ipsum</Option>
                                        <Option>Lorem ipsum</Option>
                                        <Option>Lorem ipsum</Option>
                                        <Option>Lorem ipsum</Option>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Backup;
