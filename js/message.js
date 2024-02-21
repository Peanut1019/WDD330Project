import { loadHeaderFooter } from "./tools.mjs";
loadHeaderFooter();
var category = 'happiness'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': 'sXSo8OXgXPlPuosqzSnPkw==m9Cryb7bED6KDGoZ'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
// async function apiFetch() {
//     try {
//         const response = await fetch(url);
//         if (response.ok) {
//             const data = await response.json();
//             document.getElementById("message") = print(response.json())
// 			console.log(data);
//         }
//         else {
//             throw Error(await response.text());
//         }
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// apiFetch();