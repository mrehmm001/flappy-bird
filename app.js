document.addEventListener('DOMContentLoaded',()=>{
    let bird = document.querySelector('.bird');
    let birdBottom=500

    bird.style.bottom=birdBottom+'px'
    bird.style.left=325+'px'
    function startGame(){
        birdBottom-=2;
        bird.style.bottom=birdBottom+'px';

    }
    function control(e){
        if(e.keyCode===32){
            console.log("test")
            jump(); 
        }
    }
    function jump(){
        birdBottom+=50; 
    }
    document.addEventListener('keyup',control)  
    let timerID = setInterval(startGame,20);
});