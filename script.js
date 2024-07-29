let boxColor = document.querySelector('#change-color-btn');
// console.log()

boxColor.addEventListener('click', colorChange);

function colorChange(e){
    let boxChange = document.querySelector('#color-box');
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    boxChange.style.backgroundColor = '#'+ randomColor;
    
    // Initial code without adding the hexadecimal part
    // let boxChange = document.querySelector('#color-box');
    // boxChange.style.backgroundColor = 'red'
}
