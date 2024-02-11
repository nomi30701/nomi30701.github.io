// drop event
function dropdown() {
    const dropdown_menu = document.querySelector('.dropdown_menu');
    const arrow = document.querySelector('.arrow-down');
    dropdown_menu.classList.toggle('show_box');
    arrow.classList.toggle('rotate');
}

/*
// FadeIn cover hover animation bugs (if only use css)
// select all .box element
const boxes = document.querySelectorAll('.box');
for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    box.classList.add('fadeIn_animation'); // add FadeIn to box
    
    const delay = i * 50;
    box.style.animationDelay = delay + 'ms';

    // if hover
    box.addEventListener('mouseover', function() { 
        // remove fadeIn animation, add transform transition
        this.classList.remove('leaveHover_animation');
        this.classList.remove('fadeIn_animation');
        this.classList.add('hover_animation');
    });
    
    // if leave hover
    box.addEventListener('mouseleave', function() {
        // add animation
        this.classList.remove('hover_animation');
        this.classList.add('leaveHover_animation');
    });
}
*/

