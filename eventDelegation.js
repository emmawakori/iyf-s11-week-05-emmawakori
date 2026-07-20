// BAD: Adding listeners to each item
const items = document.querySelectorAll("li");
items.forEach(item => {
    item.addEventListener("click", handleClick);
});
// Problem: New items won't have the listener!

// GOOD: Delegate to parent
document.querySelector("ul").addEventListener("click", function(event) {
    // Check if clicked element is an li
    if (event.target.matches("li")) {
        handleClick(event);
    }
    
    // Or check for a class
    if (event.target.classList.contains("item")) {
        handleClick(event);
    }
});
 const taskList = document.getElementById("taskList");
  const addBtn = document.getElementById("addBtn");
  const newTaskInput = document.getElementById("newTask");

  // Delegated event listener on parent <ul>
  taskList.addEventListener("click", function (event) {
    const target = event.target;

    // Toggle completed when clicking on <li>
    if (target.tagName === "LI") {
      target.classList.toggle("completed");
    }

    // Delete when clicking on delete button
    if (target.classList.contains("delete")) {
      target.parentElement.remove();
    }
  });

  // Add new task
  addBtn.addEventListener("click", function () {
    const text = newTaskInput.value.trim();
    if (text !== "") {
      const li = document.createElement("li");
      li.textContent = text;

      const delBtn = document.createElement("button");
      delBtn.textContent = "Delete";
      delBtn.className = "delete";

      li.appendChild(delBtn);
      taskList.appendChild(li);

      newTaskInput.value = "";
    }
  });
