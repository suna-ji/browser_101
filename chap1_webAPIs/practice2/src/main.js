function getXY(event){
    console.log(`client: ${event.clientX} ,${event.clientY}
    page: ${event.pageX}, ${event.pageY}`);
}

function changeColor(event){
    event.target.style.backgroundColor = "green";
}

function setEventListener(){
    const divs = document.querySelector('.divs');
    divs.addEventListener('click', event => getXY(event));
    divs.addEventListener('click', event => changeColor(event));
}

setEventListener();