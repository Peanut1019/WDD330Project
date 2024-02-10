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
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}