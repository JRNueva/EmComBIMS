import { Button } from "@material-tailwind/react";

export default function ButtonDefault({ type, children, ...props}) {

  let style;

  const home = `h-12 my-auto 
                rounded-[11px] drop-shadow-xl
                text-base font-semibold 
                tracking-wider text-lightGrayYellow`;

 const menu = `rounded-[14px] my-auto min-h-10 
              text-xs font-semibold 
              tracking-wider text-lightGrayYellow`;

  const services = `h-10 w-60 text-sm
                  font-semibold tracking-wide
                  rounded-[15px] `;

  const forms = `h-10 w-40 text-sm
                font-semibold tracking-wide
                rounded-[12px]`;

  const modal = `h-10 text-sm rounded-lg
                font-semibold tracking-wide `;

  if (type === 'menu') {
    style = menu;
  } else if (type === 'home') {
    style = home;
  } else if (type === 'services') {
    style = services;
  } else if (type === 'forms') {
    style = forms;
  } else if (type === 'modal') {
    style = modal;
  }

  return <Button {...props}
      className={`font-poppins normal-case ${style} ${props.className}`} >
      {children}
    </Button>
}