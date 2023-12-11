let today = new Date();
let agecal = document.querySelector(".agecal")

agecal.addEventListener("click", () => {
    let dataInput = new Date(document.getElementById("dateInput").value);
    let year = today.getFullYear() - dataInput.getFullYear();
let month = today.getMonth() - dataInput.getMonth();
let day =  dataInput.getDay() - today.getDay();

document.getElementById("years").innerHTML = year;
document.getElementById("months").innerHTML = month;
document.getElementById("days").innerHTML = day;
});
