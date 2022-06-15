const nav_toggle=document.querySelector('.toggle-icon')
const hidden_bar=document.querySelector('.nav-list')
nav_toggle.addEventListener('click',function(){
    hidden_bar.classList.toggle('visible')
})