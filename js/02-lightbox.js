import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <a class = "gallery__link" href='${original}'>
    <img class = "gallery__image" src = '${preview}' alt = '${description}' data-source='${original}'/>
    </a>
    `;
  })
  .join("");
galleryList.insertAdjacentHTML("afterbegin", markup);

// new SimpleLightbox(".gallery a", {
//   captionDelay: 250,
// });
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

console.log(galleryItems);
