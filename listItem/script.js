let formItem = document.getElementById('form-item');
let listItem = document.getElementById('list-item');
let inputField = document.getElementById('input-field');
let btn = document.querySelector('.btn');
let filter = document.getElementById('filter');
let clearBtn = document.getElementById('filter');


function addItem(e){
    e.preventDefault();
    let newItem = inputField.value;
    if(newItem === ''){
        alert('Please add an Item');
        return;
    }
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));
    listItem.appendChild(li);

    inputField.value = '';
    inputField.focus();

}

formItem.addEventListener('submit', addItem);





