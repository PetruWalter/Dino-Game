const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');


document.addEventListener('keydown', function(event) { // space bar=(leertaste) jump
    jump();
})
document.addEventListener('click', function(event) { //Mouse click jump
    jump();
})


function jump() {
    if (dino.classList != 'jump') { //wenn dino keine klasse jump hat,
        dino.classList.add('jump') // dann add ich eine
    }


    //!jede 300 ms mit hilfe von remove von method classList, wird löschen class jump 
    setTimeout(function() {
            dino.classList.remove('jump')
        }, 300) //setTimeout ergibt func 1 mall nach bestimmte Zeit 300 ms
}

let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert('GAME OVER!!! Klicke OK um nochmal zu versuchen!!!')
    }
}, 10)