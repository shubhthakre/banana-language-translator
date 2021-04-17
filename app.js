var btn = document.querySelector(".btn");
var textInput = document.querySelector(".text-input");
var output = document.querySelector(".output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL = "https://api.funtranslations.com/translate/minion.json";

//translation
function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

//error
function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with server! try again sometime");
}

//function of button event + text value
function clickHandler() {
  // output.innerText = "Translated:" + textInput.value;

  var inputText = textInput.value; //input taking

  //calling server to process
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var transaltedText = json.contents.translated;
      output.innerText = transaltedText;
    })
    .catch(errorHandler);
}
//button event
btn.addEventListener("click", clickHandler);