let score = 0;
const game=document.getElementById('gamepage');
function spawnZombie(){

    let zombie =document.createElement('div');
    zombie.classList.add('zombie');
    game.appendChild(zombie);

    x=window.innerHeight+40;
    y=Math.random()*window.innerWidth;
    zombie.style.top=`${x}px`
    zombie.style.left=`${y}px`
    setTimeout(() => {
        zombie.style.top=`${window.innerHeight / 2 -15}px` 
        zombie.style.left=`${window.innerWidth / 2 -25}px` 
   
    }, 100);
    function killzombie(){
        game.removeChild(zombie);
        score++;
    }
   zombie.addEventListener('click',killzombie)

   setTimeout(() => {
    if(document.body.contains(zombie)){

        clearInterval(gameIntervel);
        zombie.removeEventListener('click',killzombie)
        document.getElementById('txt').innerHTML=`score : ${score}`
        document.getElementById('popup').style.display='block';
        let zombies = document.querySelectorAll('.zombie');
        zombies.forEach(z => game.removeChild(z));

    }
    
   }, 5000);



}

let gameIntervel = setInterval(spawnZombie,1000)