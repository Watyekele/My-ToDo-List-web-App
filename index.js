let inputElement = document.querySelector("#ins");
let button = document.querySelector("#btn");
let taskContainer = document.querySelector("#onebyone");

function addItem() {
  let inputText = inputElement.value;
  if (inputText === "") {
    alert("This is required");
  } else {
    console.log(inputText);
    let listItem = document.createElement("li");
    listItem.innerText = inputText;
    taskContainer.appendChild(listItem);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    listItem.appendChild(span);
  }
  saveData();
}

taskContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("marked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", taskContainer.innerHTML);
}
function showTask() {
  taskContainer.innerHTML = localStorage.getItem("data");
}
showTask();

button.addEventListener("click", addItem);
