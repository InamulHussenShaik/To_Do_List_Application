// script.js

const inputbox = document.getElementById('input-box');
const listcontainer = document.getElementById('List-Container');

function addtask() {
    if (inputbox.value === '') {
        alert("You Must Write Something");
    } else {
        let li = document.createElement("li");
        li.textContent = inputbox.value;
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        // Clear the input box after adding a task
        inputbox.value = '';
        savedata();
    }
}

listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata()
{
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showTask()
{
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();

