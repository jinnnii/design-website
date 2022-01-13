const id = document.frm.id;
const pass = document.frm.pass;
const passComfirm = document.querySelector('#pass-cf');
const firstNum = document.querySelector('#first-num');
const secondNum = document.querySelector('#second-num');
const thirdNum = document.querySelector('#third-num');
const confirmNum = document.querySelector('#code-cf');

const userName = document.frm.name;
const emailFirst = document.querySelector('#email-first');
const emailLast = document.querySelector('#email-last');
const birth = document.frm.birth;
const sex = document.frm.sex;
    

document.querySelector('.join-btn').addEventListener('click',(event) => {
    const user=[
        id,pass,passComfirm,firstNum, secondNum, thirdNum, confirmNum
    ]
    for(let i=0; i<user.length; i++){
        const value = checkValue(user[i]);
        console.log(value);
        if(value){
            let name;
            if(value.name=='id'){
                name='아이디';
            }
            if(value.name=='pass'|| value.name=="pass-cf"){
                name='비밀번호';
            }
            if(value.name=='first-num'
                ||value.name=='second-num'
                || value.name=='third-num'){
                name='휴대폰 번호'
            }
            if(value.name=='code-cf'){
                name='인증번호'
            }
            alertMessage(name);
            value.focus();
            event.preventDefault();
            break;
        }
    }
    if (pass.value.length>0){
        if( pass.value.length<8||pass.value.length>16){
            alert('비밀번호는 8자리 이상 16자리 이하로 설정해주세요');
            pass.focus();
            event.preventDefault();
        }
        if( pass.value!=passComfirm.value){
            alert('비밀번호가 일치하지 않습니다')
            passComfirm.focus();
            event.preventDefault();
        }
    }

});

function checkValue(element){
    if(element.value==""){
        return element;
    }
    return;
}

function alertMessage(name){
    alert(`${name}를 확인해 주세요.`);
}