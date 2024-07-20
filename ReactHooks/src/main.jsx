import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./components/UseContext/useContextHook.jsx";
import { userdata } from "./components/store.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider value={userdata}>
    <App />
  </AppProvider>
);
