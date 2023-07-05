//your JS code here. If required.
// script.js
window.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('level');
  let level = 0;

  while (element.parentNode) {
    element = element.parentNode;
    level++;
  }

  alert(`The level of the element is: ${level}`);
});
