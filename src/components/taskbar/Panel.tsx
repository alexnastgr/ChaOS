import type { ReactNode } from "react";

interface Props {
  pos: "Left" | "Right";
  children: ReactNode;
}

function Panel({ pos, children }: Props) {
  
  const posit = pos == "Left" ? "left-0" : "right-0";

  return <div className={`taskbar-panel ${posit}`}>{children}</div>;
}

export default Panel;
