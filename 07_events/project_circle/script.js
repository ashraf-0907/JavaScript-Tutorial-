const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
const btn= document.querySelector('button');
console.log(canvas);

let isDraw=false;

canvas.addEventListener('pointerdown',(e)=>{
   e.preventDefault();
    isDraw=true;
    //console.log(e);
    const centerX=e.clientX-canvas.getBoundingClientRect().left;
    const centerY=e.clientY-canvas.getBoundingClientRect().top;
    const radius= e.width*2;

    context.beginPath();
    context.arc(centerX,centerY,radius,0,2*Math.PI);
    context.strokeStyle= 'white';
    context.stroke();
})

canvas.addEventListener("pointerup", () => {
    isDraw = false;
});

canvas.addEventListener("pointermove", (e) => {
    if (isDraw) {
        const centerX = e.clientX - canvas.getBoundingClientRect().left;
        const centerY = e.clientY - canvas.getBoundingClientRect().top;
        const radius = e.width;

        context.clearRect(0, 0, canvas.width, canvas.height);

        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        context.strokeStyle = "black";
        context.stroke();
    }
});

btn.addEventListener('click',(e)=>{
    console.log("button clicked");
  //  isDraw=false;
    context.clearRect(0,0,canvas.width,canvas.height);
})