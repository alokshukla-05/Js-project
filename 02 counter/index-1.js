const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const countNo = document.querySelector('.no');

let count = 0;

btn1.addEventListener('click', () => {
    if(count!=0){
        count--;
    countNo.textContent = count;
    }else{
        countNo.textContent = `Number can't be Neagtive`;
    }
    

});
btn2.addEventListener('click', () => {
    count = 0;
    countNo.textContent = count;
});
btn3.addEventListener('click', () => {
    count++;
    countNo.textContent = count;
});
