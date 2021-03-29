const clientX = document.documentElement.clientWidth;
const clientY = document.documentElement.clientHeight;

const playBtn = document.querySelector('.playBtn');
const carrots__ul = document.querySelector('.carrots__ul');
const bugs__ul = document.querySelector('.bugs__ul');




// 각 posX, posY를 가진 당근 10개, 벌레 10개 리스트 만들어서 ready에 시작하자자 화면에 랜덤하게 뿌려주기 (완료)
// querySelectorAll로 ul 아래에 있는 모든 li가져온다음 map으로 하나씩 translate하는게 더 효율적일까? 방법1 
// 아니면, data의 posx posy 를 바꾸고 li싹 지우고 display하는데 더 효율적일까 방법2
// 2번이 더 좋을 것 같음 
// 2가지 방법으로 구현하고 성능 테스트 해보기 💡




playBtn.addEventListener('click', (event) => {

    const carrots__li = document.querySelectorAll('.carrot');
    const bugs__li = document.querySelectorAll('.bug');
    carrots__li.forEach(
        function(currentValue) {
            // console.log(currentValue);
            setPositioning(currentValue, 'carrot');
        }
    )
    bugs__li.forEach(
        function(currentValue) {
            setPositioning(currentValue, 'bug');
        }
    )
});
   
function setPositioning(item, itemType){
    const itemRect = item.getBoundingClientRect();
    let itemWidth, itemHeight;

    if(itemType === 'carrot'){
        itemWidth = 80;
        itemHeight = 80;
    }else if(itemType === 'bug'){
        itemWidth = 50;
        itemHeight = 50;
    }

    // posX의 범위: -oldX <= newX <= (clientWidth - oldX - carrotWidth)
    // posY의 범위: -oldY <= newY <= (clientHeight - oldY - carrotHeight)
    // 한번 옮겨진 위치가 아니라 맨 처음 로드된 위치를 기준으로 translate되고 있다. 왜지???? 그래서 맨 처음 로드할 때 data로 넣어줘야하는데 이게 맞나..
    const dataset = item.dataset;
    // console.log(dataset);
    const oldXString = dataset.oldx;
    const oldXArray = oldXString.split('px');
    const oldX = oldXArray[0];
    const oldYString = dataset.oldy;
    const oldYArray = oldYString.split('px');
    const oldY = oldYArray[0];
    console.log(`oldX -> ${oldX} oldY -> ${oldY}`);
    var newX = getRandomPosition(-oldX, clientX - oldX - itemWidth);
    var newY = getRandomPosition(-oldY, clientY - oldY - itemHeight);
    item.style.transform = `translate(${newX}px, ${newY}px)`;
}

function getRandomPosition(min, max) {
    return Math.random() * (max - min) + min;
}

function createCarrotHTMLString(carrot){
    return `
        <li class="carrot" style = "transform: translate(${carrot.posX}, ${carrot.posY})" data-oldx = "${carrot.posX}" data-oldy = "${carrot.posY}">
            <button class="carrot__btn">
                <img src="img/carrot.png" alt="carrot_img">
            </button>
        </li>
    `;
}

function createBugHTMLString(bug){
    return `
        <li class="bug" style = "transform: translate(${bug.posX}, ${bug.posY})" data-oldX = "${bug.posX}" data-oldY = "${bug.posY}">
            <button class="bug__btn">
                <img src="img/bug.png" alt="bug_img">
            </button>
        </li>
    `;
}

function displayCarrots(carrots){
    carrots__ul.innerHTML = carrots.map(carrot => createCarrotHTMLString(carrot)).join('');
}

function displayBugs(bugs){
    bugs__ul.innerHTML = bugs.map(bug => createBugHTMLString(bug)).join('');
}


// Fetch the items from the JSON file
function loadItems() {
    return fetch('data/items.json')
        .then(response => response.json())
}

// json파일을 동적으로 불러와야함 -> 시간이 걸림 -> promise리턴
loadItems()
    .then(json => {
        displayCarrots(json.carrots);
        displayBugs(json.bugs);
        // setEventListeners(carrots);
    })