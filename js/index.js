


// VARIABLES


const burger = document.getElementById('burger');
const header = document.querySelector('header');
const ul = document.getElementById('ul_nav')
const items = document.getElementById('items_div');
const menu = document.getElementById('bur_menu')
const sing = document.getElementById('sing')
const navbar = document.getElementById('navbar')









// MAIN CODE

document.onclick = function (e) {
    if (e.target.id !== 'header' && e.target.id !== 'burger' && e.target.id !== 'navbar') {

        ul.classList.remove('active_ul');
        items.classList.remove('active_items');
        menu.classList.remove('active_menu');
        sing.classList.remove('active_sing');
    }
}


burger.onclick = function () {

    // ul,items,menu,sing
    ul.classList.toggle('active_ul');
    items.classList.toggle('active_items');
    menu.classList.toggle('active_menu');
    sing.classList.toggle('active_sing');


};


//   header.style.height = "20vh";
//   ul.style.height = "20vh";

//    header.style.background = 'rgba(0,0,0,0.70)';
//    ul.style.background = 'rgba(0,0,0,0.70)';

//    header.style.transition = '0.5s';
//    ul.style.transition = '0.5s';
//    items.style.display = "flex";
//    items.style.flexDirection = 'column';
//    items.justifyContent = 'center';
//    items.alignItems = 'center'
// menu.style.display = 'none';
// sing.style.display = 'none';
// menu.backgroundImage = '../img/close.png'





// Login


