document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("todo_task");
  const addbtn = document.getElementById("todo_add");
  const list = document.getElementById("todo_list");

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  tasks.forEach(task => renderTask(task));

  addbtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (text === "") return;

    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    tasks.push(newTask);
    saveTask();
    renderTask(newTask); // Corrected: pass the new task object
    taskInput.value = ""; // Clear input
  });

  function renderTask(task) {
    const li = document.createElement('li');
    li.dataset.id = task.id;
    li.innerHTML = `
      <p>${task.text}</p>
      <button class="delete">Delete</button>
    `;

    const deleteBtn = li.querySelector(".delete");
    deleteBtn.addEventListener("click", function () {
      // Remove from task array
      tasks = tasks.filter(t => t.id !== task.id);
      saveTask();
      li.remove(); // Remove from DOM
    });

    list.prepend(li);
  }

  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
