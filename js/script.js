// BMI Result

function calculate() {
    let height = Number(document.getElementById("height").value);

    let weight = Number(document.getElementById("weight").value);

    let result = weight / (height * height);

    document.getElementById("results").innerHTML = "BMI Score: " + result;
}
