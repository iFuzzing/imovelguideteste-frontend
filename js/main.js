function showPhone(e, phone){
    if(phone.length != 11){
        console.log("Número inválido");
        return
    }

    let fmtPhone = '';
    for(let i = 0; i < phone.length; i++){
        if(i == 0)
            fmtPhone += '(';

        if(i == 2)
            fmtPhone += ') ';

        if(i == 7){
            fmtPhone += '-';
        }

        fmtPhone += phone[i];

    }

    e.target.innerText = fmtPhone;
}

const leftArrow = 37
const rigthArrow = 39

function cpfMask(e){

    if(e.keyCode  == 8 || e.keyCode == leftArrow || e.keyCode == rigthArrow)
        return;

    if(e.keyCode < 48 || e.keyCode > 57){
        e.preventDefault();
    }

    if(e.target.value.length == 3 || e.target.value.length == 7)
        e.target.value += '.';
    else if(e.target.value.length == 11)
        e.target.value += '-';

}

function phoneMask(e){

    if(e.keyCode  == 8 || e.keyCode == leftArrow || e.keyCode == rigthArrow)
        return;

    if(e.keyCode < 48 || e.keyCode > 57){
        e.preventDefault();
    }
    
    if(e.target.value.length == 0){
        e.target.value += '(';
    }
    if(e.target.value.length == 3){
        e.target.value += ') ';
    }
    if(e.target.value.length == 10){
        e.target.value += '-';
    }
}

function sendMessage(e){
    e.preventDefault();
    
   const msgForm = document.querySelector('#formcontact');
   const cpf = document.querySelector('#cpf');
   const phone = document.querySelector('#phone');
   const subject = document.querySelector('#subject');

    if(cpf.value.length != 14){
        alert("Preencha o seu CPF corretamente.")
        return
    }

    if(phone.value.length != 15){
        alert("Preencha o seu número corretamente.")
        return

    }
    
    if(subject.value.length == 0){
        alert("Preencha corretamente com o assunto que se trata o contato.")
        return
    }

    msgForm.reset();
    alert("Sua mensagem foi enviada!");

}

function ruleOfThree(e){
    e.preventDefault();
    
    const a = document.querySelector('#a');
    const b = document.querySelector('#b');
    const c = document.querySelector('#c');
    const x = document.querySelector('#x');

    let result = (c.value * b.value)/a.value;
    if(isNaN(result)){
        alert("Somente números");
        return;
    }

    x.value = result;
}

function toggleModalView(){
    const modalView = document.querySelector('#modal-view');
    if(modalView.classList.contains('hidden')){
        modalView.classList.remove('hidden');
    }else{
        modalView.classList.add('hidden');
    }
}

function toggleHamburgerMenu(){
    const menu = document.querySelector('.hambuger-overlay');
    const btnHamburger = document.querySelector('#btn-hamburger');
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
        btnHamburger.classList.add('hidden');
    }else{
        menu.classList.add('hidden');
        btnHamburger.classList.remove('hidden');
    }
}