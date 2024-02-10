// drop event
function dropdown() {
    const dropdown_menu = document.querySelector('.dropdown_menu');
    const arrow = document.querySelector('.arrow-down');
    const dropdown_boxes = dropdown_menu.querySelectorAll('.box');

    dropdown_menu.classList.toggle('show');
    arrow.classList.toggle('rotate');

    if (dropdown_menu.classList.contains('show')) {
        dropdown_boxes.forEach((box, index) => {
            var delay = index * 100;
            box.style.animation = `fadeIn 0.5s ease forwards ${delay}ms`;
            box.style.visibility = 'visible';
        });
    } else {
        dropdown_boxes.forEach(box => {
            box.style.visibility = 'hidden';
        });
    }
}

// box animation
const boxes = document.querySelectorAll('.box');
function applyFadeInAnimation() {
    boxes.forEach((box, index) => {
        var delay = index * 50;
        box.style.animation = `fadeIn 0.5s ease forwards ${delay}ms`;
    });
}

// apply box animation
applyFadeInAnimation();
