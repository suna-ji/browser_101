const playBtn = document.querySelector('.playBtn');
const carrots__ul = document.querySelector('.carrots__ul');
const bugs = document.querySelector('.bugs');

const clientX = document.documentElement.clientWidth;
const clientY = document.documentElement.clientHeight;
// const carrotRect = first_carrot.getBoundingClientRect();
// const carrotWidth = carrotRect.width;
// const carrotHeight = carrotRect.height;
// const oldX = carrotRect.left;
// const oldY = carrotRect.top;

// 각 posX, posY를 가진 당근 10개, 벌레 10개 리스트 만들어서 ready에 시작하자자 화면에 랜덤하게 뿌려주기




// playBtn.addEventListener('click', (event) => {
//     carrots.
    
   
// });
   
// function setPositioning(){
//     // posX의 범위: -oldX <= newX <= (clientWidth - oldX - carrotWidth)
//     // posY의 범위: -oldY <= newY <= (clientHeight - oldY - carrotHeight)
//     var newX = getRandomPosition(-oldX, clientX - oldX - carrotWidth);
//     var newY = getRandomPosition(-oldY, clientY - oldY - carrotHeight);

//     // 한번 옮겨진 위치가 아니라 처음 로드된 위치를 기준으로 translate되고 있다. 왜지????
//     console.log(`newX => ${newX} newY => ${newY}`);
//     first_carrot.style.transform = `translate(${newX}px, ${newY}px)`;

// }
// // js 코드규칙 - function : 함수명에는 _ 를 포함하지 않는다.
// function getRandomPosition(min, max) {
//     return Math.random() * (max - min) + min;
//   }

function createHTMLString(carrot){
    return `
        <li class="carrot" style = "transform: translate(${carrot.posX}, ${carrot.posY})" >
            <button class="carrot__btn">
                <img src="img/carrot.png" alt="carrot_img">
            </button>
        </li>
    `;
}

function displayCarrots(carrots){
    carrots__ul.innerHTML = carrots.map(carrot => createHTMLString(carrot)).join('');
}



// Fetch the items from the JSON file
function loadItems() {
    return fetch('data/carrots.json')
        .then(response => response.json())
        .then(json => json.carrots)
}

// json파일을 동적으로 불러와야함 -> 시간이 걸림 -> promise리턴
// main
loadItems()
    .then(carrots => {
        displayCarrots(carrots);
        // setEventListeners(carrots);
    })
