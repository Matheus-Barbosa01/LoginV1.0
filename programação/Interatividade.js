// realizar a troca de imagens da senha de acordo com o type do input senha
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