// ============================================
// JS Playground - JavaScript Fundamentals
// ============================================
// Practice variables, functions, arrays, and objects
// by building a mini task tracker.

// ============================================
// 1. VARIABLES AND DATA
// ============================================

// TODO: Declare a variable for the user name (string)
const userName = "Student";

// TODO: Declare a variable for the total tasks (number)
const totalTasks = 0;

// TODO: Declare a variable for tracking if tasks are synced (boolean)
let isTasksSynced = true;

// Sample tasks array - each task is an object with properties
const tasks = [
    {
        id: 1,
        title: "Learn JavaScript variables",
        completed: false,
        priority: "high"
    },
    {
        id: 2,
        title: "Practice array methods",
        completed: true,
        priority: "high"
    },
    {
        id: 3,
        title: "Build a task tracker",
        completed: false,
        priority: "medium"
    }
];

// ============================================
// 2. FUNCTIONS
// ============================================

// TODO: Complete the formatTask function
// It should return a string formatted like: "[ ] Task title (priority)"
// If the task is completed, the checkbox should be "[x]" instead
function formatTask(task) {
    const checkbox = task.completed ? "[x]" : "[ ]";
    // TODO: Build and return the formatted string
    return `${checkbox} ${task.title} (${task.priority})`;
}

// TODO: Complete the getCompletedTasks function
// It should return an array of only completed tasks
function getCompletedTasks(tasks) {
    // TODO: Use the .filter() method to return only completed tasks
    return tasks.filter(task => task.completed);
}

// TODO: Complete the addTask function
// It should add a new task to the tasks array and return the updated array
function addTask(tasks, title, priority = "medium") {
    const newTask = {
        id: tasks.length + 1,
        title: title,
        completed: false,
        priority: priority
    };
    // TODO: Add the new task to the array and return it
    tasks.push(newTask);
    return tasks;
}

// TODO: Complete the getTasksCountByPriority function
// It should return an object with counts of tasks by priority
// Example: { high: 2, medium: 1, low: 0 }
function getTasksCountByPriority(tasks) {
    // TODO: Use .reduce() to count tasks by priority
    return tasks.reduce((counts, task) => {
        counts[task.priority] = (counts[task.priority] || 0) + 1;
        return counts;
    }, {});
}

// ============================================
// 3. ARRAY METHODS PRACTICE
// ============================================

// TODO: Use .forEach() to print each task in a formatted way
console.log("--- All Tasks ---");
tasks.forEach(task => {
    console.log(formatTask(task));
});

// TODO: Use .map() to get an array of just the task titles
const taskTitles = tasks.map(task => task.title);
console.log("\n--- Task Titles ---");
console.log(taskTitles);

// TODO: Use .filter() to get only high-priority tasks
const highPriorityTasks = tasks.filter(task => task.priority === "high");
console.log("\n--- High Priority Tasks ---");
highPriorityTasks.forEach(task => {
    console.log(formatTask(task));
});

// ============================================
// 4. OBJECT METHODS PRACTICE
// ============================================

// TODO: Get the keys of the first task object
const taskKeys = Object.keys(tasks[0]);
console.log("\n--- First Task Keys ---");
console.log(taskKeys);

// TODO: Get the values of the first task object
const taskValues = Object.values(tasks[0]);
console.log("\n--- First Task Values ---");
console.log(taskValues);

// ============================================
// 5. TEST YOUR FUNCTIONS
// ============================================

// Test addTask
console.log("\n--- Adding a New Task ---");
addTask(tasks, "Complete the JS playground", "high");
console.log(`Total tasks: ${tasks.length}`);

// Test getCompletedTasks
console.log("\n--- Completed Tasks ---");
const completedTasks = getCompletedTasks(tasks);
console.log(`Completed: ${completedTasks.length} of ${tasks.length}`);

// Test getTasksCountByPriority
console.log("\n--- Tasks by Priority ---");
console.log(getTasksCountByPriority(tasks));