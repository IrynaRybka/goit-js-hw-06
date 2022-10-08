// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

// 1. Взять ссылку на инпут
// 2. Повесить слушателей событий input, blur
// 3. Написать ф-ю которая считает кол-во введенных символов и проверяет 
// 4. Написать функцю которая 

const inputRef = document.querySelector("#validation-input");
// console.log(inputRef.value.length);
console.log(Number(inputRef.dataset.length));


// inputRef.addEventListener("focus", inputRefOnFocus);
inputRef.addEventListener("blur", inputRefOnBlur);
// inputRef.addEventListener("input", inputRefTextOn)

function inputRefOnBlur (event) {
    console.log(event.target.value.length);
    // let inputLength = inputRef.value.length;
    // if (inputLength === event.target.value.length) {
        // if (Number(inputRef.dataset.length) === inputRef.addEventListener("input", (event) => {
        //     event.target.value.length;
        // })) {
        // inputRef.classList.add("valid");
        if (Number(inputRef.dataset.length) === event.target.value.length) {
            inputRef.classList.add("valid");
    } else {
        inputRef.classList.add("invalid");
    }
};
      

// function inputRefTextOn () {
//     inputRef.addEventListener("input", (event) => {
//         event.target.value.length;
//     });
// //    console.log(event.target.value.length); 
   
//  };
// function inputRefTextOn (event) {
//        event.target.value.length; 
//        inputRef.maxlength = "6";
//        if(event.target.value.length === inputRef.maxlength) {
//         inputRef.blur() ||  inputRef.classList.add("valid");
//        }
//        else {
//         inputRef.blur() ||  inputRef.classList.add("invalid");
//        }
//      };






   

    
   






