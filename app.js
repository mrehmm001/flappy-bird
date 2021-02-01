document.addEventListener('DOMContentLoaded',()=>{
    let bird = document.querySelector('.bird');
    let canvas=document.querySelector('.canvas');
    let birdBottom=500

    bird.style.bottom=birdBottom+'px'
    bird.style.left=325+'px'
    function startGame(){
        birdBottom-=2;
        bird.style.bottom=birdBottom+'px';

    }
    function control(e){
        if(e.keyCode===32){
            jump(); 
        }
    }
    function jump(){
        birdBottom+=50; 
    }

    function createObstacle(){
        let obstacle=document.createElement('div');
        obstacle.classList.add('obstacle');
        canvas.appendChild(obstacle); 
        let obstacleLeft=650;
        obstacle.style.left=obstacleLeft+'px';
        obstacle.style.top=65+'%';
        function moveObstacle(){
            obstacleLeft-=5;
            obstacle.style.left=obstacleLeft+'px';
            if(obstacleLeft==-10){
                canvas.removeChild(obstacle);
                clearInterval(timerId);
            }

        }
        let timerId=setInterval(moveObstacle,20);  
        setTimeout(createObstacle,2000); 
    }
    createObstacle();
    

    document.addEventListener('keyup',control)  
    let timerID = setInterval(startGame,20);
});