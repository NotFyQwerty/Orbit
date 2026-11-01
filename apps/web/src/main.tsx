import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@/shared/i18n";
import { initTheme } from "@/shared/theme";
import { App } from "@/app/App";

initTheme();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
