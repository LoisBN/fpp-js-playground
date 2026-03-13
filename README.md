# 🎮 JavaScript Playground: Task Tracker

A visual, guided exercise to learn JavaScript by building a task tracker — step by step.

## Quick Start

```bash
git clone https://github.com/LoisBN/fpp-js-playground.git
cd fpp-js-playground
```

Open `index.html` in your browser. **No npm needed — just double-click the file!**

## How It Works

The page has two sides:

- **Left**: The actual Task Tracker app you're building
- **Right**: A Mission Guide that walks you through each step

## Your Missions

| # | Mission | What you'll learn |
|---|---------|-------------------|
| 📖 | Read the Code | How JavaScript files are structured |
| 1 | Add Task | Getting input, pushing to arrays, calling functions |
| 2 | Toggle Complete | Finding items in arrays, flipping booleans |
| 3 | Delete Task | Finding indexes, removing items with splice |
| 4 | Filter Tasks | Changing a variable to control what's displayed |

## The File You'll Edit

All your work happens in **`playground.js`**. It has 3 sections:

- **📦 Section 1: The Data** — where tasks are stored (already complete)
- **🎨 Section 2: The Display** — how tasks appear on screen (already complete)
- **⚡ Section 3: The Actions** — what happens when you click (**your missions!**)

## Using Claude

For each mission, you can ask Claude to write the code for you. The Mission Guide shows exactly what to ask. But **read the code Claude writes** — the Code Spotlight explains each line so you understand what's happening.

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Nothing happens when I click Add | Check that `addTask()` has code inside it (Mission 1) |
| Page is blank | Make sure `index.html` and `playground.js` are in the same folder |
| Changes don't show | Save the file in VS Code, then refresh the browser (Ctrl+R) |

> **Windows users:** If you get a "running scripts is disabled" error, open PowerShell as Admin and run:
> `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
