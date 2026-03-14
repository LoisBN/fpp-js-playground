// =============================================
// 🎮 TASK TRACKER — Your JavaScript Playground
// =============================================
//
// Welcome! This file has 3 sections:
//
//   📦 SECTION 1: THE DATA      (where tasks are stored)
//   🎨 SECTION 2: THE DISPLAY   (how tasks appear on screen)
//   ⚡ SECTION 3: THE ACTIONS   (what happens when you click)
//
// 📖 Lines with 📖 are for you to READ and understand
// 🎯 Lines with 🎯 are YOUR MISSIONS — complete them!
//
// TIP: Use Claude to help you complete each mission!
//      Just describe what the function should do.
//
// =============================================


// =============================================
// 📦 SECTION 1: THE DATA
// =============================================

// 📖 This is an "array" (a list) of "objects" (labeled containers).
//    Each task has three properties:
//      - id: a unique number so we can find it later
//      - title: the text that shows on screen
//      - completed: true means done, false means not done
const tasks = [
  { id: 1, title: "Read Section 1 of playground.js", completed: true },
  { id: 2, title: "Read Section 2 of playground.js", completed: false },
  { id: 3, title: "Complete Mission 1: Add Task", completed: false },
];

// 📖 This tracks which filter tab is selected: "all", "active", or "completed"
let currentFilter = "all";

// 📖 Every new task needs a unique id. We start at 4 (since we already have 1, 2, 3)
let nextId = 4;


// =============================================
// 🎨 SECTION 2: THE DISPLAY
// =============================================

// 📖 This is the MOST IMPORTANT function in the whole file.
//    It takes the tasks array and SHOWS them on the page.
//
//    The pattern is:  DATA changes → call renderTasks() → SCREEN updates
//
//    Every time you add, delete, or toggle a task, you call this function.

function renderTasks() {

  // 📖 Step 1: FIND the <ul> element where tasks are displayed
  //    document.getElementById("task-list") says:
  //    "Hey browser, find me the element with id='task-list'"
  const taskList = document.getElementById("task-list");

  // 📖 Step 2: FILTER the tasks based on the current tab
  //    If "all" is selected, show everything
  //    If "active" is selected, show only tasks where completed === false
  //    If "completed" is selected, show only tasks where completed === true
  let filtered = tasks;
  if (currentFilter === "active") {
    filtered = tasks.filter(task => task.completed === false);
  } else if (currentFilter === "completed") {
    filtered = tasks.filter(task => task.completed === true);
  }

  // 📖 Step 3: BUILD the HTML for each task
  //    .map() transforms each task object into an HTML string
  //    The browser then renders these strings as visible elements
  taskList.innerHTML = filtered.map(task => `
    <li class="task-item ${task.completed ? "completed" : ""}" data-id="${task.id}">
      <input
        type="checkbox"
        ${task.completed ? "checked" : ""}
        onchange="toggleTask(${task.id})"
      >
      <span class="task-title">${task.title}</span>
      <button class="delete-btn" onclick="deleteTask(${task.id})">×</button>
    </li>
  `).join("");

  // 📖 Step 4: UPDATE the "X items left" counter
  const activeCount = tasks.filter(t => !t.completed).length;
  document.getElementById("items-left").textContent =
    `${activeCount} item${activeCount !== 1 ? "s" : ""} left`;

  // 📖 Step 5: HIGHLIGHT the active filter tab
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === currentFilter);
  });

  // (This updates the mission panel — don't worry about this line)
  if (typeof updateMissionStatus === "function") updateMissionStatus();
}


// =============================================
// ⚡ SECTION 3: THE ACTIONS
// =============================================
// These functions run when the user clicks something.
// YOUR JOB: Complete each mission below!


// ─────────────────────────────────────────────
// 🎯 MISSION 1: ADD A NEW TASK
// ─────────────────────────────────────────────
// When the user types a name and clicks "Add", this should:
//   1. Get the text from the input box
//   2. If the text is empty, stop (do nothing)
//   3. Create a new task object and add it to the tasks array
//   4. Clear the input box
//   5. Call renderTasks() to refresh the screen
//
// 💬 Ask Claude:
//    "Write the addTask function. It should get text from the
//     input with id 'task-input'. If empty, return. Otherwise
//     push a new object { id: nextId++, title: text, completed: false }
//     to the tasks array, clear the input, and call renderTasks()."

function addTask() {
  // 🎯 YOUR CODE HERE
  // Step 1: Find the input box and get its text

}


// ─────────────────────────────────────────────
// 🎯 MISSION 2: TOGGLE A TASK (done / not done)
// ─────────────────────────────────────────────
// When the user clicks a checkbox, this receives the task's id and should:
//   1. Find the task in the array that has this id
//   2. Flip its completed status (true → false, or false → true)
//   3. Call renderTasks() to refresh the screen
//
// 💬 Ask Claude:
//    "Write a toggleTask(id) function. It should find the task
//     in the tasks array where task.id === id, flip task.completed
//     with !task.completed, then call renderTasks()."

function toggleTask(id) {
  // 🎯 YOUR CODE HERE
}


// ─────────────────────────────────────────────
// 🎯 MISSION 3: DELETE A TASK
// ─────────────────────────────────────────────
// When the user clicks ×, this receives the task's id and should:
//   1. Find the position (index) of the task with this id
//   2. Remove it from the array
//   3. Call renderTasks() to refresh the screen
//
// 💬 Ask Claude:
//    "Write a deleteTask(id) function. It should find the index
//     of the task with that id using findIndex, remove it with
//     splice, then call renderTasks()."

function deleteTask(id) {
  // 🎯 YOUR CODE HERE
// Find the position (index) of this task
}


// ─────────────────────────────────────────────
// 🎯 MISSION 4: FILTER TASKS
// ─────────────────────────────────────────────
// When the user clicks a filter tab, this receives the filter name and should:
//   1. Set the currentFilter variable to the new filter
//   2. Call renderTasks() to refresh the screen
//
// 💬 Ask Claude:
//    "Write a setFilter(filter) function. It should set
//     currentFilter = filter, then call renderTasks()."

function setFilter(filter) {
  // 🎯 YOUR CODE HERE
}


// =============================================
// 🚀 START THE APP
// =============================================

// 📖 When the page loads, show the initial tasks
renderTasks();

// 📖 Also listen for the Enter key in the input box
//    so users can press Enter instead of clicking "Add"
document.getElementById("task-input").addEventListener("keypress", function(e) {
  if (e.key === "Enter") addTask();
});
