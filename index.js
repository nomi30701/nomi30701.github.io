// drop event
function dropdown() {
    const dropdown_menu = document.querySelector('.dropdown_menu');
    const arrow = document.querySelector('.arrow-down');
    dropdown_menu.classList.toggle('show');
    arrow.classList.toggle('rotate');
}
