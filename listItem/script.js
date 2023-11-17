let formItem = document.getElementById('form-item');
let listItem = document.getElementById('list-item');
let inputField = document.getElementById('input-field');
let btn = document.querySelector('.btn');
let filter = document.getElementById('filter');
let clearBtn = document.getElementById('clear');

function onItemSubmit(e) {
    e.preventDefault();
    let newItem = inputField.value;
    if(newItem === ''){
        alert('Please add an Item');
        return;
    }

    addItemDom(newItem)

    inputField.value = '';
    inputField.focus();
    
    checkUI();
}

function addItemDom(item){
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    listItem.appendChild(li);
    let button = createButton('remove-item')
    li.appendChild(button);
}

function createButton(classes) {
    let button = document.createElement('button');
    button.className = classes;
    let icon = createIcon('fa-solid fa-xmark text-red');
    button.appendChild(icon)
    return button;
}

function createIcon(classes) {
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
    let items = listItem.querySelectorAll('li');
    let text = e.target.value.toLowerCase();
    
    items.forEach((items) =>{
        let itemName = items.firstChild.textContent.toLowerCase();
        if(itemName.indexOf(text)!= -1){
            items.style.display = 'flex';
        }else{
            items.style.display = 'none';
        }
    })
    
    checkUI();

}

function checkUI(){
    let items = listItem.querySelectorAll('li');
    if(items.length === 0){
        clearBtn.style.display = 'none';
        filter.style.display = 'none';
    }else{
        clearBtn.style.display = 'block';
        filter.style.display = 'block';
    }
}

filter.addEventListener('input', filterItems);
clearBtn.addEventListener('click', clearItems);
listItem.addEventListener('click', removeItem);
formItem.addEventListener('submit', onItemSubmit);

checkUI();





