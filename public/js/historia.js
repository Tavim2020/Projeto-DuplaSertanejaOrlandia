var logo = document.querySelector('#logo');

logo.addEventListener('click', ()=>{
    window.location.href= '/';
})

// efeito dos elementos de navegação

var animationMenu = document.querySelectorAll('.activeIcon');
var span = document.querySelectorAll('.violaoIcon');


animationMenu[1].addEventListener('mouseover', ()=>{
    span[1].classList.remove('hidden');
})


animationMenu[2].addEventListener('mouseover', ()=>{
    span[2].classList.remove('hidden');
 })

 animationMenu[1].addEventListener('mouseout', ()=>{
    span[1].classList.add('hidden');
})


animationMenu[2].addEventListener('mouseout', ()=>{
    span[2].classList.add('hidden');
 })




 // footer efect

var iconsFooter = document.querySelectorAll('.iconsFooter');


iconsFooter[0].addEventListener('click', ()=>{
    iconsFooter[0].style.height = '30px';
    iconsFooter[0].style.width = '30px';

    function redirectFooter(){
        iconsFooter[0].setAttribute('target', '_blank');
        window.open('https://www.facebook.com/leoemateusoficial', '_blank');
    }
    
    function resetImgFooter(){
        iconsFooter[0].style.transition = '0.5s'
        iconsFooter[0].style.height = '30px';
        iconsFooter[0].style.width = '30px';

        setTimeout(redirectFooter, 500)
    }

    function activeButtonFooter(){
        iconsFooter[0].style.transition = '0.5s'
        iconsFooter[0].style.height = '7px';
        iconsFooter[0].style.width = '40px';

        setTimeout(resetImgFooter, 500)
    }

    setTimeout(activeButtonFooter, 20)
})


iconsFooter[1].addEventListener('click', ()=>{
    iconsFooter[1].style.height = '30px';
    iconsFooter[1].style.width = '30px';

    function redirectTwoFooter(){
        window.location.href = '';
    }
    
    function resetImgTwoFooter(){
        iconsFooter[1].style.transition = '0.5s'
        iconsFooter[1].style.height = '30px';
        iconsFooter[1].style.width = '30px';

        setTimeout(redirectTwoFooter, 500);
    }

    function activeButtonTwoFooter(){
        iconsFooter[1].style.transition = '0.5s'
        iconsFooter[1].style.height = '7px';
        iconsFooter[1].style.width = '40px';

        setTimeout(resetImgTwoFooter, 500)
    }

    setTimeout(activeButtonTwoFooter, 20)
})


iconsFooter[2].addEventListener('click', ()=>{
    iconsFooter[2].style.height = '30px';
    iconsFooter[2].style.width = '30px';

    function redirectTreeFooter(){
        window.location.href = '';
    }
    
    function resetImgTreeFooter(){
        iconsFooter[2].style.transition = '0.5s'
        iconsFooter[2].style.height = '30px';
        iconsFooter[2].style.width = '30px';


        setTimeout(redirectTreeFooter, 500);
    }

    function activeButtonTreeFooter(){
        iconsFooter[2].style.transition = '0.5s'
        iconsFooter[2].style.height = '7px';
        iconsFooter[2].style.width = '40px';

        setTimeout(resetImgTreeFooter, 500)
    }

    setTimeout(activeButtonTreeFooter, 20)
})

iconsFooter[3].addEventListener('click', ()=>{
    iconsFooter[3].style.height = '30px';
    iconsFooter[3].style.width = '30px';

    function redirectFourFooter(){
        window.location.href = '';
    }
    
    function resetImgFourFooter(){
        iconsFooter[3].style.transition = '0.5s'
        iconsFooter[3].style.height = '30px';
        iconsFooter[3].style.width = '30px';


        setTimeout(redirectFourFooter, 500);
    }

    function activeButtonFourFooter(){
        iconsFooter[3].style.transition = '0.5s'
        iconsFooter[3].style.height = '7px';
        iconsFooter[3].style.width = '40px';

        setTimeout(resetImgFourFooter, 500)
    }

    setTimeout(activeButtonFourFooter, 20)
})


iconsFooter[4].addEventListener('click', ()=>{
    iconsFooter[4].style.height = '30px';
    iconsFooter[4].style.width = '30px';

    function redirectFiveFooter(){
        window.location.href = 'tel:+5516992649045';
    }
    
    function resetImgFiveFooter(){
        iconsFooter[4].style.transition = '0.5s'
        iconsFooter[4].style.height = '30px';
        iconsFooter[4].style.width = '30px';


        setTimeout(redirectFiveFooter, 500);
    }

    function activeButtonFiveFooter(){
        iconsFooter[4].style.transition = '0.5s'
        iconsFooter[4].style.height = '7px';
        iconsFooter[4].style.width = '40px';

        setTimeout(resetImgFiveFooter, 500)
    }

    setTimeout(activeButtonFiveFooter, 20)
})


// image do footer redirect

var imgFooterRedirect = document.querySelector('#footer-img-logo');

imgFooterRedirect.addEventListener('click', ()=>{
    window.location.href= '/contato';
})