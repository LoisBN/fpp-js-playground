# JavaScript Task Tracker — JS Fundamentals

Build a task tracker to practice JavaScript variables, arrays, functions, and DOM manipulation.

## What You'll Learn

- Variables and data types
- Arrays and objects
- Functions and event handling
- DOM manipulation (creating and updating HTML from JS)
- Array methods: `.push()`, `.filter()`, `.map()`

## Tech Stack

- **HTML** — page structure
- **CSS** — styling
- **JavaScript** — interactivity and logic

## Getting Started

```bash
# 1. Clone this repo
git clone https://github.com/LoisBN/fpp-js-playground.git
cd fpp-js-playground

# 2. Open in your browser
# Option A: Right-click index.html → Open With → your browser
# Option B: Use the Live Server extension in VS Code (click "Go Live")
```

No `npm install` needed — this is a pure HTML/JS project!

## Project Structure

```
fpp-js-playground/
├── index.html       ← Page layout with input and task list area
└── playground.js    ← Your JavaScript code (edit this!)
```

## Your Exercise Tasks

See the exercise instructions on the course platform. The short version:

1. Open the project and explore the starter code
2. Create a tasks array and a function to render tasks
3. Add new tasks from the input field
4. Toggle task completion on click
5. Add filter buttons (All / Active / Completed)

## Hints

- Open DevTools (F12) → Console tab to see `console.log` output
- Store tasks as objects: `{ id: 1, text: "Learn JS", completed: false }`
- Toggle a boolean: `task.completed = !task.completed`
- Use `.filter()` to show only active or completed tasks
- After any data change, call your render function to update the page

---

Built for [AI Code Academy](https://aicode-academy.com) — From Prompt to Production course.
