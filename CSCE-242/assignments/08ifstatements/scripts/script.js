console.log("JavaScript is Connected");
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

const daysInput = document.querySelector("#txt-days");
const deductionResult = document.querySelector("#deduction-result");
const attendenceResult = document.querySelector("#attendence-result");

daysInput.addEventListener("input", () =>{
    const missedDays = Number(daysInput.value);

    if(daysInput.value === ""){
        deductionResult.textContent = "";
        attendenceResult.textContent = "";
        return;
    }

    const deduction = (missedDays / 25) * 7;

    deductionResult.textContent = "You will lose " + deduction.toFixed(1) + "% for skipping " + missedDays + " days.";

    if(missedDays === 0){
        attendenceResult.textContent = "Perfect attendance so far - keep it up!"
    }
    else if(missedDays <= 3){
        attendenceResult.textContent = "A few missed classes can add up, so stay on track."
    }
    else if(missedDays <= 7){
        attendenceResult.textContent = "You are missing a noticeable part of the course."
    }
    else{
        attendenceResult.textContent = "This is not an online class; you are missing valuable learning opportunities."
    }
})

const daysLeftResult = document.querySelector(days-left-result);
const today = new Date();
const lastDayOfClass = new Date(2026, 11, 4);

const milliSecondsLeft = lastDayOfClass - today;
const daysLeft = Math.ceil(milliSecondsLeft / 1000 * 60 * 60 * 24);


daysLeftResult.textContent = "You have " + daysLeft + " days left in the semester.";
