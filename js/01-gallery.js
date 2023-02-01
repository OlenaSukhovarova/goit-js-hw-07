// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення
//  у модальному вікні.Подивися демо відео роботи галереї.
// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону
// елемента галереї.
// 2. Реалізація делегування на div.gallery і отримання url великого зображення.
// 3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй
//  CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.
// 4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією
//  і прикладами.
// 5. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям.
// 6. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class = "gallery__item">
    <a class = "gallery__link" href='${original}'>
    <img class = "gallery__image" src = '${preview}' alt = '${description}' data-source='${original}'/>
    </a>
    </div>`;
  })
  .join("");
galleryContainer.insertAdjacentHTML("afterbegin", markup);

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const selectedImage = event.target.getAttribute("data-source");

  const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`);

  instance.show();
});
