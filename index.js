function dropdown() {
    const dropdown_menu = document.querySelector('.dropdown_menu');
    const dropdown_box = document.querySelectorAll('.dropdown_menu .div')
    const arrow = document.querySelector('.arrow-down');
    dropdown_menu.classList.toggle('show'); // add or delete .block to dropdown_menu
    arrow.classList.toggle('rotate'); // add or delete .rotate to arrow
}

// box animation
// const boxes = document.querySelectorAll('.box');
// function applyFadeInAnimation() {
//     for (var i = 0; i < boxes.length; i++) {
//         var delay = i * 50;
//         boxes[i].style.animation = `fadeIn 1s ease forwards ${delay}ms`;
//     }
// }

applyFadeInAnimation();
