const todo_input = document.getElementById("todo-input");
const add_todo = document.getElementById("add-btn");
const todo_list = document.getElementById("todo-list");

add_todo.addEventListener("click", () => {
  let task = todo_input.value.trim();
  if (task !== "") {
    let li = document.createElement("li");
    li.innerHTML = `<span class="task-text">${task}</span> <div class="btns-div"><button class="check-btn">&#x2611</button> <button class="delete-btn">&#x2612;</button> </div>`;
    todo_list.appendChild(li);

    // make the inpute empty
    todo_input.value = "";

    // li line through
    li.querySelector(".check-btn").addEventListener("click", () => {
      li.querySelector(".task-text").classList.toggle("line_through");
    });

    // del li
    li.querySelector(".delete-btn").addEventListener("click", () => {
      li.remove();
    });
  }
});
