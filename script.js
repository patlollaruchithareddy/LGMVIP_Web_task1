const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            ${taskText}
            <input type="checkbox" id="agree" onclick="checkClickFunc()">
            <button class="deleteBtn">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
        attachDeleteListener(li);
        
    }
});

function checkClickFunc(li)
{
    var checkbox = document.getElementById('agree');
    if(checkbox.checked == true)
    {
        alert("task completed!");
    }
}

function attachDeleteListener(li) {
    const deleteBtn = li.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });
}

  
