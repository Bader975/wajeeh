import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const ProgressIndicator = () => {
  const [steps, setSteps] = useState([
    { completed: true },
    { completed: true },
    { completed: false, current: true },
    { completed: false },
    { completed: false },
  ]);

  const completeStep = (index: number) => {
    setSteps(
      steps.map((step, i) => {
        if (i < index) return { ...step, completed: true };
        if (i === index) return { completed: true, current: false };
        if (i === index + 1) return { completed: false, current: true };
        return { completed: false };
      })
    );
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <div className="flex items-center gap-3">
        {steps.map((step, index) => (
          <div key={index} className="relative flex items-center">
            <div
              className={`z-[2] rounded-full h-8 w-8 flex items-center justify-center ${
                step.completed ? "bg-blue-500 text-white" : "bg-white border-2"
              } ${step.current ? "border-blue-500" : "border-gray-300"} ${
                step.completed ? "" : "text-gray-300"
              }`}
              onClick={() => completeStep(index)}
            >
              {step.completed ? (
                <FaCheck size={12} />
              ) : step.current ? (
                <div className="bg-blue-500 rounded-full h-3 w-3" />
              ) : null}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`absolute  left-1/2 transform -translate-x-1/2 h-0.5 ${
                  step.completed ? "bg-blue-500" : "bg-gray-300"
                } w-full`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
