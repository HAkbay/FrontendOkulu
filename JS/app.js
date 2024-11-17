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

const nickName = ["Hulk", "Haluk"]
console.log(squareOf(Math.floor(a / 5)))

nickName.forEach(function (nickName, index) {
    console.log(nickName, index)
});

function Person(name, surname, age) {
    this.name = name
    this.surname = surname
    this.age = age
}

Person.prototype.showInfos = function () {
    console.log(`Name: ${this.name} Surname: ${this.surname} Age: ${this.age}`)
}

function Employee(name, surname, age, salary) {
    Person.call(this, name, surname, age)
    this.salary = salary
}

Employee.prototype = Object.create(Person.prototype)

const person1 = new Person("Haluk", "Akbay", 19)
const person2 = new Person("John", "Doe", 25)
const emp1 = new Employee("Haluk", "Akbay", 22, 5000)
const emp2 = new Employee("John", "Doe", 30, 10000)

person1.showInfos()
person2.showInfos()
emp1.showInfos()

Employee.prototype.showInfos = function () {
    console.log(`Name: ${this.name} Surname: ${this.surname} Age: ${this.age} Salary: ${this.salary}`)
}

emp2.showInfos()

class EmployeeClass extends Person {
    constructor(name, surname, age, salary) {
        super(name, surname, age) // Call the parent class constructor which is Person class.
        this.salary = salary
    }
    showInfos = () => {
        console.log(`Name: ${this.name} Surname: ${this.surname} Age: ${this.age} Salary: ${this.salary}`)
    }
}

const emp3 = new EmployeeClass("Haluk", "Akbay", 25, 5000)
console.log(emp3)
emp3.showInfos()

class Maths {
    cube(x) {
        return x * x * x
    }
    static cube2(x) {
        return x * x * x
    }
    // the advantage of static methods is that they can be called without creating an instance of the class
}

const math = new Maths()
// console.log(math.cube2(3)) => Error, cube2 is a static method
console.log(Maths.cube2(3)) // Correct usage

document.getElementById("data").addEventListener("click", function () {
    const xhr = new XMLHttpRequest()
    console.log(xhr)
    xhr.onreadystatechange = function () {
        console.log(this.readyState)
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(this.responseText)
        }
        if (xhr.readyState == 4 && xhr.status == 404) {
            console.log("Data not found")
        }
    }
    xhr.open("GET", "./text.txt", true)
    xhr.send()
})

document.getElementById("getButton").addEventListener("click", getAllData)

function getAllData() {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "./users.json", true)
    xhr.onload = function () {
        let list = document.getElementById("employees")
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText)
            data.forEach(user => {
                list.innerHTML += `
                <tr>
                <td>${user.name}</td>
                <td>${user.surname}</td>
                <td>${user.age}</td>
                <td>${user.salary}</td>
                </tr>
                `
            })
        } else console.log("Error...")
    }
    xhr.send()
}

document.getElementById("apiData").addEventListener("click", function () {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
    xhr.onload = function () {
        if (this.status === 200) {
            let data = JSON.parse(xhr.responseText)
            let list = document.getElementById("posts")
            data.forEach(post => {
                list.innerHTML += `
                <div>
                <h3>${post.id}</h3>
                <h4>${post.title}</h4>
                <span>${post.body}</span><br>
                </div>
                <hr>
                `
            })
        }
    }
    xhr.send()
    document.getElementById("apiData").style.display = "none"
})

function getPromiseData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof data === 'number') {
                let result = `${data} x ${data} is equal to ${data * data}`
                resolve(result)
            } else {
                reject("Please enter a number.")
            }
        }, 1500);
    })
}

getPromiseData(12)
    .then(response => console.log(response))
    .catch(err => console.log(err))

function getFetchData() {
    fetch("./text.txt")
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}
getFetchData()

// function getApiData() {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err))
// }
// getApiData()

