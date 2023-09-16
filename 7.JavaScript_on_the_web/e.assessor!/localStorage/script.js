
const localStorageKey = 'greeting';
const localStorageValue = 'سلام دنیا!';

const btnElement = document.getElementById('btn');
const removeElement = document.getElementById('remove');

const resultElement = document.getElementById('result');

btnElement.addEventListener('click', () => {
  window.localStorage.setItem(localStorageKey, localStorageValue);
});

removeElement.addEventListener('click', () => {
  window.localStorage.removeItem(localStorageKey);
});

setInterval(() => {
  const test = window.localStorage.getItem(localStorageKey);
  if (test) {
    resultElement.innerHTML = test;
  } else {
    resultElement.innerHTML = '';
  }
}, 1000);