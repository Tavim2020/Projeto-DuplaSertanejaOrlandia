var logo = document.querySelector('#logo');

logo.addEventListener('click', () => {
    window.location.href = '/';
})

// efeito dos elementos de navegação

var animationMenu = document.querySelectorAll('.activeIcon');
var span = document.querySelectorAll('.violaoIcon');


animationMenu[0].addEventListener('mouseover', () => {
    span[0].classList.remove('hidden');
})

animationMenu[1].addEventListener('mouseover', () => {
    span[1].classList.remove('hidden');
})




animationMenu[0].addEventListener('mouseout', () => {
    span[0].classList.add('hidden');
})


animationMenu[1].addEventListener('mouseout', () => {
    span[1].classList.add('hidden');
})


//slide e div
var widthScreen = window.screen.width;
var imgsSlide = document.querySelectorAll(".box img");


function activeFunction(){
    if (widthScreen > 900){
        for (var imgSlide of imgsSlide) {
            imgSlide.style.cursor = 'pointer';
            imgSlide.addEventListener('click', () => {
                var src = event.target.src

                //  criando elementos
                var div = document.createElement('div');
                var img = document.createElement('img');
                var buttonImgClose = document.createElement('img');

                //  atributo para as variaveis
                buttonImgClose.setAttribute('src', '/images/close-button.png');
                img.setAttribute('src', `${src}`);
                div.setAttribute('id', 'imagensVisuality');
                
                // armazenando a div primaria
                var divFotos = document.querySelector('.fotos');

                //  criando styles para os elementos
                div.style.width = '56vw';
                div.style.height = '56vw';
                div.style.display = 'flex';
                div.style.flexDirection = 'column';
                div.style.position = 'absolute';
                div.style.position = 'relative';



                img.style.width = '56vw';
                img.style.height = 'auto';
                img.style.objectFit = 'cover';
                img.style.objectPosition = 'top center';



                buttonImgClose.style.width = '4vw';
                buttonImgClose.style.position = 'absolute';
                buttonImgClose.style.cursor = 'pointer';
                buttonImgClose.style.top = '1%';
                buttonImgClose.style.right = '1%';
                buttonImgClose.style.zIndex = '10';

                // variavel da div
                var divChange = document.querySelector('#imagensVisuality');


                //adicionando a div primaria mais um elemento
                if(divFotos.children.length === 1){
                divFotos.appendChild(div);
                }

                // adicionando a div das imagens as imagens e o botao
                if(div.children.length === 0){
                div.appendChild(buttonImgClose);
                div.appendChild(img);
                }

                buttonImgClose.addEventListener('click', () => {
                    var target = this.length + 1;

                    var elementLength = buttonImgClose.parentNode.children[target];
                    elementLength.remove();
                    buttonImgClose.remove();

                    var divContainer = document.querySelector('#imagensVisuality');
                    divContainer.remove();
                })
            })
        }
    }
}

window.addEventListener('load', activeFunction)

// animacao nos escritos do fundo
var backText = document.querySelectorAll(".backText");
var movimentationOne = 1.4;
var movimentationTwo = 0;
var movimentationTree = 100;


function move() {
    movimentationOne = movimentationOne + 0.05;
    movimentationTwo = movimentationTwo + 0.1;
    movimentationTree = movimentationTree - 0.08;
    if (movimentationOne >= 100) {
        movimentationOne = -15;
    }
    if (movimentationTwo >= 115) {
        movimentationTwo = -30;
    }

    if (movimentationTree <= 0) {
        movimentationTree = 115;
    }

    backText[0].style.left = `${movimentationOne}%`;
    backText[0].style.top = `${movimentationOne}%`;

    backText[1].style.left = `${movimentationTwo}%`;

    backText[2].style.right = `${movimentationTree}%`;
    backText[2].style.top = `${movimentationTree}%`;

    backText[3].style.right = `${movimentationTwo}%`;

    backText[4].style.right = `${movimentationTwo}%`;

    backText[5].style.top = `${movimentationTwo}%`;

    backText[7].style.left = `${movimentationTwo}%`;

    requestAnimationFrame(move);
}

if(widthScreen > 900){

    window.addEventListener('load', move);



backText[6].style.top = '10%';
backText[6].style.left = '45%';
var moveText = 0;
setInterval(() => {
    moveText++;
    if (moveText === 1) {
        backText[6].style.top = '10%';
        backText[6].style.left = '45%';
    }

    else if (moveText === 2) {
        backText[6].style.top = '20%';
        backText[6].style.left = '10%';
    }

    else if (moveText === 3) {
        backText[6].style.top = '30%';
        backText[6].style.left = '80%';
    }

    else if (moveText === 4) {
        backText[6].style.top = '40%';
        backText[6].style.left = '20%';
    }

    else if (moveText === 5) {
        backText[6].style.top = '50%';
        backText[6].style.left = '70%';
    }

    else if (moveText === 6) {
        backText[6].style.top = '60%';
        backText[6].style.left = '30%';
    }

    else if (moveText === 7) {
        backText[6].style.top = '70%';
        backText[6].style.left = '60%';
    }

    else if (moveText === 8) {
        backText[6].style.top = '80%';
        backText[6].style.left = '40%';
    }

    else if (moveText === 9) {
        backText[6].style.top = '90%';
        backText[6].style.left = '50%';
    }

    else if (moveText === 10) {
        backText[6].style.top = '100%';
        backText[6].style.left = '45%';
    }

    else if (moveText === 11) {
        moveText = 1;
    }

}, 1500);

}
function atualWidth(){
    widthScreen;
}

