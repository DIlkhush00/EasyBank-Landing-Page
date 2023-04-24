console.log("Working...");
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');


btnHamburger.addEventListener('click',()=>{
    //below is a simple one for toggling
    //header.classList.toggle('open');
    if(header.classList.contains('open'))
    {
        header.classList.remove('open');
        fadeElems.forEach((ele)=>{
            ele.classList.add('fade-out');
            ele.classList.remove('fade-in');
        })
        document.body.classList.remove('noScrolling');
        
    }
    else{
        header.classList.add('open');
        fadeElems.forEach((ele)=>{
            ele.classList.add('fade-in');
            ele.classList.remove('fade-out');
        })
        document.body.classList.add('noScrolling');
    }
})