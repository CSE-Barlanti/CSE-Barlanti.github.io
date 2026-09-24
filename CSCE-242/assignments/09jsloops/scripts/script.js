const createCar = (color, lane, leftPosition) => {
    const car = document.createElement("div");

    car.classList.add("car");
    car.style.background = color;
    car.style.top = lane + "px";
    car.style.left = leftPosition + "%";

    const carTop = document.createElement("div");
    carTop.classList.add("car-top");

    const frontWheel = document.createElement("div");
    frontWheel.classList.add("wheel");
    frontWheel.classList.add("front-wheel");

    const backWheel = document.createElement("div");
    backWheel.classList.add("wheel");
    backWheel.classList.add("back-wheel");

    car.append(carTop);
    car.append(frontWheel);
    car.append(backWheel);

    document.getElementById("cars").append(car);
};

const carColors = ["turquoise", "coral", "mediumpurple", "yellowgreen", "lightskyblue", "plum"];

for(i = 0; i < 7; i++){
    let randomLane;

    if(Math.random() < .5){
        randomLane = 25;
    }else{
        randomLane = 140;
    }

    const randomLeft = Math.random() * 85;
    const randomColor = carColors[Math.floor(Math.random() * carColors.length)];

    createCar(randomColor, randomLane, randomLeft);
};