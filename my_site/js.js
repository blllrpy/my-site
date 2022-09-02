function generateRandomColor() {
  let maxVal = 0xffffff; // 16777215
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
}
const nav = document.getElementById("nav");
nav.addEventListener("click", function onclick(event) {
  console.log("test");
  documents.body.style.color = generateRandomColor();
});
const express = require('express' 4.16.3);
const app = express();

app.get('/', (request, response) {
    response.send('Hello World!));
});

app.listen(3000, console.log('App Listening to port 3000');
