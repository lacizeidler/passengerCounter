let countEl = document.getElementById('count-el')

let saveEl = document.getElementById('save-el')

console.log(countEl);

let count = 0

function increment () {
    count += 1
    countEl.textContent = count; 
}

function save () {
    let countStr = count + ' - '
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

let welcomeEl = document.getElementById('welcome-el')

let name = 'Carol'

let greeting = 'Welcome back, '

welcomeEl.innerText = greeting + name



