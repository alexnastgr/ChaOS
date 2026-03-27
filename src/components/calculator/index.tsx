import { useRef } from "react";
import { useCalculate } from "@/hooks/useCalculate";
import Draggable from "react-draggable";
import { buttons } from "./buttons";

export default function Calculator() {
  const { screen, handleClick } = useCalculate();
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Draggable nodeRef={ref}>
      <div ref={ref} className="calculator">

        <div className="screen">{screen}</div>

        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn, index) => {
           
           const summary = "col-span-2 bg-[#0B809E] text-white"
           const normal = "bg-gray-800 text-white hover:bg-white/10"
    
            return (
              <button
                onClick={() => handleClick(btn)}
                key={index}
                className={`button ${btn === "=" ? summary : normal}`}
              >
                {btn}
              </button>
            );
          })}


        </div>
      </div>
    </Draggable>
  );
}
