var logo = document.querySelector('#logo');

logo.addEventListener('click', ()=>{
    window.location.href= '/';
})

// efeito dos elementos de navegação

var animationMenu = document.querySelectorAll('.activeIcon');
var span = document.querySelectorAll('.violaoIcon');


animationMenu[0].addEventListener('mouseover', ()=>{
    span[0].classList.remove('hidden');
})


animationMenu[2].addEventListener('mouseover', ()=>{
    span[2].classList.remove('hidden');
 })

 animationMenu[0].addEventListener('mouseout', ()=>{
    span[0].classList.add('hidden');
})


animationMenu[2].addEventListener('mouseout', ()=>{
    span[2].classList.add('hidden');
 })

 
 // formulário validacao

 var nameCheck = document.querySelector('#name');
 
 var cidadeCheck = document.querySelector('#city');
 
 var estadoCheck = document.querySelector('#estado');
 
 var emailCheck = document.querySelector('#email');
 
 var telefoneCheck = document.querySelector('#telefone');
 
 var descricaoCheck = document.querySelector('#textArea');

 var button = document.querySelector('#button');



function validation(){
    var name = form.name;
 
    var cidade = form.city;
    
    var estado = form.estado;
    
    var email = form.email;
    
    var telefone = form.telefone;
    
    var descricao = form.textArea;


    if(name.value === ""){

        var namePrompt = prompt('Por favor digite seu Nome:');

        if(namePrompt === ""){
            var namePrompt = prompt('Por favor digite seu Nome:');
            name.focus();
            return false;
        }


        name.value = namePrompt;
        name.focus();
        return false;
    }

    if(name.value.length < 3){

        var namePrompt = prompt('Por favor digite seu Nome, ele não pode conter menos que 3 caracteres.');

        if(namePrompt.length < 3){
            var namePrompt = prompt('Por favor digite seu Nome, ele não pode conter menos que 3 caracteres.');
            name.value = namePrompt;
            name.focus();
            return false;
        }


        name.value = namePrompt;
        name.focus();
        return false;
    }



    if(cidade.value === ""){

        var cidadePrompt = prompt('Por favor digite sua Cidade:');

        if(cidadePrompt === ""){
            var cidadePrompt = prompt('Por favor digite sua Cidade:');
            cidade.focus();
            return false;
        }


        cidade.value = cidadePrompt;
        cidade.focus();
        return false;
    }


    if(cidade.value.length < 3){

        var cidadePrompt = prompt('Por favor digite sua Cidade, ela não pode ter menos que 3 caracteres.');

        if(cidadePrompt.length < 3){
            var cidadePrompt = prompt('Por favor digite sua Cidade, ela não pode ter menos que 3 caracteres.');
            cidade.value = cidadePrompt;
            cidade.focus();
            return false;
        }


        cidade.value = cidadePrompt;
        cidade.focus();
        return false;
    }


    if(estado.value === ""){

        var estadoPrompt = prompt('Por favor digite seu Estado:');

        if(estadoPrompt === ""){
            var estadoPrompt = prompt('Por favor digite seu Estado:');
            estado.focus();
            return false;
        }


        estado.value = estadoPrompt;
        estado.focus();
        return false;
    }

    if(estado.value.length < 3){

        var estadoPrompt = prompt('Por favor digite seu Estado, ele não pode ter menos que 3 caracteres.');

        if(estadoPrompt.length < 3){
            var estadoPrompt = prompt('Por favor digite seu Estado, ele não pode ter menos que 3 caracteres.');
            estado.value = estadoPrompt;
            estado.focus();
            return false;
        }


        estado.value = estadoPrompt;
        estado.focus();
        return false;
    }

    if(email.value === ""){

        var emailPrompt = prompt('Por favor digite seu Email:');

        if(emailPrompt === ""){
            var emailPrompt = prompt('Por favor digite seu Email:');
            email.focus();
            return false;
        }


        email.value = emailPrompt;
        email.focus();
        return false;
    }


    if(email.value.length < 11){

        var emailPrompt = prompt('Por favor digite seu Email, ele não pode ter menos que 11 caracteres.');

        if(emailPrompt.length < 11){
            var emailPrompt = prompt('Por favor digite seu Email, ele não pode ter menos que 11 caracteres.');
            email.value = emailPrompt;
            email.focus();
            return false;
        }


        email.value = emailPrompt;
        email.focus();
        return false;
    }


    if(telefone.value === ""){

        var telefonePrompt = prompt('Por favor digite seu Telefone:');

        if(telefonePrompt === ""){
            var telefonePrompt = prompt('Por favor digite seu Telefone:');
            telefone.focus();
            return false;
        }


        telefone.value = telefonePrompt;
        telefone.focus();
        return false;
    }


    if(telefone.value.length < 11){

        var telefonePrompt = prompt('Por favor digite seu Telefone, ele não pode ter menos que 11 caracteres(Somente Números com o DDD antes).');

        if(telefonePrompt.length < 11){
            var telefonePrompt = prompt('Por favor digite seu Telefone, ele não pode ter menos que 11 caracteres(Somente Números com o DDD antes).');
            telefone.value = telefonePrompt;
            telefone.focus();
            return false;
        }


        telefone.value = telefonePrompt;
        telefone.focus();
        return false;
    }



    if(descricao.value === ""){

        var descricaoPrompt = prompt('Por favor digite o que gostaria de saber.');

        if(descricaoPrompt === ""){
            var descricaoPrompt = prompt('Por favor digite so que gostaria de saber.');
            descricao.focus();
            return false;
        }


        descricao.value = descricaoPrompt;
        descricao.focus(); 
        return false;
    }


    if(descricao.value.length < 25){

        var descricaoPrompt = prompt('Por favor digite o que gostaria de saber. Essa informação não pode ter menos que 25 caracteres.');

        if(descricaoPrompt.length < 25){
            var descricaoPrompt = prompt('Por favor digite o que gostaria de saber. Essa informação não pode ter menos que 25 caracteres.');
            descricao.value = descricaoPrompt;
            descricao.focus();
            return false;
        }


        descricao.value = descricaoPrompt;
        descricao.focus(); 
        return false;
    }

    


}

