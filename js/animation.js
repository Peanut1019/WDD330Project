import { loadHeaderFooter } from "./tools.mjs";
import Entries from "./entries.mjs";
const formDes = document.getElementById("formDes");
const last = document.getElementById("last");

loadHeaderFooter();

const enter = new Entries();
enter.renderEntrySummary();

  const destroy = () => {
    formDes.innerHTML =`<div id="expl"><img src="https://peanut1019.github.io/WDD330Project/img/explosion.webp" alt="Explosion"><button id="stop">Stop!</button></div>`;
    document.getElementById("expl").animate([{ transform: "translate(-50%, -50%) scale(.5)" }, { transform: "translate(-50%, -50%) scale(1.5)" }],
    {
        duration: 1500, 
        easing: 'ease-in-out', 
        fill: 'both'
    },
  );
  document.getElementById("stop").addEventListener("click", retcon);
  };
  const destroyLast = () => {
    last.innerHTML = `<div id="expl"><img src="https://peanut1019.github.io/WDD330Project/img/explosion.webp" alt="Explosion"><button id="stop">Stop!</button></div>`;
    document
  .getElementById("expl").animate([{ transform: "translate(-50%, -50%) scale(.5)" }, { transform: "translate(-50%, -50%) scale(2)" }],
    {
        duration: 8000, 
        easing: 'ease-in-out', 
        fill: 'both'
    },
  );
  document.getElementById("stop").addEventListener("click", retson);
  }
  const retcon = () => {
    formDes.innerHTML =`<form>
  <fieldset>
      <legend>Entry:</legend>
      <label id="initials">Initials: <input type="text" name="initials" required></label><br>
      <label id="date">Date: <input type="date" name="date" required></label><br>
      <label id="entry">Write the Rest:<input type="text" name="entry" required></label>
    </fieldset>
    <input type="submit" id="save">
 </form>
 <button id="destroy">Destroy</button>`;
  }
const retson = () =>{
  last.innerHTML= `<p>It's Gone!:)</p>`;
}
document.getElementById("destroy").addEventListener("click", destroy);

document.getElementById("des").addEventListener("click", destroyLast);