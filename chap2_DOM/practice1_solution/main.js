const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd(){
    // 1. 사용자가 입력한 텍스트를 받아옴
    const text = input.value;
    if(text === ''){
        input.focus();
        return;
    }
    // 2. 새로운 아이템을 만듦(텍스트 + 삭제 버튼)
    const item = creatItem(text);
    // 3. items 컨테이너안에 새로 만든 아이템을 추가한다.
    items.appendChild(item);
    // 4. 새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({block: 'center'});
    // 5. 인풋을 초기화 한다
    input.value = '';
    input.focus();
}
let id = 0; // UUID쓰는게 좋긴함!
function creatItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML = `
            <div class="item">
                <span class="item__name">${text}</span>
                <button class="item__delete">
                    <i class = "fas fa-trash-alt" data-id = ${id}></i>
                </button>
            </div>
            <div class="item__divider"></div>`;
    id++;
    return itemRow;

}

items.addEventListener('click', (event) => {
    const id = event.target.dataset.id;
    if(id){
        const toBeDeleted = document.querySelector(`.item__row[data-id = "${id}"]`);
        toBeDeleted.remove();
    }
});

addBtn.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keypress', event => {
    if(event.key === 'Enter'){
        onAdd();
    }
});


// 지금 코드는 이벤트 리스너를 항목마다 다 추가했음
// 이벤트 위임을 사용해서 개선해보자!
