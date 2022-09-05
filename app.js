var btnTranslate = document.querySelector("#btn-translate");
// console.log(btnTranslate)
var textInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

// outputDiv.innerText = "Bijaylaxmi Behera"
// console.log(outputDiv)
var serverURL = "https://api.funtranslations.com/translate/numbers.json";

function getTranslationURL(text) {
   return serverURL + "?" + "text=" + text;
}

function eventHandler() {
   //taking input
   var inputText = textInput.value
   //call server for processing
   fetch(getTranslationURL(inputText))
      .then(response => response.json())
      .then(json => {
         var translatedText = json.contents.translated;
         outputDiv.innerText = translatedText; // output
        })
}
btnTranslate.addEventListener("click", eventHandler)