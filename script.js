import { actions, chars } from './constants.js';
window.onload = function () {
  const Main = document.getElementById('main');
  function addElement() {
    const elem = document.createElement('div');
    elem.classList.add('element');
    elem.innerHTML = `${getRandomArrayElement(
      chars
    )} </br> ${getRandomArrayElement(actions)}`;
    Main.appendChild(elem);
  }
  function getRandomArrayElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  for (let index = 0; index < 32; index++) {
    addElement();
  }
}


