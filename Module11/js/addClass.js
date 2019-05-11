'use strict';
// ========================= Task 01 =======================
/*
* К pen уже подключен Handlebars.
* Используй встроенные шаблоны и метод Handlebars.compile
* 
* Создай шаблон элемента списка указаного на вкладке HTML.
* Отрендери список в DOM по данным из массива products.
*/
// const products = [
//   { name: "Apples", quantity: 50 },
//   { name: "Grapes", quantity: 44 },
//   { name: "Cheese", quantity: 128 },
//   { name: "Milk", quantity: 93 }
// ];

// const priceList = document.querySelector('#price-list').innerHTML.trim();
// const productList = document.querySelector('.products');

// const template = Handlebars.compile(priceList);
// const markup = template(products);

// productList.insertAdjacentHTML('beforeend', markup);


// =================================== Task 02 =============================


/*
 * К pen уже подключен Handlebars.
 * Используй встроенные шаблоны и метод Handlebars.compile
 * 
 * Создай шаблон поста указаного на вкладке HTML.
 * Отрендери список постов в DOM по данным из массива posts.
 * 
 * Если в объекте поле favourite=true, в посте должна быть 
 * разметка иконки избранного поста, в противном случае,
 * разметки иконки быть не должно.
*/

// const posts = [
//   {
//     title: "Phasellus volutpat metus",
//     text:
//       "Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Ut leo.",
//     favourite: true
//   },
//   {
//     title: "Nulla consequat massa",
//     text:
//       "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
//     favourite: false
//   },
//   {
//     title: "In enim justo",
//     text:
//       "Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Suspendisse eu ligula. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus.",
//     favourite: true
//   },
//   {
//     title: "Vestibulum ante ipsum",
//     text:
//       "Vestibulum suscipit nulla quis orci. Praesent venenatis metus at tortor pulvinar varius. Nulla sit amet est. Suspendisse eu ligula sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien.",
//     favourite: false
//   }
// ];
// const postCard = document.querySelector('#postCard').innerHTML.trim();
// const par = document.querySelector('.posts');

// const template = Handlebars.compile(postCard);
// const markup = template(posts);
// par.innerHTML = markup;


// ========================== Task 03 ================================================


/* 
  Напишите функцию validate которая проверяет поля формы 
  firstname и lastname и возвращает результат в виде 
  обьекта со свойствами 'first name' и 'last name'.
  
  Кроме того, формат объекта: в свойства записывается буль-флаг 
  уведомляющий о статусе прохождения валидации для каждого поля.
  {
    'first name': true или false,
    'last name': true или false,
  }
  
  Критерии валидации:
  1)Имя. Допускается не более 2-х слов, разделенных пробелами
  или дефисом. Слова должны состоять только из букв.
  
  2)Фамилия. Допускается не более 2-х слов, разделенных пробелами
  или дефисом. Слова должны состоять только из букв.
  
  При клике на кнопку submit должна происходить проверка.
  Результат проверки, объект, выводить в консоль.
*/

// const form = document.getElementById("form");
// const pattern = /^([а-я]{4,10}(?:( ?|-?)[а-я]{2,10}$|$))|^([a-z]{4,10}(?:( ?|-?)[a-z]{2,10}$|$))/i;

// form.addEventListener("submit", validate);

// function validate(evt) {
//   evt.preventDefault();
//   const inputs = Array.from(form.querySelectorAll('input'));

//   const results = inputs.reduce((acc, { id, value }) => {
//     acc[id] = pattern.test(value);
//     return acc;
//   }, {});
  
//   const valid = Object.values(results).every(el => el);
//   console.log({
//     valid,
//     results,
//   });
// }






//================================== Homework ==============================================

/*
  Реализуйте форму фильтра товаров в каталоге и список отфильтрованных товаров.
  Используйте шаблонизацию для создания карточек товаров.
  
  Есть массив объектов (дальше в задании), каждый из которых описывает 
  ноутбук с определенными характеристиками.
  
  Поля объекта по которым необходимо производить фильтрацию: size, color, release_date.
  Поля объекта для отображения в карточке: name, img, descr, color, price, release_date.
    
  Изначально есть форма с 3-мя секциями, состоящими из заголовка и группы 
  чекбоксов (разметка дальше в задании). После того как пользователь выбрал 
  какие либо чекбоксы и нажал кнопку Filter, необходимо собрать значения чекбоксов по группам. 
  
  🔔 Подсказка: составьте объект формата
      const filter = { size: [], color: [], release_date: [] }
    
  После чего выберите из массива только те объекты, которые подходят 
  под выбраные пользователем критерии и отрендерите список карточек товаров.
  
  🔔 Каждый раз когда пользователь фильтрует товары, список карточек товаров очищается, 
      после чего в нем рендерятся новые карточки товаров, соответствующих текущим критериям фильтра.
*/



const laptops = [
  {
    size: 13,
    color: 'white',
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'gray',
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'black',
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'white',
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'gray',
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'black',
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'white',
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'gray',
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'black',
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
];


const filter = { 
  size: [], 
  color: [], 
  release_date: [] 
};

const form = document.querySelector('.js-form');
form.addEventListener('submit', setFilter);

function setFilter(e) {
  e.preventDefault();
  const inputs = [...form.querySelectorAll('input')];
  
  // create template
  const card = document.querySelector('#card').innerHTML.trim();
  const productList = document.querySelector('.products');
  const template = Handlebars.compile(card);

  // clear list
  [...productList.children].forEach(el => el.remove());

  // clear filter object
  for(let prop in filter) {
    filter[prop].length = 0;
  }

  // add filter
  const newFilter = inputs.filter(el => el.checked);
  newFilter.forEach(el => filter[el.name].push(el.value));

  // selection of goods by filter
  const goodsByFilter = [];

  for(let obj of laptops) {
    for(let el of newFilter) {
      for(let prop in filter) {
        for(let item of filter[prop]) {
          if(goodsByFilter.includes(obj)) continue;
          
          if(el.name === 'color') {
            if(obj[el.name] === item) {
              goodsByFilter.push(obj);
            }
          } else if(obj[el.name] === Number(item)) {
            goodsByFilter.push(obj);
          } else continue;
        }
      }      
    }
  }

  // render
  const markup = template(goodsByFilter);
  productList.insertAdjacentHTML('beforeend', markup);
}

  
