import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

//Створення розмітки 

const galleryList = document.querySelector(".gallery")


const galleryCurrent = galleryItems.map(({preview, description, original}) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${preview}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
  `).join('');

  galleryList.insertAdjacentHTML('afterbegin', galleryCurrent);

// Делегування Gallery 

galleryList.addEventListener(`click`, onclick);

function onclick(evt) {
    if (evt.target.nodeName !== `IMG`) {
        return;
    }

    evt.preventDefault();

    const originalSrc = evt.target.dataset.source;
    const description = evt.target.alt;

    openLightbox(originalSrc, description);
}

// створення basicLightbox для img

function openLightbox(src, alt) {
    document.addEventListener('keydown', closeOnEsc);
    const instance = basicLightbox.create(`
        <div class="modal">
            <img
                src="${src}"
                alt="${alt}"
                class="gallery__image"
            />
        </div>
    `);

    instance.show();

      function closeOnEsc(event) {
        if (event.key === 'Escape') {
            instance.close(() => {
                document.removeEventListener('keydown', closeOnEsc);
            });
        }
    }

    return instance;
}

