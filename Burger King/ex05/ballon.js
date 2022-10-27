//Colors array
let colors = ['red','green','blue'];

//get button
let button = document.getElementById('button');

//add event listener
button.addEventListener('click' , function(){
    
    var ramdomColor = colors[Math.floor(Math.random()  *colors.length)]

    let button = document.getElementById('button');

    button.style.background = ramdomColor;
})

