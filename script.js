let body = document.getElementById("body")

let nameProfile = document.getElementById('name-profile')
let imgProfile = document.getElementById('img-profile')

let button = document.getElementById('change-color')
let svbButton = document.getElementById('svg-button')

let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let button4 = document.getElementById('button4')

let github = document.getElementById('github')
let instagram = document.getElementById('instagram')
let linkedin = document.getElementById('linkedin')
let youtube = document.getElementById('youtube')

function change() {
  body.classList.toggle("light")
  if (body.classList.contains("light")) {
    nameProfile.style.color = "black"
    imgProfile.style.borderColor = "black"

    button.style.justifyContent = 'flex-end'
    button.style.borderColor = 'black'

    svbButton.src = "assets/sun.svg"

    button1.style.backgroundColor = 'transparent'
    button2.style.backgroundColor = 'transparent'
    button3.style.backgroundColor = 'transparent'
    button4.style.backgroundColor = 'transparent'

    button1.style.borderColor = 'black'
    button2.style.borderColor = 'black'
    button3.style.borderColor = 'black'
    button4.style.borderColor = 'black'

    button1.style.color = 'black'
    button2.style.color = 'black'
    button3.style.color = 'black'
    button4.style.color = 'black'

    github.src = "assets/github.svg"
    instagram.src = "assets/instagram.svg"
    linkedin.src = "assets/linkedin.svg"
    youtube.src = "assets/youtube.svg"

  } else {
    nameProfile.style.color = "white"
    imgProfile.style.borderColor = "white"

    button.style.justifyContent = 'flex-start'
    button.style.borderColor = 'white'

    svbButton.src = "assets/moon.svg"

    button1.style.backgroundColor = '#ffffff30'
    button2.style.backgroundColor = '#ffffff30'
    button3.style.backgroundColor = '#ffffff30'
    button4.style.backgroundColor = '#ffffff30'

    button1.style.borderColor = 'white'
    button2.style.borderColor = 'white'
    button3.style.borderColor = 'white'
    button4.style.borderColor = 'white'

    button1.style.color = 'white'
    button2.style.color = 'white'
    button3.style.color = 'white'
    button4.style.color = 'white'

    github.src = "assets/github-white.svg"
    instagram.src = "assets/instagram-white.svg"
    linkedin.src = "assets/linkedin-white.svg"
    youtube.src = "assets/youtube-white.svg"
  }
}

