//https://portiaportia.github.io/json/fish.json


const base_url = "https://portiaportia.github.io/json/fish.json";

const getFish = async() => {
    const url = `${base_url}`;
    const response = await fetch(base_url);
    return response.json();
};

const showFish = async() => {
    const fishes = await getFish();
    
    fishes.forEach((fish)=> {
        document.querySelector("fish.fish-list").append(displayFish(fish));
    });
};

const displayFish = (fish) => {
    const section = document.createElement("section");
    section.classList.add("fish");

    const h2 = document.createElement("h2");
    h2.innerHTML = fish.title;
    section.append(h2);

    const image = document.createElement("img");
    image.src = fish.image;
    image.alt = fish.title;
    section.append(image);

    const p = document.createElement("p");
    p.innerHTML = fish.description;
    section.append(p);

    const ol = document.createElement("ol");

    return section;
};

    
};



showFish();
