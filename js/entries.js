import { getLocalStorage, setLocalStorage } from "./tools.mjs";
const initials = document.getElementById("initials");
const date = document.getElementById("date");
const entry = document.getElementById("entry");
getLocalStorage(initials);
button.addEventListener('click', () => { 
   displayEntry();
    
 });


 function displayEntry() {
    const elem = this.renderEntrySummary();
    document.getElementById("reverse").innerHTML = elem;
  }

  function renderEntrySummary() {
      const newEntry = `<h3>${initials}</h3>
      <p>Date: ${date}</p>
      <p>Entry: ${entry}</p>`;

      return newEntry;
  }
setLocalStorage(initials, newEntry);