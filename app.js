var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

function clickHandler(){
    outputDiv.innerText = "asasasgdcsud  "+ txtInput.value;
    console.log("Clicked");

};
btnTranslate.addEventListener("click",clickHandler)





