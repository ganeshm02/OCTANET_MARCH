document.addEventListener("DOMContentLoaded", function() {
  const taskInput = document.getElementById("taskInput");
  const addBtn = document.getElementById("addBtn");
  const taskList = document.getElementById("taskList");

  addBtn.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  taskList.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete-btn")) {
      e.target.parentNode.remove();
    } else if (e.target.tagName === "LI") {
      e.target.classList.toggle("completed");
    }
  });

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");
      li.textContent = taskText;
      
      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "&#x2715;";
      deleteBtn.classList.add("delete-btn");
      
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
      
      taskInput.value = "";
    }
  }
});
