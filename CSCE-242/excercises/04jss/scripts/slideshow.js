//When the right arrow is clicked slideshow moves
document.getElementById("hero-arrow-right") = (e) => {
    e.preventDefault();
    const currentSlide = document.querySelector("#slides :not(.hidden)")
    console.log(currentSlide);
    
};

