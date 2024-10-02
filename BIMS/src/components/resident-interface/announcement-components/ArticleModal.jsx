import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { 
    Dialog, 
    DialogHeader, 
    DialogBody, 
    DialogFooter, 
    Typography, 
    Avatar, 
    Textarea, 
    IconButton 
} from '@material-tailwind/react';
import ButtonDefault from '../basic-components/ButtonDefault.jsx';

import calendar from "../../../assets/resident-interface/icons/card/calendar.svg";

const ArticleModal = forwardRef(({ article }, ref) => {
    
    const [open, setOpen] = React.useState(false);

    const { id, img, title, author, desc, date } = article || {};
    const formattedDate = date ? new Date(date).toLocaleDateString('en-US', {
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    }) : '';

    useImperativeHandle(ref, () => ({
        open() {
            setOpen(true);
        },
        close() {
            setOpen(false);
        }
    }));

    if (!article) return null;

    function handleOpen() {setOpen(!open)};
    function handleClose() {setOpen(false)};

    function handleSubmit() {
        console.log("Submit clicked");
    }

    return (
        <Dialog 
            key={id} size="xl" open={open} 
            handler={handleOpen}
            className="h-3/4 overflow-hidden overflow-y-auto hide-scroll"
        >

            {/* HEADER */}
            <DialogHeader className="relative flex items-center justify-between">
                <img src={img} alt={title} className="w-full p-10 object-cover" />
                {/* X ICON */}
            </DialogHeader>

            {/* BODY */}
            <DialogBody className="flex flex-col gap-3 pb-10 text-center font-inter text-blue-gray-900">
                <Typography variant="h4" color="blue-gray" className="font-semibold text-lg">
                    {title}
                    <div className="flex p-5 justify-center text-lowBlue gap-2">
                        <img src={calendar} alt="Calendar" className="w-6 h-6" />
                        <p>{formattedDate}</p>
                    </div>
                </Typography>

                <div className="flex items-center gap-4 justify-center">
                    <Avatar src={author?.img} alt={author?.name} />
                    <div>
                        <Typography variant="h6">{author?.position}</Typography>
                        <Typography variant="small" color="gray" className="font-normal">
                            {author?.name}
                        </Typography>
                    </div>
                </div>

                <p className="text-center text-sm leading-6 pt-3 tracking-tightest font-light line-clamp-4">
                    {desc}
                </p>
            </DialogBody>

            {/* FOOTER */}
            <DialogFooter className="flex flex-col items-center gap-4">

                {/* TEXTAREA */}
                <div className="relative w-[35rem]">
                    <Textarea variant="outlined" label="Comment" rows={8} />
                    <div className="flex w-full justify-between py-1.5">

                        {/* SVG */}
                        <IconButton variant="text" color="blue-gray" size="sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                                />
                            </svg>
                        </IconButton>

                        {/* BTNS */}
                        <div className="flex gap-2">
                            <ButtonDefault 
                                type="forms" 
                                className="w-40 pt-2.5 text-lowBlue bg-snow border border-lowBlue" 
                                onClick={handleClose}
                            >
                                Cancel
                            </ButtonDefault>
                            <ButtonDefault 
                                type="modal" 
                                className="w-40 bg-lowBlue" 
                                onClick={handleSubmit}
                            >
                                Submit
                            </ButtonDefault>
                        </div>
                    </div>
                </div>
            </DialogFooter>
        </Dialog>
    );
});

export default ArticleModal;


            