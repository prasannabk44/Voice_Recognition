//window object
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

var p = document.createElement("p");
var words=document.getElementById("words");
words.appendChild(p);
console.log(words);


recognition.addEventListener("result",e =>  //e is jst param.
{  
    console.log(e.results);
    var transcript = [...e.results]
    .map(result => result[0])
    .map(result => result.transcript)
    .join("");
   //p.innerHTML = transcript;
    if(e.results[0].isFinal)
    {
        p = document.createElement("p");
        words.appendChild(p);
        p.innerHTML = transcript;
    }
    //console.log(transcript);
 });//DOM method to listen events
    recognition.addEventListener("end", recognition.start);
    recognition.start();//starting speech recognition event.