setInterval(atualWidth, 1)




// footer efect

var iconsFooter = document.querySelectorAll('.iconsFooter');


iconsFooter[0].addEventListener('click', () => {
    iconsFooter[0].style.height = '30px';
    iconsFooter[0].style.width = '30px';

    function redirectFooter() {
        iconsFooter[0].setAttribute('target', '_blank');
        window.open('https://www.facebook.com/leoemateusoficial', '_blank');
    }

    function resetImgFooter() {
        iconsFooter[0].style.transition = '0.5s'
        iconsFooter[0].style.height = '30px';
        iconsFooter[0].style.width = '30px';

        setTimeout(redirectFooter, 500)
    }

    function activeButtonFooter() {
        iconsFooter[0].style.transition = '0.5s'
        iconsFooter[0].style.height = '7px';
        iconsFooter[0].style.width = '40px';

        setTimeout(resetImgFooter, 500)
    }

    setTimeout(activeButtonFooter, 20)
})


iconsFooter[1].addEventListener('click', () => {
    iconsFooter[1].style.height = '30px';
    iconsFooter[1].style.width = '30px';

    function redirectTwoFooter() {
        window.location.href = '';
    }

    function resetImgTwoFooter() {
        iconsFooter[1].style.transition = '0.5s'
        iconsFooter[1].style.height = '30px';
        iconsFooter[1].style.width = '30px';

        setTimeout(redirectTwoFooter, 500);
    }

    function activeButtonTwoFooter() {
        iconsFooter[1].style.transition = '0.5s'
        iconsFooter[1].style.height = '7px';
        iconsFooter[1].style.width = '40px';

        setTimeout(resetImgTwoFooter, 500)
    }

    setTimeout(activeButtonTwoFooter, 20)
})


iconsFooter[2].addEventListener('click', () => {
    iconsFooter[2].style.height = '30px';
    iconsFooter[2].style.width = '30px';

    function redirectTreeFooter() {
        window.location.href = '';
    }

    function resetImgTreeFooter() {
        iconsFooter[2].style.transition = '0.5s'
        iconsFooter[2].style.height = '30px';
        iconsFooter[2].style.width = '30px';


        setTimeout(redirectTreeFooter, 500);
    }

    function activeButtonTreeFooter() {
        iconsFooter[2].style.transition = '0.5s'
        iconsFooter[2].style.height = '7px';
        iconsFooter[2].style.width = '40px';

        setTimeout(resetImgTreeFooter, 500)
    }

    setTimeout(activeButtonTreeFooter, 20)
})

iconsFooter[3].addEventListener('click', () => {
    iconsFooter[3].style.height = '30px';
    iconsFooter[3].style.width = '30px';

    function redirectFourFooter() {
        window.location.href = '';
    }

    function resetImgFourFooter() {
        iconsFooter[3].style.transition = '0.5s'
        iconsFooter[3].style.height = '30px';
        iconsFooter[3].style.width = '30px';


        setTimeout(redirectFourFooter, 500);
    }

    function activeButtonFourFooter() {
        iconsFooter[3].style.transition = '0.5s'
        iconsFooter[3].style.height = '7px';
        iconsFooter[3].style.width = '40px';

        setTimeout(resetImgFourFooter, 500)
    }

    setTimeout(activeButtonFourFooter, 20)
})


iconsFooter[4].addEventListener('click', () => {
    iconsFooter[4].style.height = '30px';
    iconsFooter[4].style.width = '30px';

    function redirectFiveFooter() {
        window.location.href = 'tel:+5516992649045';
    }

    function resetImgFiveFooter() {
        iconsFooter[4].style.transition = '0.5s'
        iconsFooter[4].style.height = '30px';
        iconsFooter[4].style.width = '30px';


        setTimeout(redirectFiveFooter, 500);
    }

    function activeButtonFiveFooter() {
        iconsFooter[4].style.transition = '0.5s'
        iconsFooter[4].style.height = '7px';
        iconsFooter[4].style.width = '40px';

        setTimeout(resetImgFiveFooter, 500)
    }

    setTimeout(activeButtonFiveFooter, 20)
})


// image do footer redirect

var imgFooterRedirect = document.querySelector('#footer-img-logo');

imgFooterRedirect.addEventListener('click', () => {
    window.location.href = '/contato';
})