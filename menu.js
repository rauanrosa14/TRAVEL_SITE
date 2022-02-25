function menu(){
    let menu = document.querySelector('.menu-mobile');
    menu.onclick = () => {
        let menu_list = document.querySelector('.menu-mobile-list');
        menu_list.classList.toggle("active");
    }
}