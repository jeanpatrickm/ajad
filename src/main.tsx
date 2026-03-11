import { hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Hydrates the server-rendered HTML, attaching React event handlers
// without re-rendering the DOM. This keeps interactive components
// (like shadcn Sheet) working with minimal JS overhead.
const root = document.getElementById("root");

if (!root) throw new Error("No #root element found");

hydrateRoot(root, <App />);
