// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

// flexing text
const flex = document.getElementById('flex');
let color = 'red';
let intervalId;

function changeColor() {
    const colors = ['red', 'green', 'blue', 'grey', 'purple', 'violet'];
    const index = colors.indexOf(color);
    let nextIndex = (index + 1) % colors.length;
    color = colors[nextIndex];
    flex.style.color = color;
}

function startAnim() {
    changeColor();
    intervalId = setInterval(changeColor, 2000); // 2 sec
}

startAnim();
