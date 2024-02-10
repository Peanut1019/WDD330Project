import { getLocalStorage, setLocalStorage } from "./tools.mjs";
import { loadHeaderFooter } from "./tools.mjs";
loadHeaderFooter();
const form = document.querySelector("form");
const log = document.querySelector("#log");

form.addEventListener(
  "submit",
  (event) => {
    const data = new FormData(form);
    let output = "";
    for (const entry of data) {
      output = `You were ${output}${entry[1]}\r the last time you checked in.`;
    }
    log.innerText = output;
    event.preventDefault();
  },
  false,
);
