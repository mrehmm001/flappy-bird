document.addEventListener('DOMContentLoaded',()=>{
    let bird = document.querySelector('.bird');
    let canvas=document.querySelector('.canvas');
    let score = document.querySelector('.score');
    let birdBottom=500
    let birdLeft=260;
    let gameOver=false;
    let scoreCount=0;

    bird.style.bottom=birdBottom+'px'
    bird.style.left=birdLeft+'px'
    function startGame(){
        birdBottom-=3; 
        bird.style.bottom=birdBottom+'px';

        //bird collition
        if(birdBottom<=158){
            clearInterval(timerID);
            gameOver=true;
            
        }

    }
    function control(e){
        if(e.keyCode===32){
            jump(); 
        }
    }
    function jump(){
        bird.style.transform= 'rotate(-20deg)';
        birdBottom+=50; 
        setTimeout(()=>{
            bird.style.transform= 'rotate(0deg)';
        },2000)

        
        
    }

    function createObstacle(){
        let obstacle=document.createElement('div');
        let jumpedOver=false;
        obstacle.classList.add('obstacle');
        canvas.appendChild(obstacle); 
        let obstacleLeft=690;
        let obstacleBottom=(Math.random()*-300)+30;
        obstacle.style.left=obstacleLeft+'px';
        obstacle.style.bottom=obstacleBottom+'px';

        function moveObstacle(){
            obstacleLeft-=5;
            obstacle.style.left=obstacleLeft+'px';
            if(obstacleLeft==-10){
                canvas.removeChild(obstacle);
                clearInterval(obstacleID);
            }
           if(  birdLeft>=obstacleLeft -90  &&  birdLeft<=obstacleLeft+60 && birdBottom<=obstacleBottom+500){
               gameOver=true
            }

            if(birdLeft>=obstacleLeft -90  &&  birdLeft<=obstacleLeft+60 && birdBottom>obstacleBottom+500 && !jumpedOver){
                jumpedOver=true;
                scoreCount++;
                score.innerHTML=scoreCount;  
            }


            if(gameOver){
                clearInterval(obstacleID);
                return;
            }




        }

        
        let obstacleID=setInterval(moveObstacle,40);  
        if(!gameOver){
            setTimeout(createObstacle,3000);  
        }
        
    }
    createObstacle();
    

    document.addEventListener('keyup',control)  
    let timerID = setInterval(startGame,20);
});