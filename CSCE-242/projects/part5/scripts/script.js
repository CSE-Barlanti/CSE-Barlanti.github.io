const toggleNav = document.getElementById("toggle-nav");
const primaryNav = document.querySelector(".primary-nav");

toggleNav.onclick = () => {
    primaryNav.classList.toggle("show-nav");
};