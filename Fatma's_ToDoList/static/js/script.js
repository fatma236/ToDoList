        let tasks = [];
        let currentFilter = 'all';

        let taskInput = document.getElementById('taskInput');
        let addBtn = document.getElementById('addBtn');
        let taskList = document.getElementById('taskList');
        let filterBtns = document.querySelectorAll('.filter-btn');
        let totalTasksEl = document.getElementById('totalTasks');
        let completedTasksEl = document.getElementById('completedTasks');

        // Add task
        function addTask() {
            let taskText = taskInput.value.trim();
            if (taskText === '') {
                alert('Please enter a task!');
                return;
            }

            let task = {
                id: Date.now(),
                text: taskText,
                completed: false
            };

            tasks.push(task);
            taskInput.value = '';
            renderTasks();
            updateStats();
        }

        // Delete task
        function deleteTask(id) {
            tasks = tasks.filter(task => task.id !== id);
            renderTasks();
            updateStats();
        }

        // Toggle task completion
        function toggleTask(id) {
            let task = tasks.find(task => task.id === id);
            if (task) {
                task.completed = !task.completed;
                renderTasks();
                updateStats();
            }
        }

        // Filter tasks
        function filterTasks() {
            if (currentFilter === 'all') {
                return tasks;
            } else if (currentFilter === 'active') {
                return tasks.filter(task => !task.completed);
            } else if (currentFilter === 'completed') {
                return tasks.filter(task => task.completed);
            }
        }

        // Render tasks
        function renderTasks() {
            let filteredTasks = filterTasks();
            taskList.innerHTML = '';

            if (filteredTasks.length === 0) {
                taskList.innerHTML = '<div class="empty-message">No tasks to show</div>';
                return;
            }

            filteredTasks.forEach(task => {
                let li = document.createElement('li');
                li.className = `task-item ${task.completed ? 'completed' : ''}`;
                li.innerHTML = `
                    <div class="task-content">
                        <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${task.id})">
                        <span class="task-text">${task.text}</span>
                    </div>
                    <div class="task-actions">
                        <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
                    </div>
                `;
                taskList.appendChild(li);
            });
        }

        // Update statistics
        function updateStats() {
            let total = tasks.length;
            let completed = tasks.filter(task => task.completed).length;
            totalTasksEl.textContent = `${total} task${total !== 1 ? 's' : ''}`;
            completedTasksEl.textContent = `${completed} completed`;
        }

        // Event listeners
        addBtn.addEventListener('click', addTask);
        taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addTask();
            }
        });

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilter = btn.dataset.filter;
                renderTasks();
            });
        });

        // Initial render
        renderTasks();
        updateStats();