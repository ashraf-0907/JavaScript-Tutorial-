const ranColor= ()=>{
    const hex="0123456789ABCDEF";
    let color="#";

    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    console.log(color);
    return color;
}

let k;
const start= document.querySelector('#start');
const stop= document.querySelector('#stop');
const body=document.querySelector('body')


start.addEventListener('click',(e)=>{
    k=setInterval(()=>{
        let color = ranColor();
        body.style.backgroundColor=color;
    },1000);
})

stop.addEventListener('click',(e)=>{
    clearInterval(k);
})