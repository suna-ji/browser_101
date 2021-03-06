const find_box = document.querySelector('.find_box');
const rabbit = document.querySelector('.rabbit');

find_box.addEventListener('click', (event) => {
    // var clientRect = rabbit.getBoundingClientRect();
    // window.scrollTo(clientRect.x, clientRect.y);
    rabbit.scrollIntoView({behavior: 'smooth', block: 'center'});
})

