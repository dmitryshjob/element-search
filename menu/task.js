let menu = Array.from(document.getElementsByClassName('menu__link'));

for (let i = 0; i < menu.length; i++) {
    if ( menu[i].closest('li').querySelector('ul')) {
        let elem = menu[i].closest('li').querySelector('a');
        console.log(elem)
        elem.addEventListener('click', showSubMenu);
    };
};
function showSubMenu(c) {
        c.preventDefault();
        this.closest('li').querySelector('ul').classList.toggle("menu_active");
    }
    