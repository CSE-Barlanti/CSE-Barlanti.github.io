//When the right arrow is clicked slideshow moves
document.getElementById("hero-arrow-right") = (e) => {
    e.preventDefault();
    const currentSlide = document.querySelector("#slides :not(.hidden)")
    console.log(currentSlide);
    
};

document.getElementById("hero-arrow-right").onclick = (e) => {
    e.preventDefault();
    const currentSlide = document.getElementById("#slides :not(.hidden)");
    let nextSlide = document.getElementById("#slides :first-child");

    if(nextSlide == null){
        nextSlide = document.querySelector("slides :first-child");
    }

    slide(currentSlide, nextSlide);

}

document.getElementById("hero-arrow-left").onclick = (e) => {
    e.preventDefault();
    const currentSlide = getCurrentSlide();
}


const getCurrentSlide = () => {
    return document.querySelector("#slides :not(.hidden)")
}

const slide = (currentSlide, nextSlide) => {
    currentSlide.classList.remove("hidden");
    nextSlide.classList.add("hidden");
}   

