import { loadHeaderFooter } from "./tools.mjs";
const formDes = document.getElementById("formDes");
const last = document.getElementById("last");


loadHeaderFooter();
const explosion = document
  .getElementById("expl").animate([{ transform: "translate(-50%, -50%) scale(.5)" }, { transform: "translate(-50%, -50%) scale(2)" }],
    {
        duration: 8000, 
        easing: 'ease-in-out', 
        fill: 'both'
    },
  );
  const destroy = () => {
    formDes.innerHTML =`<div id="expl"><img src="../img/explosion.webp" alt="Explosion"></div>`;
    explosion.play();
  };
  const destroyLast = () => {
    last.innerHTML =`<div id="expl"><img src="../img/explosion.webp" alt="Explosion"></div>`;
    explosion.play();
  }
document.getElementById("destroy").addEventListener("click", destroy);
    
    
 
document.getElementById("des").addEventListener("click", destroyLast);
