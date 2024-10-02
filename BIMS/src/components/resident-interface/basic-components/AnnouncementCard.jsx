import { useRef } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

import ArticleModal from "../announcement-components/ArticleModal";

import calendar from "../../../assets/resident-interface/icons/card/calendar.svg"
 
export default function AnnouncementCard({ article, color }) {

  const articleModalRef = useRef(); 

  const {id, img, alt, title, desc, date } = article;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year : 'numeric', 
    month : 'long', 
    day : 'numeric'
  });

  return (
    <>
      <ArticleModal ref={articleModalRef} article={article} />

      <Card key={id} 
        className={`w-[19rem] h-auto flex-shrink-0 m-4
                font-inter ${color} rounded-none
                hover:shadow-lg transform 
                hover:scale-105 transition 
                duration-300 ease-in-out cursor-pointer`}
        onClick={() => articleModalRef.current.open()}
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img
            src={img} 
            alt={alt}
          />
        </CardHeader>

        <CardBody className="h-48 py-5 px-7">
          <div className="flex flex-col mb-3 justify-between">
            <Typography variant="h4" color="blue-gray" className="font-semibold text-lg">
              {title}
            </Typography>
            <p className="text-justify text-sm leading-6 pt-3 tracking-tightest font-light line-clamp-4">
              {desc}
            </p>
          </div>
        </CardBody>
        
        <CardFooter className="flex p-5 text-lowBlue gap-2">
          <img src={calendar} alt="" className="w-6 h-6" />
          <p>{formattedDate}</p>
        </CardFooter>
      </Card>
    </>
  );
}