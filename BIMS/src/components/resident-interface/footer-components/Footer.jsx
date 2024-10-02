import { Typography } from "@material-tailwind/react";

import { SITEMAP } from '../../../util/resident-interface/BarangayDetails.js';
 
const sitemap = SITEMAP();
const currentYear = new Date().getFullYear();
 
export default function FooterWithSitemap() {
  return (
    <footer className="relative w-full bg-darkestBlue">
      <div className="mx-auto w-full px-8 md:px-12 lg:px-24">

        <div className="mx-auto grid py-10 justify-around
                  grid-cols-3 text-snow" >

          {sitemap[0].map(({ title, links }, key) => (
            <div key={key} className="w-fit mx-auto text-start">
              <Typography key={key}
                variant="small"
                className="mb-4 text-sm font-bold uppercase opacity-90" >
                {title}
              </Typography>

              <ul className="space-y-1">
                {links.map(({ label, url, icon }, key) => (
                  <a key={key} href={url}
                    target="_blank" rel="noopener noreferrer"
                    className="flex py-1 pr-2 font-normal 
                      transition-transform hover:scale-105 gap-2" >
                    <img src={icon} className="w-5 h-5" />
                    <div className="text-sm" >
                      {label.map((item, index) => (
                        <p key={index}>{item}</p>
                      ))}
                    </div>
                  </a>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col items-center justify-center 
                    border-t border-snow py-4 md:flex-row md:justify-between">

          <Typography variant="small"
            className="mb-4 text-center font-normal text-snow md:mb-0" >
            <a href="https://bulsucict.com/"
              target="_blank" rel="noopener noreferrer" > 
              &copy; {currentYear}  BulSU BSIT CICT
            </a>
            . All Rights Reserved
          </Typography>

          <div className="flex gap-3 sm:justify-center">
            {sitemap[1].map(({ url, icon }, key) => (
              <Typography key={key} as="a" href={url}
                className="opacity-80 transition-opacity hover:opacity-100">
                  <img src={icon} className="w-5 h-5" />
              </Typography>
            ))}

          </div>

        </div>
      </div>
    </footer>
  );
}