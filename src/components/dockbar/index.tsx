import DockApp from "./DockApp";
import { dockApps } from "@/data/apps";

function Dockbar() {
  return (
    <div className="dockbar">
      {dockApps.map((app) => {
        const Icon = app.icon;
        return (
          <DockApp tooltip={app.tooltip} isOpen={app.isOpen}>
            <Icon />
          </DockApp>
        );
      })}
    </div>
  );
}

export default Dockbar;
