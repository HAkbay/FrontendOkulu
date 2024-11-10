var a = Math.floor(Math.random() * 101)
console.log(a)
function testFunction() {
    coinFlip = Math.floor(Math.random() * 2)
    coinFlip == 1 ? console.log("Heads!") : console.log("Tails!")
}
testFunction()

let date = new Date()
const person = {
    name: "Haluk",
    surname: "Akbay",
    currentAge() {
        return date.getFullYear() - 2002
    }
}

let fullInfo = `My name is ${person.name} ${person.surname}
...and I am ${person.currentAge()} years old.`

console.log(fullInfo)

function user(name = "No Info", surname = "No Info") {
    console.log(`Hello ${name} ${surname}`)
}
user("Haluk", "Akbay")

const squareOf = (x) => x * x
// const squareOf = (x) => {
//     x * x
// }

const nickName = ["Hulk", "Halo", "Haluk"]
console.log(squareOf(Math.floor(a / 5)))

nickName.forEach(function (nickName, index) {
    console.log(nickName, index)
});

const newButton = document.createElement("a")
newButton.id = "newButton"
// newButton.className = "red"
newButton.href = "https://www.google.com"
newButton.target = "_blank"
newButton.textContent = "Go to Google"
const divSelector = document.querySelector("#buttonDiv")
divSelector.appendChild(newButton)

let value
value = document.getElementById("newButton")
value.addEventListener("click", function () {
    console.log("Button clicked")
})

if (localStorage.getItem("isDarkMode")) {
    if (localStorage.getItem("isDarkMode") == "true") {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        document.getElementById("darkMode").textContent = "Light Mode"
    } else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        document.getElementById("darkMode").textContent = "Dark Mode"
    }
}
else {
    localStorage.setItem("isDarkMode", false)
}

darkModeToggle = document.getElementById("darkMode")
darkModeToggle.addEventListener("click", function () {
    if (localStorage.getItem("isDarkMode") == "true") {
        localStorage.setItem("isDarkMode", false)
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        document.getElementById("darkMode").textContent = "Dark Mode"
    } else {
        localStorage.setItem("isDarkMode", true)
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        document.getElementById("darkMode").textContent = "Light Mode"
    }
})
