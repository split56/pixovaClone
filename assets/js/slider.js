const slides=document.querySelectorAll('.client-area')

slides.forEach(function(slide,index){
    slide.style.left = `${index*100}%`
})
let count = 0;

function carousel(){
    if(count > slides.length-1){
        count=0;
    }
    if (count <0){
        count =slides.length-1
    }
    slides.forEach(function(slide){
        slide.style.transform=`translateX(-${count*100}%)`
    })
}
setInterval(function(){
    count++;
    carousel();
},2000)