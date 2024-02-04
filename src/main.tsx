import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ModalProvider } from "./components/ui/modal";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ModalProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ModalProvider>
  </React.StrictMode>
);
