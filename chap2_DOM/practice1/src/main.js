const input = document.querySelector('.item_input');
const plusBtn = document.querySelector('.plusBtn');
let items = [];

input.addEventListener('keyup', (event) => {
    if(event.key == 'Enter'){
        const item_name = input.value;
        if(item_name != ""){
            items.push(item_name);
            input.value = "";
            displayItems(items);
        }
    }else{

    }
    console.log(items);
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

const shoppingList = document.querySelector('.shopping_list');
shoppingList.addEventListener('click', (event) => {
    const clicked_item = event.target.dataset.itemname;
    const index = items.indexOf(clicked_item);
    items.splice(index,1);
    displayItems(items);
})