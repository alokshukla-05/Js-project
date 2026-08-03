const btn = document.querySelector('#btn');
const color = document.querySelector('#color');
const colorArr = ['red','blue','green','yellow','white','grey','orange','purple','black','#0fb1f1','#42a'];

btn.addEventListener('click',()=>{
    let randomNumber = Math.round(Math.random()*10);
    document.body.style.backgroundColor = colorArr[randomNumber];
    color.textContent = colorArr[randomNumber];
});