import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Bars from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Bars />
  </StrictMode>
);