class RequestData {
    static get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err, "Data not found."))
        })
    }
    static post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err, "Data not found."))
        })
    }
    static put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err, "Data not found."))
        })
    }
    static delete(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err, "Data not found."))
        })
    }
}

// RequestData.get("https://jsonplaceholder.typicode.com/posts")
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

RequestData.post("https://jsonplaceholder.typicode.com/posts", { userId: 1, title: "New Title", body: "A new title for a new post" })
    .then(data => console.log(data))
    .catch(err => console.log(err))

RequestData.put("https://jsonplaceholder.typicode.com/posts/1",
    { userId: 1, title: "Edited Title", body: "An edited title for an old post" })
    .then(data => console.log(data))
    .catch(err => console.log(err))

class NewRequest {
    static async get(url) {
        const response = await fetch(url)
        if (!response.ok) throw new Error("An error occurred. " + response.status)
        const data = await response.json()
        return data
    }
}

NewRequest.get("https://jsonplaceholder.typicode.com/posts")
    .then(data => console.log(data))
    .catch(err => console.log(err))


function TextArea(title, text) {
    this.title = title
    this.text = text
}

function AddToStorage() {

}

AddToStorage.prototype.getStorageItems = function () {
    let text
    if (localStorage.getItem("storedText") === null) {
        text = []
    } else {
        text = JSON.parse(localStorage.getItem("storedText"))
    }
    return text
}

AddToStorage.prototype.toStorage = function (newStorage) {
    let text = this.getStorageItems()
    text.push(newStorage)
    localStorage.setItem("storedText", JSON.stringify(text))
}



AddToStorage.prototype.deleteAll = function () {
    localStorage.removeItem("storedText")
}

function UI() { }

UI.prototype.addToUI = function (newText) {
    const text = document.getElementById("text-area")
    text.innerHTML += `
    <tr>
        <td class="width-25">${newText.title}</td>
        <td class="width-25">${newText.text}</td>
    </tr>
    `
}

UI.prototype.clearInputs = function (element1, element2) {
    element1.value = ""
    element2.value = ""
}

UI.prototype.loadAllText = function (text) {
    const textList = document.getElementById("text-area")
    text.forEach(function (text) {
        textList.innerHTML += `
        <tr>
            <td class="width-25">${text.title}</td>
            <td class="width-25">${text.text}</td>
        </tr>
        `
    })
}

UI.prototype.deleteText = function (element) {
    element.parentElement.remove()
}

UI.prototype.deleteAllText = function () {
    const textList = document.getElementById("text-area")
    while (textList.firstElementChild !== null) {
        textList.removeChild(textList.firstElementChild)
    }
}

UI.prototype.displayMessages = function (message, type) {
    const cardBody = document.querySelectorAll(".card-body")[1]
    const div = document.createElement("div")
    div.className = `alert-${type}`
    div.textContent = message
    cardBody.appendChild(div)
    setTimeout(() => {
        div.remove()
    }, 2500)
}

const form = document.getElementById("text-form")
const titleElement = document.getElementById("title")
const textElement = document.getElementById("text")
const clear = document.getElementById("clear-text")

const ui = new UI()
const storage = new AddToStorage()
function eventListeners() {
    form.addEventListener("submit", addText)
    document.addEventListener("DOMContentLoaded", loadAllText)
    clear.addEventListener("click", clearText)
}
eventListeners()

function clearText(e) {
    if (confirm("Are you sure?")) {
        ui.deleteAllText()
        storage.deleteAll()
    }
}

function addText(e) {
    e.preventDefault()
    const title = titleElement.value
    const text = textElement.value
    if (title === "" || text === "") {
        ui.displayMessages("Please fill in all fields.", "err")
    } else {
        const newText = { title: title, text: text }
        ui.addToUI(newText)
        storage.toStorage(newText)
        ui.displayMessages("Text added successfully.", "success")
        ui.clearInputs(titleElement, textElement)
    }
}

function loadAllText() {
    let text = storage.getStorageItems()
    ui.loadAllText(text)
}


