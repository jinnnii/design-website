const likeBtn = document.querySelector('.like-btn');
const comantBtn = document.querySelector('.comment-btn');

likeBtn.addEventListener('click',()=>{
    const heart = document.querySelector('.far');
    const heartNum = document.querySelector('.like-num');
    heart.classList.toggle('fas');
    if(heart.className.indexOf('fas')>0){
        heartNum.innerHTML= parseInt(heartNum.innerHTML)+1;
    }
    else{
        heartNum.innerHTML= parseInt(heartNum.innerHTML)-1;
    }
})