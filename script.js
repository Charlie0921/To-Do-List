const formElement = document.getElementById("myForm")

function openForm() {
  formElement.style.display = "flex";
}

function closeForm() {
  formElement.style.display = "none";
}


var task_id = 0;
const task_form = formElement.querySelector("#task_form")
let inputNameWrapper = task_form.querySelector("#name_wrap #task_name")
let inputDateWrapper = task_form.querySelector("#date_wrap #task_date")

function newElement() {
  console.log("________________________________________")

  //Create new element in the list
  const todoList = document.querySelector('.List');
  const newLi = document.createElement('li')
  const newdiv = document.createElement('div')

  //Set new id for each task
  task_id = task_id + 1;
  newLi.className = "Task"
  newLi.id = "Task" + task_id;
  newdiv.className = "Task-Elements"

  //Finish Button
  const finishDiv = document.createElement('div')
  finishDiv.className = "Finish"
  finishDiv.addEventListener('click', function() {
    finishDiv.style.backgroundColor = "#6b6666"
  });

  //Set name for each task

  //Edit Button

  //Remove Button
  const removeDiv = document.createElement('img')
  removeDiv.className = "remove"
  removeDiv.src = "../img/remove.svg"

  removeDiv.addEventListener('click', function() {
    newLi.parentNode.removeChild(newLi);
  });

  //Add Multiple elements
  newdiv.appendChild(Name())
  newdiv.appendChild(Category())
  newdiv.appendChild(nameDiv)
  newdiv.appendChild(DueDate())
  newdiv.appendChild(Edit(task_id))
  newdiv.appendChild(removeDiv)

  newLi.appendChild(newdiv);

  todoList.appendChild(newLi);
  console.log(newLi.length)
}

function Name() {
  const nameDiv = document.createElement('div')
  nameDiv.className = "Name"
  nameDiv.textContent = inputNameWrapper.value
  return nameDiv
}

function Category() {
  let inputCategoryWrapper = task_form.querySelector('#Category [name="task_category"]:checked')

  const categoryDiv = document.createElement('div')
  categoryDiv.className = "Category"

  if (inputCategoryWrapper.value === "Red") {
    categoryDiv.style.backgroundColor = "#D82525";
  } else if (inputCategoryWrapper.value === "Orange") {
    categoryDiv.style.backgroundColor = "#E37D04";
  } else if (inputCategoryWrapper.value === "Yellow") {
    categoryDiv.style.backgroundColor = "#EDB900";
  } else if (inputCategoryWrapper.value === "Green") {
    categoryDiv.style.backgroundColor = "#518918";
  } else {
    categoryDiv.style.backgroundColor = "#0044F4";
  }

  console.log("hello" + inputCategoryWrapper.value)

  return categoryDiv
}

function DueDate() {
  const dueDiv = document.createElement('div')
  dueDiv.className = "Due"
  const todayDate = new Date();
  const dueDate = new Date(inputDateWrapper.value);

  diff = dueDate - todayDate
  console.log(diff)

  const diffDate = Math.floor(diff / (1000 * 60 * 60 * 24));
  console.log("diffDate: ", diffDate)
  if (diffDate < 0) {
    dueDiv.textContent = "D+" + Math.abs(diffDate)
  } else {
    dueDiv.textContent = "D-" + Math.abs(diffDate)
  }
  return dueDiv
}

const editCreate = document.getElementsByClassName("Create-Button")

function Edit(Number) {
  const editDiv = document.createElement('img')
  editDiv.className = "edit"
  editDiv.src = "../img/edit.svg"
  editDiv.addEventListener('click', function() {
    openForm();
    console.log(Number)

    var nameID = ".List #Task" + Number + " .Task-Elements .Name"
    let ExtractedName = document.querySelector(nameID).innerText
    inputNameWrapper.value = ExtractedName;
    console.log(ExtractedName)
  });

  //Name of the task can be inserted automatically
  //No idea how to share a single form element for multiple use

  return editDiv
}