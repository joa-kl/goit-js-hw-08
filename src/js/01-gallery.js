// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
// Opisany w dokumentacji
import SimpleLightbox from "simplelightbox";
// Dodatkowy import stylów
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const galleryItemsGrid = galleryItems
    .map((image) => {
        return `<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>`;
    })
    .join("");

gallery.innerHTML = galleryItemsGrid;
gallery.addEventListener("click", openModal);

function openModal(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }

    function closeModal(event) {
        if (event.code === "Escape") {
            instance.close();
        }
    }
}
const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
});