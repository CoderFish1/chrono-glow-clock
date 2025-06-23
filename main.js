let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

setInterval(() => {
    let d = new Date();
    let Hours = d.getHours();
    let Minutes = d.getMinutes();
    let Seconds = d.getSeconds();

    let hRotation = (30 * Hours) + (Minutes / 2);
    let mRotation = 6 * Minutes;
    let sRotation = 6 * Seconds;

    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
}, 1000);

function clock(){
    let months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let days = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

let d = new Date();
document.getElementById("date").innerHTML = (days[d.getDay()] + " " + d.getDate() + " " + months[d.getMonth()] + " ," + d.getFullYear())

document.getElementById("hPoint").innerHTML = d.getHours();
document.getElementById("mPoint").innerHTML = d.getMinutes();
document.getElementById("sPoint").innerHTML = d.getSeconds();
}
var inter = setInterval(clock, 400)
let btn = document.querySelector(".toggle")
let cont = document.querySelector(".clock-container");
let digital = document.querySelector(".digital-container"); 
let footer = document.querySelector("#footer"); 

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (btn.innerHTML == "Light-Mode ☀️") {
        btn.innerHTML = "Dark-Mode 🌙";   
        btn.style.color = "#1e1e2f"
        cont.style.backgroundImage = 'url("light-clockk.svg")'
        digital.style.color = "#1e1e2f"
        footer.style.color = "#1e1e2f"
    }
    else {
        btn.innerHTML = "Light-Mode ☀️"
        btn.style.color = "#dce3e9"
        cont.style.backgroundImage = 'url("clockk.svg")'
        digital.style.color = "#dce3e9"
        footer.style.color = "#dce3e9"
    }

})


