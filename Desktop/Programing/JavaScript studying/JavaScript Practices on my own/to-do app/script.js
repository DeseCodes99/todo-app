"use strict";
// settings variables
const todoInput = document.querySelector(".todo-input");
const addTodo = document.querySelector(".subBtn");
const todoContainer = document.querySelector(".todo-container");

// addEventListeners
addTodo.addEventListener("click", (e) => {
  e.preventDefault();
  let todoValue = todoInput.value;
  const text = html(todoValue);
  console.log(text);
  appendTodoContainer(text);
  const doneBtns = document.querySelectorAll(".done");
  const editBtns = document.querySelectorAll(".edit");
  const deleteBtns = document.querySelectorAll(".delete");
  //   doneBtns.forEach((e) =>
  //     e.addEventListener("click", () => {
  //       console.log("ho");
  //     })
  //   );
  todoInput.value = "";
  addTodoEventListeners();
});

// functions
function html(inputValue) {
  return `
<section class="todo-item">
<div class="todo">
  <h3 class="todo-desc">-${inputValue}</h3>
</div>
<div class="todo-options">
  <button class="done btnScaler">done</button>
  <button class="edit btnScaler">edit</button>
  <button class="delete btnScaler">delete</button>
</div>  
</section>
`;
}
function appendTodoContainer(todo) {
  todoContainer.insertAdjacentHTML("beforeend", todo);
}

function addTodoEventListeners() {
  const doneBtns = document.querySelectorAll(".done");
  const editBtns = document.querySelectorAll(".edit");
  const deleteBtns = document.querySelectorAll(".delete");
  doneBtns.forEach((e) => {
    e.addEventListener("click", handleDone);
  });
  editBtns.forEach((e) => {
    e.addEventListener("click", handleEdit);
  });
  deleteBtns.forEach((e) => {
    e.addEventListener("click", handleDelete);
  });
}
function handleDone(e) {
  const todoItem = e.target.closest(".todo-item");
  const todoDesc = todoItem.querySelector(".todo-desc");
  todoDesc.classList.toggle("completed");
}
function handleEdit(e) {
  const todoItem = e.target.closest(".todo-item");
  const todoDesc = todoItem.querySelector(".todo-desc");
  const editBtn = todoItem.querySelector(".edit");
  const newInput = document.createElement("input");
  const completeEdit = document.createElement("button");
  completeEdit.textContent = "complete";
  completeEdit.classList.add("completeEditing");
  newInput.type = "text";
  newInput.classList.add("todo-input");
  newInput.value = todoDesc.textContent;
  editBtn.replaceWith(completeEdit);
  todoDesc.replaceWith(newInput);
  completeEdit.addEventListener("click", function () {
    todoDesc.textContent = `-${newInput.value}`;
    completeEdit.replaceWith(editBtn);
    newInput.replaceWith(todoDesc);
  });
}
function handleDelete(e) {
  const targetItem = e.target.closest(".todo-item");
  targetItem.remove();
}
