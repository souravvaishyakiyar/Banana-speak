var btntranslate=document.querySelector("#btn-translate");
var textinput=document.querySelector("#txt-input");
//console.log(textinput);
var output=document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/minion.json"
	
function gettranslationURL(text){
   return serverURL + "?" + "text=" + text
}

function errorhandler(error){
   console.log("error occured",error)
   alert("something wrong with server")
}

function clickhandler(){

 var inputtext = textinput.value;

 fetch(gettranslationURL(inputtext))
   .then(response=>response.json())
   .then(json=>{
      var translatedtext=json.contents.translated;
      output.innerText=translatedtext;
   })
   .catch(errorhandler)
   
};


 btntranslate.addEventListener("click",clickhandler);