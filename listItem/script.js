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
}

formItem.addEventListener('submit', addItem);





