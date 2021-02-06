var animationMenu = document.querySelectorAll('.activeIcon');
var span = document.querySelectorAll('.violaoIcon');


animationMenu[0].addEventListener('mouseover', ()=>{
    span[0].classList.remove('hidden');
})

animationMenu[1].addEventListener('mouseover', ()=>{
   span[1].classList.remove('hidden');
})

animationMenu[2].addEventListener('mouseover', ()=>{
    span[2].classList.remove('hidden');
 })

 animationMenu[0].addEventListener('mouseout', ()=>{
    span[0].classList.add('hidden');
})

animationMenu[1].addEventListener('mouseout', ()=>{
   span[1].classList.add('hidden');
})

animationMenu[2].addEventListener('mouseout', ()=>{
    span[2].classList.add('hidden');
 })



//  efeito na imagem grande dos irmãos

var imgDupla = document.querySelector('.back');
var imgBackgroundTop = document.querySelector('.img-background');
var icons = document.querySelectorAll('.iconsImgBlank');

imgDupla.addEventListener('mouseover', ()=>{
    imgDupla.style.transition = '1s';
    imgBackgroundTop.style.transition = '1s';
    imgDupla.style.filter = 'brightness(100%)';
    imgBackgroundTop.style.filter = 'brightness(100%)';
    for(var icon of icons){
        icon.style.transition = '2s';
        icon.classList.remove('iconsImgBlank');
        icon.style.cursor = 'pointer';  

        icons[0].addEventListener('click', ()=>{
            icons[0].style.height = '50px';
            icons[0].style.width = '50px';

            function redirect(){
                icons[0].setAttribute('target', '_blank');
                window.open('https://www.facebook.com/leoemateusoficial', '_blank');
            }
            
            function resetImg(){
                icons[0].style.transition = '0.5s'
                icons[0].style.height = '50px';
                icons[0].style.width = '50px';

                setTimeout(redirect, 500)
            }

            function activeButton(){
                icons[0].style.transition = '0.5s'
                icons[0].style.height = '10px';
                icons[0].style.width = '60px';

                setTimeout(resetImg, 500)
            }

            setTimeout(activeButton, 20)
        })


        icons[1].addEventListener('click', ()=>{
            icons[1].style.height = '50px';
            icons[1].style.width = '50px';

            function redirectTwo(){
                window.location.href = '';
            }
            
            function resetImgTwo(){
                icons[1].style.transition = '0.5s'
                icons[1].style.height = '50px';
                icons[1].style.width = '50px';

                setTimeout(redirectTwo, 500);
            }

            function activeButtonTwo(){
                icons[1].style.transition = '0.5s'
                icons[1].style.height = '10px';
                icons[1].style.width = '60px';

                setTimeout(resetImgTwo, 500)
            }

            setTimeout(activeButtonTwo, 20)
        })


        icons[2].addEventListener('click', ()=>{
            icons[2].style.height = '50px';
            icons[2].style.width = '50px';

            function redirectTree(){
                window.location.href = '';
            }
            
            function resetImgTree(){
                icons[2].style.transition = '0.5s'
                icons[2].style.height = '50px';
                icons[2].style.width = '50px';


                setTimeout(redirectTree, 500);
            }

            function activeButtonTree(){
                icons[2].style.transition = '0.5s'
                icons[2].style.height = '10px';
                icons[2].style.width = '60px';

                setTimeout(resetImgTree, 500)
            }

            setTimeout(activeButtonTree, 20)
        })

        icons[3].addEventListener('click', ()=>{
            icons[3].style.height = '50px';
            icons[3].style.width = '50px';

            function redirectFour(){
                window.location.href = '';
            }
            
            function resetImgFour(){
                icons[3].style.transition = '0.5s'
                icons[3].style.height = '50px';
                icons[3].style.width = '50px';


                setTimeout(redirectFour, 500);
            }

            function activeButtonFour(){
                icons[3].style.transition = '0.5s'
                icons[3].style.height = '10px';
                icons[3].style.width = '60px';

                setTimeout(resetImgFour, 500)
            }

            setTimeout(activeButtonFour, 20)
        })


        icons[4].addEventListener('click', ()=>{
            icons[4].style.height = '50px';
            icons[4].style.width = '50px';

            function redirectFive(){
                window.location.href = 'tel:+5516992649045';
            }
            
            function resetImgFive(){
                icons[4].style.transition = '0.5s'
                icons[4].style.height = '50px';
                icons[4].style.width = '50px';


                setTimeout(redirectFive, 500);
            }

            function activeButtonFive(){
                icons[4].style.transition = '0.5s'
                icons[4].style.height = '10px';
                icons[4].style.width = '60px';

                setTimeout(resetImgFive, 500)
            }

            setTimeout(activeButtonFive, 20)
        })
    }
})

imgDupla.addEventListener('mouseout', ()=>{
    imgDupla.style.filter = 'brightness(40%)';
    imgBackgroundTop.style.filter = 'brightness(40%)';
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


// entradas de efeitos do container central do body
var containerCentral = document.querySelector('.media');
var h2 = document.querySelector('#text-h2');
var pText = document.querySelector('#p-text');
var h3 = document.querySelector('#text-h3');
var video = document.querySelector('#video');
var containerText = document.querySelector('.text-video');
var containerGeral = document.querySelector('.container-video-text');


h2.style.opacity = "0";
pText.style.opacity = '0';
h3.style.opacity = '0';
video.style.opacity = '0';


if(window.screen.width > 900){
containerGeral.addEventListener('wheel', ()=>{

        video.style.opacity = '1';
        video.classList.add("animate__animated");
        video.classList.add('animate__fadeInLeftBig');


        h2.style.opacity = '1';
        h2.classList.add("animate__animated");
        h2.classList.add('animate__fadeInDown');


        pText.style.opacity = '1';
        pText.classList.add("animate__animated");
        pText.classList.add('animate__fadeInRight');


        h3.style.opacity = '1';
        h3.classList.add("animate__animated");
        h3.classList.add('animate__bounceInUp');
    })
}

if(window.screen.width <= 900){
    containerGeral.addEventListener('wheel', ()=>{
        video.style.opacity = '1';
        video.classList.add("animate__animated");
        video.classList.add('animate__fadeInLeftBig');

        h2.style.opacity = '1';
        h2.classList.add("animate__animated");
        h2.classList.add('animate__fadeInDown');
    
    
        pText.style.opacity = '1';
        pText.classList.add("animate__animated");
        pText.classList.add('animate__fadeInRight');
    
    
        h3.style.opacity = '1';
        h3.classList.add("animate__animated");
        h3.classList.add('animate__bounceInUp');
    })

   
}