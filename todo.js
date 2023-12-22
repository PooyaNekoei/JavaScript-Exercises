// to do list

let toDoArray = [
  { id: 1, title: "learn js", isDoing: "true" },
  { id: 2, title: "learn tailwind", isDoing: "false" },
  { id: 3, title: "learn bootstrap", isDoing: "false" }
];

let userMenu = prompt("choose one of them: \n 1:add \n 2:remove \n 3:do");

switch (userMenu) {
  case "1":
  case "add":
    let newToDoName = prompt("چی اضافه کنم اسمشو بگو");
    if (newToDoName) {
      if (isNaN(newToDoName)) {
        let newToDoObject = {
          id: toDoArray.length + 1,
          title: newToDoName,
          isDoing: false
        };
        toDoArray.push(newToDoObject);
      } else {
        alert("عدد وارد نکن");
      }
    } else {
      alert("چیزی وارد نکردی");
    }
    break;
  case "2":
  case "remove":
    let removeToDo = prompt("چی حذف کنم اسمشو بگو");
    if (removeToDo) {
      if (isNaN(removeToDo)) {
        let toDoIndex = toDoArray.findIndex(function(todo) {
          return todo.title === removeToDo;
        });
        if (toDoIndex === -1) {
          alert("چنین اسمی داخل لیست نداریم");
        } else {
          toDoArray.splice(toDoIndex, 1);
        }
      } else {
        alert("عدد وارد نکن");
      }
    } else {
      alert("چیزی وارد نکردی");
    }
    break;
  case "3":
  case "do":
    let editToDoName = prompt("کدوم کار انجام شده اسمشو بگو");
    if (editToDoName) {
      if (isNaN(editToDoName)) {
        toDoArray.forEach(function(todo) {
          if (todo.title === editToDoName) {
            todo.isDoing = true;
          } 
          // اگه اشتباه وارد کرد چی میشه
        });
      } else {
        alert("عدد وارد نکن");
      }
    } else {
      alert("چیزی وارد نکردی");
    }
    break;
  case "":
    alert("چیزی وارد نکردی که");
    break;
  default:
    alert("چنین عملیاتی نداریم");
    break;
}

console.log(toDoArray);

//  ما یه شرطی رو همجا چک میکنیم اینو چطوری تبدیل به تابع کنیم ک هربار صداش بزنمی که حجم کد بیاد پایین
