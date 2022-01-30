const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');
const text=document.getElementById('textt');
const prog='The focus of of true hospitality is serving others.';
let idx=1;
setInterval(writetext,100);
function writetext(){
    text.innerText=prog.slice(0,idx);
    idx++;
    if(idx>prog.length) idx=1;
}
navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});