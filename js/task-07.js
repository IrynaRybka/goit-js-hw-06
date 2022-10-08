// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

/* <body>
<p><a href="index.html">Go back</a></p>

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>

<script src="js/task-07.js" type="module"></script>
</body> */
const inputFonRef = document.querySelector("#font-size-control");
const spanTextRef = document.querySelector("#text");
console.log(inputFonRef);
console.log(spanTextRef);

inputFonRef.addEventListener("input", onChangeFontSize);

function onChangeFontSize(event) {
    console.log(event.target.value);
    
    if() {

    }
    
    
}