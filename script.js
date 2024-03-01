function openForm() {
  document.getElementById("myForm").style.display = "flex";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

var task_id = 0;

function newElement() {
  console.log("________________________________________")
  const myForm = document.querySelector("#myForm")
  const task_form = myForm.querySelector("#task_form")
  let inputName = task_form.querySelector("#name_wrap #task_name").value;
  console.log(inputName)
  let inputDate = task_form.querySelector("#date_wrap #task_date").value
  console.log(inputDate)
  let inputCategory = task_form.querySelector('#Category [name="task_category"]:checked').value
  console.log(inputCategory)


  //Create new elements
  const todoList = document.querySelector('.List');
  const newLi = document.createElement('li')
  const newdiv = document.createElement('div')
  task_id = task_id + 1;
  newLi.className = "Task"
  newLi.id = "Task" + task_id;
  newdiv.className = "Task-Elements"

  //Check
  const selectDiv = document.createElement('div')
  selectDiv.className = "Select"
  selectDiv.addEventListener('click', function(e) {
    selectDiv.style.backgroundColor = "#6b6666"
  });

  //Choose category color
  const categoryDiv = document.createElement('div')
  categoryDiv.className = "Category"


  if (inputCategory === "Red") {
    categoryDiv.style.backgroundColor = "#D82525";
  } else if (inputCategory === "Orange") {
    categoryDiv.style.backgroundColor = "#E37D04";
  } else if (inputCategory === "Yellow") {
    categoryDiv.style.backgroundColor = "#EDB900";
  } else if (inputCategory === "Green") {
    categoryDiv.style.backgroundColor = "#518918";
  } else {
    categoryDiv.style.backgroundColor = "#0044F4";
  }

  const nameDiv = document.createElement('div')
  nameDiv.className = "Name"
  nameDiv.textContent = inputName

  //Calculates D-Day
  const dueDiv = document.createElement('div')
  dueDiv.className = "Due"
  const todayDate = new Date();
  const dueDate = new Date(inputDate);

  diff = dueDate - todayDate
  console.log(diff)

  const diffDate = Math.floor(diff / (1000 * 60 * 60 * 24));
  console.log("diffDate: ", diffDate)
  if (diffDate < 0) {
    dueDiv.textContent = "D+" + Math.abs(diffDate)
  } else {
    dueDiv.textContent = "D-" + Math.abs(diffDate)
  }

  //Edit Button
  const editDiv = document.createElement('img')
  editDiv.className = "edit"
  editDiv.src = "../img/edit.svg"
  editDiv.addEventListener('click', function() {
    openForm();

    //after opening editing page
    let list = document.querySelector(".List")
    let task = document.querySelector("#Task" + task_id)
    let name = task.querySelector(".Name").value
    let date = task.querySelector(".Due").value

    //

  });


  //Remove Button
  const removeDiv = document.createElement('img')
  removeDiv.className = "remove"
  removeDiv.src = "../img/remove.svg"

  removeDiv.addEventListener('click', function() {
    newLi.parentNode.removeChild(newLi);
  });

  newdiv.appendChild(selectDiv)
  newdiv.appendChild(categoryDiv)
  newdiv.appendChild(nameDiv)
  newdiv.appendChild(dueDiv)
  newdiv.appendChild(editDiv)
  newdiv.appendChild(removeDiv)

  newLi.appendChild(newdiv);

  todoList.appendChild(newLi);
  console.log(newLi.length)
}