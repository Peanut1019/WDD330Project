import { loadHeaderFooter } from "./tools.mjs";
loadHeaderFooter();
const url = "https://www.affirmations.dev/"
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            document.getElementById("message") = print(response.json())
			console.log(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}
apiFetch();