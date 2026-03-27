import { useState } from "react";

export function useCalculate() {
  const [screen, setScreen] = useState("0");

  const clear = () => setScreen("0");

  const calculate = () => {
    try {
      const result = eval(screen);
      setScreen(String(result));
    } catch {
      setScreen("Error");
    }
  };

  const toggleSign = () => {
    setScreen(String(parseFloat(screen) * -1));
  };

  const percentage = () => {
    setScreen(String(parseFloat(screen) / 100));
  };

  const append = (value: string) => {
    setScreen((prev) => (prev === "0" ? value : prev + value));
  };

  const handleClick = (value: string) => {
    if (value === "C") return clear();
    if (value === "=") return calculate();
    if (value === "+/-") return toggleSign();
    if (value === "%") return percentage();

    append(value);
  };

  return {
    screen,
    handleClick,
  };
}