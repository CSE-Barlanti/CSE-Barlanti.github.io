//https://portiaportia.github.io/json/fish.json


const base_url = "https://portiaportia.github.io/json/fish.json";

const getFish = async() => {
    const response = await fetch(base_url);
    return response;
};

const showFish = async() => {
    const fish = await getFish();
    console.log(fish);
};

showFish();
