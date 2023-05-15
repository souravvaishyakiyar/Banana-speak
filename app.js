var btntranslate=document.querySelector("#btn-translate");
var textinput=document.querySelector("#txt-input");
//console.log(textinput);

function clickhandler(){

   console.log("clicked!");
   console.log("input",textinput.value);
};


 btntranslate.addEventListener("click",clickhandler);