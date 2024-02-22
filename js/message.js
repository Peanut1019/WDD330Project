import { loadHeaderFooter } from "./tools.mjs";
loadHeaderFooter();
const message = document.getElementById("message");
let outputElement = '';
const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
const apiKey = 'sXSo8OXgXPlPuosqzSnPkw==m9Cryb7bED6KDGoZ';
const requestOptions = {
    method: 'GET',
    headers: {
      'X-Api-Key': `${apiKey}`,
    },
  };
  const again = () => {
  fetch(apiUrl, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
       outputElement = JSON.stringify(data, null, 1);
       displayMessage(outputElement);
    // console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
};
function displayMessage(data) {
        message.textContent = `${data}`;
        
    }
    again();
    document.getElementById("more").addEventListener("click", again);