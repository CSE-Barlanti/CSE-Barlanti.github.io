const toggleNav = document.getElementById("toggle-nav");
const primaryNav = document.querySelector(".primary-nav");

toggleNav.onclick = () => {
    primaryNav.classList.toggle("show-nav");
};

const lightbox = document.getElementById("lightbox");

if(lightbox){
    const lightboxImage = document.getElementById("lightbox-image");
    const closeLightbox = document.getElementById("close-lightbox");
    const galleryImages = document.querySelectorAll(".photo-gallery-item img");

    galleryImages.forEach((image) => {
        image.onclick = () => {
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;

            lightbox.classList.add("show-lightbox");
        };
    });

    closeLightbox.onclick = () => {
        lightbox.classList.remove("show-lightbox");
    };
}