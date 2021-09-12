var inputMessage = document.querySelector("#input-msg")
var outMessage = document.querySelector("#output-msg")
var buttonTranslate = document.querySelector("#btn-translate")

var serverURL = "https://api.funtranslations.com/translate/navi.json?text="

function translatedUrl(text){
    return serverURL + text
}

function translateLanguage(){

   var inpText = inputMessage.value
   fetch(translatedUrl(inpText))
   .then(response => response.json())
   .then(json => {
       var translatedText = json.contents.translated
       console.log(translatedText, json)
    outMessage.innerHTML = translatedText
   })
   .catch(error => {
       alert("Some error occured to the server")
    //    console.log(error)
   })

}

buttonTranslate.addEventListener("click",translateLanguage)