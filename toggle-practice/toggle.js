let elements = document.querySelectorAll('.text');

for(element of elements){
    element.addEventListener('click', function(){
        if(!this.dataset.clicked){
            this.setAttribute('data-clicked', 'true');
            this.style.background = '#333';
            this.stye.color = '#fff';
        }else{
            this.removeAtrribute('data-clicked');
            this.removeAttribute('style');
        }
    })
}