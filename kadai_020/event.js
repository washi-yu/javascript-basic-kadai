const btn = document.getElementById('btn');
const text = document.querySelector('h2');
btn.addEventListener('click',()=>{
    text.innerHTML = 'ボタンをクリックしました';
});