const container = document.querySelector('.sizeBox');

window.addEventListener('resize', () => {
    getSizeInfo();    
})
// resize 될때마다 콜백함수 호출

function getSizeInfo(){
    container.innerHTML = `<p> window.screen: ${screen.width}, ${screen.height}</p>
    <p>window.outer: ${outerWidth}, ${outerHeight} </p>
    <p>window.inner: ${innerWidth}, ${innerHeight} </p>
    <p>documentElement.clientWidth: ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight} </p>`;
}      

getSizeInfo();