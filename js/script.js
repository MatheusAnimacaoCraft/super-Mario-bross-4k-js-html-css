const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const gameOver = document.querySelector('.game-over');
const start = document.querySelector('.start');

let loop;

const startGame = () => {
    pipe.classList.add('pipe-animation');
    start.style.display = 'none';

    loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
        if (pipePosition < 120 && pipePosition > 0 && marioPosition < 80) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
            mario.src = './Imagen/game-over.png';
            mario.style.width = '65px';
            mario.style.marginLeft = '50px';
    
            gameOver.style.display = 'flex';
            gameOver.style.display = 'block';
    
            clearInterval(loop);
        }
    }, 10);
};

const restartGame = () => {
    gameOver.style.display = 'none';

    pipe.style.left = '';
    pipe.style.animation = '';
    mario.style.animation = '';

    pipe.classList.add('pipe-animation');

    mario.src = './Imagen/mario.gif';
    mario.style.width = '150px';
    mario.style.bottom = '0';

    start.style.display = 'none';

    startGame();
};

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500); // 500 milissegundos = 0,5 segundos
};

document.addEventListener('keydown', jump);

document.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        startGame();
    }
});