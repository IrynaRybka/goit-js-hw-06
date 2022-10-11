// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>

// В JavaScript есть массив строк.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector("#ingredients");


const createLiElement = ingredients.map(ingredient => {
    const elem = document.createElement('li');
    elem.textContent = ingredient;
    elem.classList.add("item");
    return elem;
  });
  ulRef.prepend(...createLiElement);

    




// const liPotatoes = document.createElement("li");
// console.log(liPotatoes);
// liPotatoes.textContent = ingredients[0];
// liPotatoes.classList.add("item");

// const liMushroom = document.createElement("li");
// console.log(liMushroom);
// liMushroom.textContent = ingredients[1];
// liMushroom.classList.add("item");

// const liGarlic = document.createElement("li");
// console.log(liGarlic);
// liGarlic.textContent = ingredients[2];
// liGarlic.classList.add("item");

// const liTomato = document.createElement("li");
// console.log(liTomato);
// liTomato.textContent = ingredients[3];
// liTomato.classList.add("item");

// const liHerbs = document.createElement("li");
// console.log(liHerbs);
// liHerbs.textContent = ingredients[4];
// liHerbs.classList.add("item");

// const liCondiments = document.createElement("li");
// console.log(liCondiments);
// liCondiments.textContent = ingredients[5];
// liCondiments.classList.add("item");

// const ulRef = document.querySelector("#ingredients");
// ulRef.prepend(liPotatoes, liMushroom, liGarlic, liTomato, liHerbs, liCondiments);