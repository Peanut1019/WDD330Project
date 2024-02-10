// export function rendWithTemp(parentElement, data, position="afterbegin", clear = false) {
//     if (clear){
//         parent.innerHTML = "";
//     }
//     parentElement.insertAdjacentHTML(position, data);
// }
// export async function loadTemp(){
//     const res = await fetch(path);
//     const temp = await res.text();
//     return temp;
// }
// export async function loadHeadFoot() {
//     const head = document.getElementById("header");
//     const foot = document.getElementById("footer");
//     const headTemp = await loadTemp("../partials/header.html");
//     const footTemp = await loadTemp("../partials/footer.html");
//     rendWithTemp(head, headTemp);
//     rendWithTemp(foot, footTemp);
// }
export function renderWithTemplate(parentElement, data, position = "afterbegin", clear = false) {
    if (clear) {
      parentElement.innerHTML = "";
    }
    parentElement.insertAdjacentHTML(position, data);
  }


export async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
}

export async function loadHeaderFooter() {
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");
  const headerTemplate = await loadTemplate("../partials/header.html");
  const footerTemplate = await loadTemplate("../partials/footer.html");
  renderWithTemplate(header, headerTemplate);
  renderWithTemplate(footer, footerTemplate);
}