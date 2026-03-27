import { Terminal, Calculator, Settings,Notes } from "@/icons"; // SVG Element

type App = {
  icon: React.ComponentType;
  name: string;
  tooltip: string;
  isOpen: boolean;
};

export const dockApps: App[] = [
  {
    icon: Terminal,
    name: "terminal",
    tooltip: "Terminal",
    isOpen: false,
  },

  {
    icon: Calculator,
    name: "calculator",
    tooltip: "Calculator",
    isOpen: false,
  },

  {
    icon: Notes,
    name: "notes",
    tooltip: "Notes",
    isOpen: false,
  },


   {
    icon: Settings,
    name: "settings",
    tooltip: "Settings",
    isOpen: false,
  },
];
