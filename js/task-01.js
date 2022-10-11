// В HTML есть список категорий ul#categories.

// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const itemRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemRef.length}`);
console.log(itemRef);

const h2Ref = document.querySelectorAll("li > h2");
const ulInLIRef = document.querySelectorAll(".item ul")
console.log(ulInLIRef);

h2Ref.forEach((elem) => {
      console.log(`Category: ${elem.textContent}`);
});

ulInLIRef.forEach((elem) => {
      console.log(`Elements: ${elem.children.length}`);
});



// const h2AnimalsRef = document.querySelectorAll("h2")[0];
// console.log(`Category: ${h2AnimalsRef.textContent}`);

// const ulAnimalsRef = document.querySelectorAll(".item ul")[0];
// // console.log(ulAnimalsRef);

// const liAnimalsRef = ulAnimalsRef.querySelectorAll("li");
// console.log(`Elements: ${liAnimalsRef.length}`);



// const h2ProductsRef = document.querySelectorAll("h2")[1];
// console.log(`Category: ${h2ProductsRef.textContent}`);

// const ulProductsRef = document.querySelectorAll(".item ul")[1];
// // console.log(ulProductsRef);

// const liProductsRef = ulProductsRef.querySelectorAll("li");
// console.log(`Elements: ${liProductsRef.length}`);



// const h2TechnologiesRef = document.querySelectorAll("h2")[2];
// console.log(`Category: ${h2TechnologiesRef.textContent}`);

// const ulTechnologiesRef = document.querySelectorAll(".item ul")[2];
// // console.log(ulTechnologiesRef);

// const liTechnologiesRef = ulTechnologiesRef.querySelectorAll("li");
// console.log(`Elements: ${liTechnologiesRef.length}`);



