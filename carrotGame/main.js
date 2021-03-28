const playBtn = document.querySelector('.playBtn');
const carrots = document.querySelector('.carrots');
const bugs = document.querySelector('.bugs');
const clientX = document.documentElement.clientWidth;
const clientY = document.documentElement.clientHeight;

console.log(`clientx => ${clientX} clinety => ${clientY}`);
// clientx => 1792 clinety => 1009
// oldX => 48 oldY => 204

const carrotRect = first_carrot.getBoundingClientRect();
const carrotWidth = carrotRect.width;
const carrotHeight = carrotRect.height;
const oldX = carrotRect.left;
const oldY = carrotRect.top;

playBtn.addEventListener('click', (event) => {


    let newX = getRandomPosition(-oldX, clientX - oldX - carrotWidth);
    let newY = getRandomPosition(-oldY, clientY - oldY - carrotHeight);
    // -oldX <= newX <= (clientWidth - oldX - carrotWidth)
    // -oldY <= newY <= (clientHeight - oldY - carrotHeight)
    // 한번 옮겨진 위치가 아니라 처음 로드된 위치를 기준으로 translate되고 있다. 왜지????
    console.log(`newX => ${newX} newY => ${newY}`);
    first_carrot.style.transform = `translate(${newX}px, ${newY}px)`;
   
});
function 

function getRandomPosition(min, max) {
    return Math.random() * (max - min) + min;
  }

