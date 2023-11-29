class obj{
    constructor(h, w){
        this.heigth = h;
        this.width = w;
    }
}
height = prompt("enter the height");
width = prompt("enter the width");
const obj1 = new obj(height, width);
function fn(a){
    a.style = 'background-color: black;';
}
const container = document.querySelector('.container');
let i = 0, j = 0;
if(height <= 100 && width <= 200){
    for(i = 0; i <= obj1.heigth; i++){
        const innerContainer = document.createElement('div');
        innerContainer.setAttribute('class', 'innerContainer');
        container.appendChild(innerContainer);
        for(j = 0; j <= obj1.width; j++){
            const box = document.createElement('div');
            box.setAttribute('class', 'box');
            innerContainer.appendChild(box);
        }
    }
}
else{
    alert("retry");
}
const box = document.querySelectorAll(".box");
box.forEach((box1) => {
    box1.setAttribute('onmouseover', "fn(this)");
});

