// BMI Result min version

function calculate() {

    let height = Number(document.getElementById("height").value);

    let weight = Number(document.getElementById("weight").value);

    let result = weight / (height / 100 * height / 100);

    document.getElementById("results").innerHTML = "BMI Resultat: " + result;

    if (result < 18.5) {
        document.body.style.backgroundColor = 'darkgoldenrod';
        document.getElementById("results").style.fontWeight = "600";
        document.getElementById("results").innerHTML = "BMI Resultat: " + result + "<br><br> Du er for tynd";
    }

    if (result > 18.5 && result < 25) {
        document.body.style.backgroundColor = 'green';
        document.getElementById("results").style.fontWeight = "600";
        document.getElementById("results").innerHTML = "BMI Resultat: " + result + "<br><br> Du er sund";
    }

    if (result > 25) {
        document.body.style.backgroundColor = 'red';
        document.getElementById("results").style.fontWeight = "600";
        document.getElementById("results").innerHTML = "BMI Resultat: " + result + "<br><br> Du er overvægtig";
    }

    if (result > 35) {
        document.body.style.backgroundColor = 'maroon';
        document.getElementById("results").style.fontWeight = "600";
        document.getElementById("results").innerHTML = "BMI Resultat: " + result + "<br><br> Du er alt for overvægtig";
    }
}