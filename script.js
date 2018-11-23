const button = document.querySelector("button");

function calculateBMI() {
    const p1mass = document.querySelector("#person1mass").value;
    const p1height = document.querySelector("#person1height").value;
    const p2mass = document.querySelector("#person2mass").value;
    const p2height = document.querySelector("#person2height").value;

    const bmi1 = p1mass / (p1height * p1height) * 10000;
    const bmi2 = p2mass / (p2height * p2height) * 10000;
    debugger;
    console.log(`Hello`);
    console.log(bmi1, bmi2);
    // return bmi1, bmi2;
}

button.addEventListener("click", calculateBMI);
