
import { loadHeaderFooter } from "./tools.mjs";
loadHeaderFooter();
const d = new Date();
const form = document.querySelector("form");
const log = document.querySelector("#log");
const moods = [];
form.addEventListener(
  "submit",
  (event) => {
    const data = new FormData(form);
    let output = "";
    for (const entry of data) {
      output = `You are ${output}${entry[1]}\r right now.`;
    }
    log.innerText = output;
    event.preventDefault();
    moods.push(d);
    moods.push(output);
  },
  false,
);
moods.forEach(mood => {
  document.getElementById("others").innerHTML= mood.toString();
});