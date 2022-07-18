const value = document.getElementById('value');
const container = document.querySelectorAll('.btn');

let counter = 0;

container.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const count = e.currentTarget.classList;

        if(count.contains('decrease')){
            counter--;
        }
        else if(count.contains('increase')){
            counter++;
        }
        else{
            counter = 0;
        }

        if(counter < 0){
            value.style.color = 'red';
        }
        if(counter > 0){
            value.style.color = 'green';
        }
        if(counter == 0){
            value.style.color = '#333';
        }

        value.textContent = counter;
    });
});