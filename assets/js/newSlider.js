const newSlides=document.querySelectorAll('.new')
const prevbtn=document.querySelector('.back-btn')
const nextbtn=document.querySelector('.next-btn')

newSlides.forEach(function(slide,index){
    slide.style.left = `${index*50}%`
})
let newCount = 0;
prevbtn.addEventListener('click',function(){
    newCount-=1;
    newCarousel()

})
nextbtn.addEventListener('click',function(){
    newCount+=1
    newCarousel()
})


function newCarousel(){
    if(newCount > slides.length-1){
        newCount=0;
    }
    if (newCount <0){
        newCount =slides.length-1
    }
    // if(newCount > 1){
    //     prevbtn.style.display='block'
    // }
    // else {
    //     prevbtn.style.display='none'
    // }
    // if(newCount < newSlides.length-1){
    //     nextbtn.style.display='block'
    // }
    // else {
    //     nextbtn.style.display='none'
    // }
    newSlides.forEach(function(slide){
        slide.style.transform=`translateX(-${count*100}%)`
    })
}
// check the slider