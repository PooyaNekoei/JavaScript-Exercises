let titleElem = document.querySelector("h1");

let btn = document.querySelector("button");

let bulbFlag = false;

function myClick() {
  if (bulbFlag) {
    btn.innerHTML = "turn on";
    titleElem.innerHTML = "خاموش";
    bulbFlag = false;
  } else {
    btn.innerHTML = "turn off";
    titleElem.innerHTML = "روشن";
    bulbFlag = true;
  }
}
// ---------------------------------------------------------
let inputElem = document.querySelector(".input");
let inputValue = inputElem.value;

function keyLog() {
  // console.log(inputValue);
  console.log("typed");
}

// --------------------------------

// titleElem.addEventListener("click",clicked)

// function clicked(){
//   console.log("clicked");
// }

titleElem.addEventListener("click", function() {
  console.log("clicked");
});

// -------------------------------------------------

titleElem.addEventListener("click", function() {
  // titleElem.classList.add("color")
  // titleElem.classList.remove("fs-h1")
  titleElem.classList.toggle("fs-h1");
  titleElem.classList.toggle("color");
});
// -------------------------------------------------
let selectElem=document.querySelector("#selected");

selectElem.addEventListener("change",function(){
  console.log(selectElem.value);
})
