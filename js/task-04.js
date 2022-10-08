// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

    

    

const value = document.querySelector("#value");
console.log(value); // value

const decrementBtn = document.querySelector("button[data-action=decrement]");
console.log(decrementBtn); // first btn

const incrementBtn = document.querySelector("button[data-action=increment]");
console.log(incrementBtn);



let counterValue = 0;


incrementBtn.addEventListener('click', () => {
    counterValue ++;
    return value.textContent = counterValue;

    // value.textContent = counterValue;
    // return counterValue += 1;
})

decrementBtn.addEventListener('click', () => {
    counterValue --;
    return value.textContent = counterValue;


    // value.textContent = counterValue;
    // return counterValue -= 1;
})






