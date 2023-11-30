let formItem = document.getElementById('form-item');
let listItem = document.getElementById('list-item');
let inputField = document.getElementById('input-field');
let filter = document.getElementById('filter');
let clearBtn = document.getElementById('clear');

function onItemSubmit(e){
    e.preventDefault();
    let newItem = inputField.value;
    if(newItem === ''){
        alert("Please add an item");
        return;
    }

    addItemToDom(newItem)
    addItemToStorage(newItem);
    
    checkUI();
}

function addItemToDom(item){
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    listItem.appendChild(li);
    let button = createButton('remove-item tex-red');
    li.appendChild(button);
    
    inputField.value = '';
    inputField.focus();

}

function addItemToStorage(item) {
    let itemsFromStorage;
    if(localStorage.getItem('items') === null){
        itemsFromStorage = [];
    }else{
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }
    itemsFromStorage.push(item);
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function createButton(classes){
    let button = document.createElement('button');
    button.className = classes;
    let icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon(classes){
    let icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function removeItem(e){
    if(e.target.parentElement.classList.contains('remove-item')){
        e.target.parentElement.parentElement.remove();
    }
    checkUI();
}

function clearItems(){
    while(listItem.firstChild){
        listItem.firstChild.remove(listItem.firstChild);
    }
    checkUI();
}

function filterItems(e){
    let item = document.querySelectorAll('li');
    let text = e.target.value.toLowerCase();

    item.forEach((item) =>{
        let itemName = item.firstChild.textContent.toLowerCase();
        if(itemName.indexOf(text)!= -1){
            item.style.display = 'flex';
        }else{
            item.style.display = 'none';
        }
    })
    checkUI();
}

function checkUI() {
    let item = listItem.querySelectorAll('li');
    if(item.length === 0){
        filter.style.display = 'none';
        clearBtn.style.display = 'none';
    }else{
        filter.style.display = 'block';
        clearBtn.style.display = 'block';
    }
}

formItem.addEventListener('submit', onItemSubmit);
listItem.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
filter.addEventListener('input', filterItems)

checkUI();