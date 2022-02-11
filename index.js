const turn =document.querySelector('.all');
const body=document.body
const btn =document.querySelectorAll('.logo');
for(let button of btn){
   
    button.addEventListener('click',function(e){
        e.preventDefault();
        console.log('console')
     turn.classList.toggle('rotate')
    }

    )}