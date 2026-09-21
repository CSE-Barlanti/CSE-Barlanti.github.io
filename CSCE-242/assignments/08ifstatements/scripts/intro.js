const linkExerciseOne = document.querySelector("#link-exercise-one");
const linkExerciseTwo = document.querySelector("#link-exercise-two");

const exerciseOne = document.querySelector("#exercise-one");
const exerciseTwo = document.querySelector("#exercise-two");

linkExerciseOne.addEventListener("click", (event) => {
    event.preventDefault();


    exerciseOne.classList.remove("hidden");
    exerciseTwo.classList.add("hidden");
});

linkExerciseTwo.addEventListener("click", (event) =>{
    event.preventDefault();

    exerciseOne.classList.add("hidden");
    exerciseTwo.classList.remove("hidden");
});