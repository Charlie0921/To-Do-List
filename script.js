const formElement = document.getElementById("myForm")
const editCreate = document.getElementById("Form-Button")

//
function openForm() {
  formElement.style.display = "flex";
}

function closeForm() {
  formElement.style.display = "none";
  editCreate.textContent = "Create"
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
  var newdiv = document.createElement('div')

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
    alert("finish")
  });

  //Set name for each task

  //Edit Button

  //Remove Button

  //Add Multiple elements
  newdiv.appendChild(finishDiv)
  newdiv.appendChild(Category())
  newdiv.appendChild(Name(inputNameWrapper.value))
  newdiv.appendChild(DueDate(inputDateWrapper.value))
  newdiv.appendChild(Edit(task_id))
  newdiv.appendChild(Remove(newLi))

  newLi.appendChild(newdiv);

  todoList.appendChild(newLi);
  console.log(newLi.length)
}

function Name(text) {
  const nameDiv = document.createElement('div')
  nameDiv.className = "Name"
  nameDiv.textContent = text
  return nameDiv
}

function Category() {
  let inputCategoryWrapper = task_form.querySelector('#Category [name="task_category"]:checked')

  const categoryDiv = document.createElement('div')
  categoryDiv.className = "Category"
  categoryDiv.setAttribute("value", inputCategoryWrapper.value)

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

function DueDate(number) {
  const dueDiv = document.createElement('div')
  dueDiv.className = "Due"
  console.log("input date" + number)
  dueDiv.setAttribute("value", number)
  const todayDate = new Date();
  const dueDate = new Date(number);

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



function Edit(Number) {
  const editDiv = document.createElement('img')
  editDiv.className = "edit"
  editDiv.src = "../img/edit.svg"

  editDiv.addEventListener('click', function() {
    openForm();

    console.log(Number)

    //Extract name from the original task
    var nameID = ".List #Task" + Number + " .Task-Elements .Name"
    let ExtractedName = document.querySelector(nameID)
    inputNameWrapper.value = ExtractedName.innerText;
    console.log(ExtractedName)

    //Extract date from the original task
    var divDate = ".List #Task" + Number + " .Task-Elements .Due"
    let ExtractedDate = document.querySelector(divDate)
    console.log(ExtractedDate.getAttribute("value"))
    inputDateWrapper.value = ExtractedDate.getAttribute("value")

    //Extract category from the orginal task
    var divCategory = ".List #Task" + Number + " .Task-Elements .Category"
    let ExtractedCategory = document.querySelector(divCategory)
    console.log(ExtractedCategory.getAttribute("value"))

    function edit() {
      console.log("edit" + ExtractedName)
      //change name
      ExtractedName.innerText = inputNameWrapper.value

      //change date
      let today = new Date();
      let due = new Date(inputDateWrapper.value)

      diff = due - today

      var diffDate = Math.floor(diff / (1000 * 60 * 60 * 24));
      console.log("diffDate: ", diffDate)
      if (diffDate < 0) {
        ExtractedDate.textContent = "D+" + Math.abs(diffDate)
      } else {
        ExtractedDate.textContent = "D-" + Math.abs(diffDate)
      }
      //update div value after changing the date
      ExtractedDate.setAttribute(
        "value", inputDateWrapper.value)

      //change category
      let inputCategoryWrapper = task_form.querySelector('#Category [name="task_category"]:checked')

      if (inputCategoryWrapper.value === "Red") {
        ExtractedCategory.style.backgroundColor = "#D82525";
      } else if (inputCategoryWrapper.value === "Orange") {
        ExtractedCategory.style.backgroundColor = "#E37D04";
      } else if (inputCategoryWrapper.value === "Yellow") {
        ExtractedCategory.style.backgroundColor = "#EDB900";
      } else if (inputCategoryWrapper.value === "Green") {
        ExtractedCategory.style.backgroundColor = "#518918";
      } else {
        ExtractedCategory.style.backgroundColor = "#0044F4";
      }

      ExtractedCategory.setAttribute(
        "value", inputCategoryWrapper.value)

    }

    editCreate.textContent = "Edit"
    editCreate.onclick = () => edit()
  });

  //Name of the task can be inserted automatically
  //Name can be editable
  //No idea how to share a single form element for multiple use

  return editDiv
}

function Remove(newLi) {
  const removeDiv = document.createElement('img')
  removeDiv.className = "remove"
  removeDiv.src = "../img/remove.svg"

  removeDiv.addEventListener('click', function() {
    newLi.parentNode.removeChild(newLi);
  });
  return removeDiv;
}
function save() {
  console.log("hello")
}