function disabledFalse(){
    if((nameCheck.value.length >= 3) && (cidadeCheck.value.length >= 3) && (estadoCheck.value.length >= 3) && (emailCheck.value.length >= 11) && (telefoneCheck.value.length >= 11) && (descricaoCheck.value.length >= 25)){
        button.disabled = false;
        button.style.backgroundColor = '#7BB2D9'
        button.style.color = '#fff';
    }

    else if((nameCheck.value.length < 3) ||  (cidadeCheck.value.length < 3) || (estadoCheck.value.length < 3) || (emailCheck.value.length < 11) || (telefoneCheck.value.length < 11) || (descricaoCheck.value.length < 25)){
        button.disabled = true;
        button.style.backgroundColor = '#D64550'
        button.style.color = '#000';
    }
}


setInterval(disabledFalse, 10);


// efeito da imagem ao lado do form
var backgroundMouseover = document.querySelector('.background-image');

backgroundMouseover.addEventListener('mouseover', ()=>{
    var imageCenter = document.querySelector('#img-c');
    var imageBorder = document.querySelector('.image-border');

    imageCenter.style.transform = 'rotateX(90deg)';
    imageBorder.style.transition = '2.2s';
    imageBorder.style.opacity = '1';
})

backgroundMouseover.addEventListener('mouseout', ()=>{
    var imageCenter = document.querySelector('#img-c');
    var imageBorder = document.querySelector('.image-border');

    imageCenter.style.transform = 'rotateX(0deg)';
    imageBorder.style.transition = '2.2s';
    imageBorder.style.opacity = '0.7';
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
    window.location.href= 'tel:+5516992649045';
})