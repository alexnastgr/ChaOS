import type { ReactNode } from "react";
import useTheme from "@/hooks/useTheme";
interface Props {
  tooltip: string;
  children: ReactNode;
  isOpen: boolean;
}

export default function DockApp({ tooltip, children, isOpen }: Props) {
  const { darkMode } = useTheme();

  const state = isOpen ? "bg-blue-500" : "bg-black";
  return (
    <div className="group relative flex flex-col items-center">
      <div className="tooltip">{tooltip}</div>

      <div className={`dockapp ${darkMode == "dark" ? "dark" : "light"} ${state}`}>
        {children}
      </div>
    </div>
  );
}
