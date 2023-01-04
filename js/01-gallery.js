import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
    galleryList: document.querySelector('.gallery'),
}

const markup = galleryItems.map(item => 
    `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}" 
        rel="noreferrer nofollow" target="_blank">
    <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}" 
    />
    </a>
    </div>`).join('');

refs.galleryList.insertAdjacentHTML('beforeend', markup);
refs.galleryList.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault();
    console.log(evt.target);
    if (evt.target.nodeName !== 'IMG') {
		return
	}
    
    const selectedImages = evt.target.getAttribute('data-source')
    const instance = basicLightbox.create(`
	<img src="${selectedImages}" width="800" height="600">
`)
instance.show();

refs.galleryList.addEventListener('keydown', onEscape);
function onEscape(evt) {
    if (evt.code === 'Escape') {
        instance.close();
    }  
}
}