function addTask() {
      let taskInput = document.getElementById("taskInput");
      let taskText = taskInput.value.trim();

      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }

      let li = document.createElement("li");
      li.innerHTML = `${taskText} <span onclick="removeTask(this)">✖</span>`;
      
      document.getElementById("taskList").appendChild(li);
      taskInput.value = "";
    }

    function removeTask(element) {
      element.parentElement.remove();
    }