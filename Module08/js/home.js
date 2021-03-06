'use strict';
/*
  Создайте компонент галлереи изображений следующего вида.
  
    <div class="image-gallery js-image-gallery">
      <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-1.jpeg" alt="alt text 1">
      </div>
      <!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
      <ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>   
    
    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
    Реализуйте функционал:
      
      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
    
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
        
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
        
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
      - Изображений может быть произвольное количество.
      
      - Используйте делегирование для элементов preview.
      
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
      - CSS-оформление и имена классов на свой вкус.
      
      
    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

const galleryItems = [
    { preview: 'img/Photo-1.jpg', fullview: 'img/Photo-1-large.jpg', alt: "alt text 1" },
    { preview: 'img/Photo-2.jpg', fullview: 'img/Photo-2-large.jpg', alt: "alt text 2" },
    { preview: 'img/Photo-3.jpg', fullview: 'img/Photo-3-large.jpg', alt: "alt text 3" },
    { preview: 'img/Photo-4.jpg', fullview: 'img/Photo-4-large.jpg', alt: "alt text 4" },
    { preview: 'img/Photo-5.jpg', fullview: 'img/Photo-5-large.jpg', alt: "alt text 5" },
    { preview: 'img/Photo-6.jpg', fullview: 'img/Photo-6-large.jpg', alt: "alt text 6" },
    { preview: 'img/Photo-7.jpg', fullview: 'img/Photo-7-large.jpg', alt: "alt text 7" },
    { preview: 'img/Photo-8.jpg', fullview: 'img/Photo-8-large.jpg', alt: "alt text 8" },
    { preview: 'img/Photo-9.jpg', fullview: 'img/Photo-9-large.jpg', alt: "alt text 9" },
  ];

  createPreview(galleryItems);

const preview = document.querySelector('.preview');
preview.addEventListener('click', showPhoto);

function createPreview(arr) {
    const gallery = document.querySelector('.js-image-gallery');
    const fullview = document.createElement('div');
    fullview.classList.add('fullview');
    gallery.appendChild(fullview);
    
    const preview = document.createElement('ul');
    preview.classList.add('preview');

    arr.forEach(img => {
        const item = document.createElement('li');
        preview.appendChild(item);
        const image = document.createElement('img');
        image.setAttribute('src', img.preview);
        image.setAttribute('data-fullview', img.fullview);
        image.setAttribute('alt', img.alt);
        item.appendChild(image);
    });
    gallery.appendChild(preview);
    const list = document.querySelectorAll('li > img');
    const imageFullview = document.createElement('img');
    imageFullview.classList.add('fullview__img');
    imageFullview.setAttribute('src', list[0].dataset.fullview);
    imageFullview.setAttribute('alt', list[0].alt);
    fullview.appendChild(imageFullview);
}
function showPhoto(event) {
  const target = event.target;
  if(target.nodeName !== 'IMG') return;
  const fullviewImg = document.querySelector('.fullview > img');
  fullviewImg.src = target.dataset.fullview;
  fullviewImg.alt = target.alt;
  document.querySelectorAll('.preview > li > img').forEach(el => el === target ? el.classList.add('hover') : el.classList.remove('hover'));
}

// ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
//   Создайте плагин галлереи используя ES6 класс. Добавьте поля и методы класса так, 
//   чтобы можно было создать любое количество галлерей на странице. Функционал плагина 
//   аналогичный заданию выше.
  
//   При создании экземпляра конструктор получает:
//     - items - список элементов для preview
//     - parentNode - ссылку на DOM-узел в который будут помещены fullview и preview
//     - defaultActiveItem - номер активного элемента preview по умолчанию
    
//   Тогда создание экземпляра будет выглядеть следующим образом.
// */

// new Gallery({
//   items: galleryItems,
//   parentNode: document.querySelector('.image-gallery'),
//   defaultActiveItem: 1
// });


class Gallery {
  constructor({items, parentNode, defaultActiveItem}) {
    this.items = items;
    this.parent = parentNode;
    this.activeNum = defaultActiveItem;
    this.preview = document.createElement('ul');
    this.fullviewDiv = document.createElement('div');
    this.img = document.createElement('img');
    this.createGallery = this.createGallery.bind(this);
    this.showPhoto = this.showPhoto.bind(this);
  }
  createGallery() {
    this.fullviewDiv.classList.add('fullview');
    this.preview.classList.add('preview');

    this.items.forEach(img => {
      const item = document.createElement('li');
      this.preview.appendChild(item);
      const image = document.createElement('img');
      image.setAttribute('src', img.preview);
      image.setAttribute('data-fullview', img.fullview);
      image.setAttribute('alt', img.alt);
      item.appendChild(image);
    });
    this.parent.append(this.fullviewDiv, this.preview);
    const list = document.querySelectorAll('li > img');
    this.img.classList.add('fullview__img');
    this.img.setAttribute('src', list[this.activeNum - 1].dataset.fullview);
    this.img.setAttribute('alt', list[this.activeNum - 1].alt);
    this.fullviewDiv.appendChild(this.img);
  }
  showPhoto(event) {
    const target = event.target;
    if(target.nodeName !== 'IMG') return;
    this.img.src = target.dataset.fullview;
    this.img.alt = target.alt;
    document.querySelectorAll('.preview > li > img').forEach(el => el === target ? el.classList.add('hover') : el.classList.remove('hover'));
  }
}


const first =  new Gallery({
    items: galleryItems,
    parentNode: document.querySelector('.image-gallery'),
    defaultActiveItem: 5
  });
 first.createGallery();
 first.preview.addEventListener('click', first.showPhoto);

const second = new Gallery({
  items: galleryItems,
  parentNode: document.querySelector('.js-test'),
  defaultActiveItem: 2
 });
 second.createGallery();
 second.preview.addEventListener('click', second.showPhoto);

