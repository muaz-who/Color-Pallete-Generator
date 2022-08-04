

//Get all of the elements
const btn = document.querySelector('#btn');
const color = document.querySelectorAll('.color');
const hex = document.querySelectorAll('.hex');

//Add a click event on the button
btn.addEventListener('click', generateColors);

function generateColors() {
    for(let i = 0; i < color.length; i++) {
        //Generate random color
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        //Add the color as the background
        color[i].style.background = '#' + randomColor
        //Add the animation
        color[i].classList.add('fade-in');
        setTimeout(() => color[i].classList.remove('fade-in'), 400);
        //Add the hex code above the color
        hex[i].innerHTML = randomColor;
    }
}

//Generate pallete on page load
generateColors();