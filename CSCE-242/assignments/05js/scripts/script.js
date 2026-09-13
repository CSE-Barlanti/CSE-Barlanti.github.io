const speechColumn = document.querySelector("#speech-column");
const speechBubble = document.querySelector("#speech-bubble");
const beverage = document.querySelector("#beverage");
const beverageMessage = document.querySelector("#beverage-message");
const sunImage = document.querySelector("#sun-image");
const stickerColumn = document.querySelector("#sticker-column");

const showSpeech = () => {
    speechBubble.classList.remove("hidden");
};

const showBeverageMessage = () => {
    beverageMessage.innerHTML = beverage.value + ": Nice Choice!";
};

const addSticker = () => {
    const sticker = document.createElement("div");

    sticker.classList.add("sticker");
    sticker.innerHTML = "&#9728;";

    stickerColumn.append(sticker);
}

speechColumn.addEventListener("click", showSpeech);
beverage.addEventListener("change", showBeverageMessage);
sunImage.addEventListener("click", addSticker)

