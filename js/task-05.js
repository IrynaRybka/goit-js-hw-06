// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const inputRef = document.querySelector("#name-input");


const textRef = document.querySelector("#name-output");
inputRef.placeholder = textRef.textContent;
 
inputRef.addEventListener("input",onInputText);

function onInputText () {
  if (inputRef.value) {
  textRef.textContent = inputRef.value;
  }
  else {
    textRef.textContent = "Anonymous";
  }
};



