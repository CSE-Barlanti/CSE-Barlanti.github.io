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

const base_url = "https://cse-barlanti.github.io/CSCE-242/projects/part6/data/players.json";
const getPlayers = async() => {
    const response = await fetch(base_url);
    return response.json();
}

const showPlayers = async() => {
    const players = await getPlayers();
    const playerList = document.getElementById("superstars-cards");

    player.forEach((player) => {
        const card = document.createElement("div");
        card.classList.add("superstars-card");

        const image = document.createElement("img");
        image.src = player.image;
        image.alt = player.name;
        card.append(image);

        const content = document.createElement("div");
        content.classList.add("superstars-card-content");

        const name = document.createElement("h2");
        name.innerHTML = player.name;
        content.append(name);

        const position = document.createElement("p");
        position.classList.add("superstar-acheivement");
        position.innerHTML = '${player.position} - {player.year}';
        content.append(position);
        
        const details = document.createElement("p");
        details.classList.add("superstar-descrqiption");
        details.innerHTML = '${player.height} - ${player.weight} - ${player.hometown}';
        content.append(details);

        card.append(content);

        return card;
    }
}