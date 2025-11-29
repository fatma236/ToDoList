📝 Fatma's To-Do List
A beautiful and functional to-do list application built with HTML, CSS, and JavaScript.
📌 Description
Fatma's List is a simple yet elegant task management application that helps you stay organized and productive. Track your daily tasks, mark them as complete, and filter them based on their status.
✨ Features

Add Tasks: Quickly add new tasks to your list
Complete Tasks: Mark tasks as done with a simple checkbox
Delete Tasks: Remove tasks you no longer need
Filter Tasks: View all tasks, only active tasks, or completed tasks
Live Statistics: See total tasks and completed tasks count
Smooth Animations: Enjoy a pleasant user experience with animations
Responsive Design: Works on desktop and mobile devices

🚀 How to Use

Adding a Task

Type your task in the input field
Click the "Add" button or press Enter
Your task will appear in the list below


Completing a Task

Click the checkbox next to any task to mark it as complete
Completed tasks will have a strikethrough style
Click again to mark as incomplete


Deleting a Task

Click the "Delete" button next to any task to remove it permanently


Filtering Tasks

Click "All" to see all tasks
Click "Active" to see only incomplete tasks
Click "Completed" to see only finished tasks



💻 Technologies Used

HTML5: Structure and content
CSS3: Styling and animations
JavaScript: Interactive functionality and DOM manipulation

📂 File Structure
fatmas-todo-list/
│
├── index.html          # Main HTML file with embedded CSS and JavaScript
└── README.md          # Project documentation
🎨 Design Features

Purple gradient background
Clean white card interface
Smooth hover effects
Slide-in animations for new tasks
Responsive layout

🔧 JavaScript Features

-Uses let for variable declarations
-Event listeners for user interactions
-Array methods (filter, find, forEach)
-Dynamic DOM manipulation
-Task filtering system
-Real-time statistics updates

📝 Code Highlights
-Variables
-All variables are declared using let for flexibility:
-javascriptlet tasks = [];
-let currentFilter = 'all';
-let taskInput = document.getElementById('taskInput');
-Key Functions

-addTask(): Adds a new task to the list
-deleteTask(id): Removes a task by ID
-toggleTask(id): Marks a task as complete/incomplete
-filterTasks(): Filters tasks based on current filter
-renderTasks(): Updates the UI with current tasks
-updateStats(): Updates task statistics

🌟 Future Enhancements
Possible features to add:

Local storage to save tasks
Edit task functionality
Task priorities
Due dates
Task categories
Dark mode toggle
Search functionality

👤 Author
Created by Fatma
📄 License
This project is free to use and modify.

Stay organized, stay productive! ✨
