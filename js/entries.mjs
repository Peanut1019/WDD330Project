import { getLocalStorage, setLocalStorage } from "./tools.mjs";
const initials = document.getElementById("initials");
const date = document.getElementById("date");
const entry = document.getElementById("entry");
const form = document.querySelector("form");
const rev = document.querySelector("#rev");
const moods = [];
export default class Entries {
constructor(){
this.initials = initials;
this.date = date;
this.entry = entry;
}
init() {
  moods = getLocalStorage(this.initials);
}

renderEntrySummary() {
form.addEventListener(
  "submit",
  (event) => {
    const data = new FormData(form);
    let output = "";
    for (const entry of data) {
      output = `${output}${entry[1]}\r`;
    }
    rev.innerText = output;
    event.preventDefault();
    moods.push(output);
    setLocalStorage(output);
  },
  false,
);
moods.forEach(mood => {
  document.getElementById("reverse").innerHTML= mood.toString();
});
  }
}