let formItem = document.getElementById('form-item');
let listItem = document.getElementById('list-item');
let inputField = document.getElementById('input-field');
let filter = document.getElementById('filter');
let clearBtn = document.getElementById('clear');
let btn = document.querySelector('.btn');

function displayItems(){
    const itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.forEach(item => addItemToDom(item));
}
function onItemSubmit(e) {
    e.preventDefault();
    let newItem = inputField.value;
    if(newItem === ''){
        alert("Please add an Item");
        return;

    }
    addItemToDom(newItem);
    addItemToStorage(newItem);

    checkUI()
}

function addItemToDom(item){
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    listItem.appendChild(li);
    let button = createButton('remove-item text-red');
    li.appendChild(button);
    
    inputField.value = '';
    inputField.focus();
    checkUI();
    function createButton(classes){
        let button = document.createElement('button');
        button.className = classes;
        let icon = createIcon('fa-solid fa-xmark');
        button.appendChild(icon);
        return button;
    }
}

function createIcon(classes) {
    let icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function addItemToStorage(item){
    const itemsFromStorage = getItemsFromStorage();
    // if(localStorage.getItem('items') === null) {
    //     itemsFromStorage = [];
    // }else{
    //     itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    // }
    itemsFromStorage.push(item);
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage(){
    let itemsFromStorage;
    if(localStorage.getItem('items') === null) {
        itemsFromStorage = [];
    }else{
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }

    return itemsFromStorage;
}

function removeItem(e){
    if(e.target.parentElement.classList.contains('remove-item')){
        e.target.parentElement.parentElement.remove();
    }
    checkUI();
}

function clearItems() {
    while(listItem.firstChild){
        listItem.firstChild.remove(listItem.firstChild);
    }
    checkUI();
}

function filterItems(e){
    let items = listItem.querySelectorAll('li');
    let text = e.target.value.toLowerCase();

    items.forEach((item) =>{
        const itemName = item.firstChild.textContent.toLowerCase();
        if(itemName.indexOf(text)!= -1){
            item.style.display = 'flex';
        }else{
            item.style.display = 'none';
        }
    })
    checkUI();
}

function checkUI() {
    let items = listItem.querySelectorAll('li');
    if(items.length === 0){
        filter.style.display = 'none';
        clearBtn.style.display = 'none';
    }else{
        filter.style.display = 'block';
        clearBtn.style.display = 'block';
    }
}

filter.addEventListener('input', filterItems)
clearBtn.addEventListener('click', clearItems);
listItem.addEventListener('click', removeItem);
formItem.addEventListener('submit', onItemSubmit);
document.addEventListener('DOMContentLoaded', displayItems);
checkUI();