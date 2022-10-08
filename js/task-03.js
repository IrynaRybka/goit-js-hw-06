// Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.

// <ul class="gallery"></ul>

// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.


const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];




const createLiImgMarkup = image => {
  console.log(image);
  const {url, alt} = image;
  const elem = 
`<li class="js-item">
  <img class="js-picture" src="${url}" alt="${alt}">
</li>`;
return elem;
}

// console.log(images);
// console.log(createLiImgMarkup(images[0]));
const ulRef = document.querySelector(".gallery");
const createLiImg = images
.map(createLiImgMarkup)
.join("");

ulRef.insertAdjacentHTML("beforeend", createLiImg);
console.log(createLiImg);




// const ulContainerLiEl = document.querySelector(".gallery");


// const createLiElGallery = keys => {
//   return keys.map(key => {
    
//     const imgEl = document.createElement("img");
//     imgEl.src = key.url;
//     imgEl.alt = key.alt;
//     imgEl.classList.add("js-picture");
   
//     const createLiEl = document.createElement("li");
//     createLiEl.classList.add("js-item");
//     createLiEl.append(imgEl);

//       return createLiEl;

//   })
// }

// const elements = createLiElGallery(images);

// ulContainerLiEl.append(...elements);






// const elements = images.map (key => {
// const imgEl = document.createElement("img");
// imgEl.src = key.url;
// imgEl.alt = key.alt;
// imgEl.classList.add("js-picture");
// imgEl.style.width = 100;
// imgEl.style.borderRadius = 3;
// const createLiEl = document.createElement("li");
// createLiEl.append(imgEl);



// return createLiEl;
// })

// ulContainerLiEl.append(...elements);









// const ulRef = document.querySelector(".gallery");



// const createLiElCat = document.createElement("li");

// const createImgElCat = document.createElement("img");
// const imgElCat = images[0];
// const imgKeyCat = Object.keys(imgElCat);
// const imgValueCat = Object.values(imgElCat);
// createImgElCat.setAttribute(imgKeyCat[0], imgValueCat[0]);
// createImgElCat.setAttribute(imgKeyCat[1], imgValueCat[1]);

// createLiElCat.appendChild(createImgElCat);




// const createLiElFish = document.createElement("li");

// const createImgElFish = document.createElement("img");
// const imgElFish = images[1];
// const imgKeyFish = Object.keys(imgElFish);
// const imgValueFish = Object.values(imgElFish);
// createImgElFish.setAttribute(imgKeyFish[0], imgValueFish[0]);
// createImgElFish.setAttribute(imgKeyFish[1], imgValueFish[1]);

// createLiElFish.appendChild(createImgElFish);





// const createLiElHorse = document.createElement("li");

// const createImgElHorse = document.createElement("img");
// const imgElHorse = images[2];
// const imgKeyHorse = Object.keys(imgElHorse);
// const imgValueHorse = Object.values(imgElHorse);
// createImgElHorse.setAttribute(imgKeyHorse[0], imgValueHorse[0]);
// createImgElHorse.setAttribute(imgKeyHorse[1], imgValueHorse[1]);
// createImgElHorse.style.width = 200;

// createLiElHorse.appendChild(createImgElHorse);




// ulRef.append(createLiElCat, createLiElFish, createLiElHorse);
// console.log(ulRef);
