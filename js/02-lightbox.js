import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const markup = galleryItems.map(item => 
    `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}"/>
  </a>`).join('');

galleryList.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a', {
	captionDelay: 250
})