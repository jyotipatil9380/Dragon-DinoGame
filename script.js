score= 0;  
cross=true; 
audio=new Audio('music.mp3'); 
audiogo=new Audio('gameover.mp3');

setTimeout(() => {
    audio.play();
},1000);
document.onkeydown=function(e){
console.log("key code is:",e.keyCode);
if(e.keyCode==38){
    dino=document.querySelector('.dino');
    dino.classList.add('animateDino')
    setTimeout(()=>{
        dino.classList.remove('animateDino')
    },700);

}
if(e.keyCode==39){
    dino=document.querySelector('.dino');

    dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dino.style.left= dinox+ 112 +"px";
}

if(e.keyCode==37){
    dino=document.querySelector('.dino');

    dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dino.style.left= (dinox- 112) +"px";
}
}

setInterval(() => {
    dino=document.querySelector('.dino');
    gameover=document.querySelector('.gameover');
    obstacle=document.querySelector('.obstacle');
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle ,null).getPropertyValue('top'));
    offsetx=Math.abs(dx-ox);
    offsety=Math.abs(dy-oy);
   // console.log(offsetx,offsety);
    if(offsetx<73 && offsety<52){
        gameover.innerHTML="Game Over reload to start";
        obstacle.classList.remove('obstacleani')
   audiogo.play();
   setTimeout(() => {
    audiogo.pause();
    audio.pause();
   },1000);
    }
    else if(offsetx < 14 && cross){
        score+=1;
        updatescore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        },1000);
        setTimeout(() => {
            anidur=parseFloat(window.getComputedStyle(dino,null).getPropertyValue('animation-duration'));
            newdur=anidur-0.1;
            obstacle.style.animationDuration=newdur +'s'; 
        }, 500);
       
    } 

}, 10);

function updatescore(score){
    scorecontainer.innerHTML="YOUR SCORE : "  +score;
} 