import { Stepper, Step } from "@material-tailwind/react";

export default function StepperDefault({ activeStep, pages }) {
  const showLine = pages.length > 1;

  return (
    <Stepper
      lineClassName={showLine ? "h-1 bg-lowBlue opacity-60" : "opacity-0"}
      activeLineClassName={showLine ? "h-1 bg-lowBlue" : "opacity-0"}
      activeStep={activeStep}
    >
      {pages.map((_, index) => {
        const isCompleted = index < activeStep;
        return (
          <Step
            key={index}
            className="min-h-11 min-w-11 bg-lowBlue text-white"
            activeClassName="border-[3px] border-lowBlue text-lowBlue bg-white"
            completedClassName="border-[3px] border-lowBlue text-lowBlue bg-white"
          >
            {isCompleted ? <span>&#10003;</span> : <span>{index + 1}</span>}
          </Step>
        );
      })}
    </Stepper>
  );
}
