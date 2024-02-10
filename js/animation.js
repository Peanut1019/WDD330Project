import { loadHeaderFooter } from "./tools.mjs";
const formDes = document.getElementById("formDes");
const expl = document.getElementById("expl");
const last = document.getElementById("last");


loadHeaderFooter();
if (document.getElementById("destroy").addEventListener("click")) {
    formDes.innerHTML =`<div id="expl">💣</div>`;
var explosion = document
  .getElementById("expl")
  .animate(
    [{ transform: "translate(-50%, -50%) scale(.5)" }, { transform: "translate(-50%, -50%) scale(2)" }],
    {
        duration: 8000, 
        easing: 'ease-in-out', 
        fill: 'both'
    },
  );
    expl.explosion();
}
if (document.getElementById("des").addEventListener("click")) {
    last.innerHTML =`<div id="expl">💣</div>`;
var explosion = document
  .getElementById("expl")
  .animate(
    [{ transform: "translate(-50%, -50%) scale(.5)" }, { transform: "translate(-50%, -50%) scale(2)" }],
    {
        duration: 8000, 
        easing: 'ease-in-out', 
        fill: 'both'
    },
  );
    expl.explosion();
}