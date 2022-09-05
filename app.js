var btnTranslate = document.querySelector("#btn-translate");
// console.log(btnTranslate)
var textInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

// outputDiv.innerText = "Bijaylaxmi Behera"
// console.log(outputDiv)

function eventHandler() {
   console.log("clicked!");
   console.log("input", textInput.value);
   outputDiv.innerText = "abnac " + textInput.value;
}
btnTranslate.addEventListener("click", eventHandler)