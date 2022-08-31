import "./index.css";
import { app } from "./utils/app/app.js";
import { h1 } from "./utils/tags/h1.js";

const title = h1({ className: "title", textContent: "Hola mundo" });
app.appendChild(title);
