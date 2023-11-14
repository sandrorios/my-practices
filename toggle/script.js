// let elements = document.querySelectorAll('.text');

// for(element of elements){
//     element.addEventListener('click', function() {
//         if(!this.dataset.clicked){
//             this.setAttribute('data-clicked', 'true');
//             this.style.background = '#ccc';
//             this.style.color = '#000';
//         }else{
//             this.removeAttribute('data-clicked');
//             this.removeAttribute('style');
//         }
//     })
// }

let elements = document.querySelectorAll('.text');

for(element of elements){
    element.addEventListener('click', function() {
        if(!this.dataset.clicked){
            this.setAttribute('data-clicked', 'true');
            this.style.background = '#ccc';
            this.style.color = '#000'
        }else{
            this.removeAttribute('data-clicked');
            this.removeAttribute('style');
        }
    })
}