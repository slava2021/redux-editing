import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store/index";

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// serviceWorker.unregister();
