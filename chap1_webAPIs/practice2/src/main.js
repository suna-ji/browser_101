function setEventListener(){
    const divs = document.querySelector('.divs');
    divs.addEventListener('click', event => {
        const rect = event.target.getBoundingClientRect();
        console.log(rect);
        console.log(`client: ${event.clientX} ,${event.clientY}`);
        console.log(`page: ${event.pageX}, ${event.pageY}`);
        
    })
}

setEventListener();