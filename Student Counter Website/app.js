const number = document.querySelector("#number");
const incrementButton = document.querySelector("#increment");
const decrementButton = document.querySelector("#decrement");
const saveButton = document.querySelector("#save");
const entriesList = document.querySelector("#entries");

let count = 0;

incrementButton.addEventListener("click", function () {
  count++;
  number.textContent = count;
});

decrementButton.addEventListener("click", function () {
  count--;
  number.textContent = count;
});

saveButton.addEventListener("click", function () {
  // Remove all previous entries
  entriesList.innerHTML = '';

  const li = document.createElement("li");
  li.textContent = count;
  entriesList.appendChild(li);
  count = 0;
  number.textContent = count;
});
