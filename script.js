var _ = require("lodash");
console.log(_);
const button = document.querySelector("button");
const para = document.querySelector("p");

function calculateBMI() {
    const p1mass = document.querySelector("#person1mass").value;
    const p1height = document.querySelector("#person1height").value;
    const p2mass = document.querySelector("#person2mass").value;
    const p2height = document.querySelector("#person2height").value;

    const bmi1 = (p1mass / (p1height * p1height)) * 10000;
    const bmi2 = (p2mass / (p2height * p2height)) * 10000;

    if (bmi1 > bmi2) {
        para.textContent += `Person 1 has a higher BMI then Person 2 ${bmi1}, ${bmi2}!`;
    } else {
        para.textContent += `Person 2 has a higher BMI then Person 1 ${bmi1}, ${bmi2}`;
    }
}

button.addEventListener("click", calculateBMI);
