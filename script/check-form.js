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
    

document.querySelector('.join-btn').addEventListener('click', (event) => {

    const user = {
        id: id,
        pass: pass,
        passComfirm: passComfirm,
        firstNum : firstNum,
        secondNum:secondNum,
        thirdNum:thirdNum,
        confirmNum:confirmNum
    }
    Object.values(user).forEach((element) => {
        if (element.value == "") {
            // console.log(element.nextSibling.nextElementSibling.innerHTML);
            console.log(element)
        }
    })
    event.preventDefault();

})