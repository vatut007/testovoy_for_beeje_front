import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/component.tsx";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "./services/store.ts";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>
        <Header />
        <App />
      </Provider>
    </StrictMode>
  </BrowserRouter>,
);
