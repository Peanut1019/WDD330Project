import { getLocalStorage, setLocalStorage } from "./tools.mjs";
const initials = document.getElementById("initials");
const date = document.getElementById("date");
const entry = document.getElementById("entry");
export default class Entries {
constructor(){
this.initials = initials;
this.date = date;
this.entry = entry;
}
init() {
  this.list = getLocalStorage(this.initials)
}

renderEntrySummary() {
      const newEntry = `<h3>${initials}</h3>
      <p>Date: ${date}</p>
      <p>Entry: ${entry}</p>`;
      setLocalStorage(initials, newEntry);
      return newEntry;
  }

}