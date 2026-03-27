import Taskbar from "@/components/taskbar";
import Logo from "@/components/Logo";
import Dockbar from "@/components/dockbar";

import Calculator from "@/components/calculator";

function OS() {
  return (
    <div className="desktop">
      <Taskbar />
      <Logo/>
      <Dockbar/>
      <Calculator/>
    </div>
  );
}

export default OS;
