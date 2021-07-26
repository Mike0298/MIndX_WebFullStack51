let taskArray = [];

const addTask = () => {
  let input = document.getElementById("newTask");
  let task = input.value;
  if (task.trim() === "") {
    alert("New task cannot be empty");
  } else {
    taskArray.push(task);
    render();
  }
};

const render = () => {
  let table = document.getElementById("taskTable");
  clearTable(table);
  taskArray.map((task) => {
    let newRow = table.insertRow(-1);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    let btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete"));
    btn.setAttribute("class", "deleteBtn");

    btn.addEventListener("click", () => {
      if (confirm("Delete this task?")) deleteTask(task);
    });

    cell1.innerHTML = task;
    cell2.appendChild(btn);
  });
};

const deleteTask = (task) => {
  let index = taskArray.indexOf(task);
  taskArray.splice(index, 1);
  render();
};

const clearTable = (table) => {
  let rowsNum = table.rows.length;
  for (let i = rowsNum - 1; i > 0; i--) {
    table.deleteRow(i);
  }
};

const filter = () => {
  let input = document.getElementById("filter");
  let filter = input.value.toLowerCase();
  let table = document.getElementById("taskTable");
  let tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      let txtValue = td.innerText;
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};
