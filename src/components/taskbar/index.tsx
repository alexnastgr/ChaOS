import Panel from "./Panel";
import Datetime from "./Datetime";
import { Calendar, ThemeSwitch } from "@/icons";

import useTheme from "@/hooks/useTheme";
function index() {
  const { darkMode, toggle } = useTheme();

  const dark = "bg-gray-900 text-white";
  const light = "bg-white text-black";

  return (
    <div className={`${darkMode == "dark" ? dark : light} taskbar`}>

      <Panel pos="Left">
        <ThemeSwitch width={22} onClick={toggle} />
      </Panel>

      <Panel pos="Right">
        <Datetime />
        <Calendar width={20} height={20} />
      </Panel>
    </div>
  );
}

export default index;
