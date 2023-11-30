let formItem = document.getElementById('form-item');
let listItem = document.getElementById('list-item');
let inputField = document.getElementById('input-field');
let filter = document.getElementById('filter');
let clearBtn = document.getElementById('clear');

function addItem(e){
    e.preventDefault();
    let newItem = inputField.value;
    if(newItem === ''){
        alert("Please add an item");
        return;
    }
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));
    listItem.appendChild(li);
    let button = createButton('remove-item');
    li.appendChild(button);

    inputField.value = '';
    inputField.focus();
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

formItem.addEventListener('submit', addItem);