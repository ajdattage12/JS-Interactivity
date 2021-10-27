//console.log("Hello World")
let message = document.querySelector('#message')

let inputField = document.querySelector('input')
let addButton = document.querySelector('button')

const revealMessage = () =>{
    setTimeout(() => {message.classList.add('hide')
    }, 1000)
    message.classList.remove('hide')
}

const addMovie = (event) =>{
    event.preventDefault()
    let movie = document.createElement("li")
    let movieTitle = document.createElement("span")
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossedOffMovie)
    movie.appendChild(movieTitle)
    
    deleteButton = document.createElement('button')
    deleteButton.textContent = "X"
    deleteButton.addEventListener('click', deleteMovie)
    movie.appendChild(deleteButton)

    let list = document.querySelector('ul')
    list.appendChild(movie)

    inputField.value = ""
}

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`
    revealMessage()
}
const crossedOffMovie = (event) =>{
    event.target.classList.toggle('checked')
    if(event.target.classList = event.target.classList.contains ('checked')){
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = "Movie added back!"
    }
    revealMessage()
}


// let form = document.querySelector('form')
addButton.addEventListener('click', addMovie)