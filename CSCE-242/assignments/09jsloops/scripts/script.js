const createCar = (color, lane, left-position) => {
    const car = document.getElementById("div");

    car.classList.add(car);
    car.style.background = color;
    car.style.top = lane + "px";
    car.style.left = left-position + "%";

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
}

createCar("turquoise", 25, 20);