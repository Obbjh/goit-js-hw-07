import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

//Створення розмітки 

const galleryList = document.querySelector(".gallery")

const galleryCurrent = galleryItems.map(({preview, description, original}) => `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
  `).join('');

galleryList.insertAdjacentHTML('afterbegin', galleryCurrent);
  
//Використання simplelightbox

const lightbox = new SimpleLightbox(".gallery__link", {
  captionDelay: 250,
  captionsData: "alt",
});
