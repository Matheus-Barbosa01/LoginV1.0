const password = document.querySelector('.senha');
const img = document.querySelector('.img')

function showsenha(){
    if(password.type === 'password'){
        password.setAttribute('type','text');
        img.classList.add('olhoFechado');
    }
    else{
        password.setAttribute('type','password');
        img.classList.remove('olhoFechado');
    }
}