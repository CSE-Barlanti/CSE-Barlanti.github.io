//Shows a message when the button is clicked
document.getElementById("btn-show-message").onclick = (e) => {
    document.getElementById("p-message").innerHTML = "Hello World";
    e.target.innerHTML = "done!";
};

//styles the link when it's clicked
document.getElementById("link").onclick = (e) => {
    e.preventDefault(); //don't go to links destination
    e.target.classList.add("cool-link");
};

//when button clicked make ball bounce
document.getElementById("btn-bounce").onclick = (e) => {
    document.getElementById("ball").classList.toggle("bouncing-ball");
}

//When you change the number of days since you watered your plant
//show a message and change the image
document.getElementByID("txt-num-days").onkeyup = (e) => {
    const numDays = parseInt(e.target.value);
    const pMessage= document.getElementById("p-plant-msg");
    pMessage.innerHTMl = numDays;

    if(numDays <= 2){
        pMessage.innerHTML = "Let your plant rest"
    }
}
