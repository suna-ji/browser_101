const input = document.querySelector('.item_input');
const plusBtn = document.querySelector('.plusBtn');
var shoppingList = document.querySelector('.shopping_list');
let items = [];

input.addEventListener('keyup', (event) => {
    if(event.key == 'Enter'){
        const item_name = input.value;
        if(item_name != ""){
            items.push(item_name);
            shoppingList.focus();
            shoppingList.scrollIntoView({block: "center"});
            input.value = "";
            input.focus();
            // focus하지 않으면 + 버튼 눌렀을 때 커서가 없어져서 다시 입력창에 클릭 후 입력해야 함
            displayItems(items);
            // shoppingList.scrollIntoView({block: 'center'});
        }
    }else{

    }
})

function displayItems(items) {
    const shopping_list = document.querySelector('.shopping_list');
    shopping_list.innerHTML = items.map(item => createHTMLString(item)).join('');
}

function createHTMLString(item) {
    return `
        <div class = "item">
            <p class = "item_name">${item}</p>
            <button class = "trashBtn"><img src="imgs/trash.png" alt="trash" class = "trashBtn_img" data-itemname = "${item}"/></button>
        </div>
    `;
}


plusBtn.addEventListener('click', () => {
    const item_name = input.value;
    if(item_name != ""){
        items.push(item_name);
        input.value = "";
        displayItems(items);
    }else{

    }
})


shoppingList.addEventListener('click', (event) => {
    const clicked_item = event.target.dataset.itemname;
    const index = items.indexOf(clicked_item);
    items.splice(index,1);
    displayItems(items);
})