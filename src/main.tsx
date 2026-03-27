import "./index.css";

import { Provider } from "react-redux";
import { store } from "@/store";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import OS from "./OS.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <OS />
    </Provider>
  </StrictMode>,
);
