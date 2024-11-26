const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const ulEl = document.querySelector('ul');

const addGoal = () => {
  const enterValue = inputEl.value;
  const listItemEl = document.createElement('li');
  listItemEl.textContent = enterValue;
  ulEl.appendChild(listItemEl);
  inputEl.value = '';
};

buttonEl.addEventListener('click', addGoal);
