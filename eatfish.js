let scoreInterval
let timeInterval
function score() {
    near()
    document.getElementById('score').textContent = kb.score
    if (kb.time === 0) {
        gameover()
    } else if (kb.score >= 12000) {
        kbfish5()
    } else if (kb.score >= 7000) {
        kbfish4()
    } else if (kb.score >= 3000) {
        kbfish3()
    } else if (kb.score >= 1000) {
        kbfish2()
    }
}

function kbfish1() {
    const kbfish = document.querySelector('.mujica .game .kbfish')
    kbfish.style.width = '40px'
    kbfish.style.height = '28px'
    kb.scale = 1
}
function kbfish2() {
    const kbfish = document.querySelector('.mujica .game .kbfish')
    kbfish.style.width = '60px'
    kbfish.style.height = '42px'
    kb.scale = 2
}
function kbfish3() {
    const kbfish = document.querySelector('.mujica .game .kbfish')
    kbfish.style.width = '80px'
    kbfish.style.height = '56px'
    kb.scale = 3
}
function kbfish4() {
    const kbfish = document.querySelector('.mujica .game .kbfish')
    kbfish.style.width = '120px'
    kbfish.style.height = '84px'
    kb.scale = 4
}
function kbfish5() {
    const kbfish = document.querySelector('.mujica .game .kbfish')
    kbfish.style.width = '160px'
    kbfish.style.height = '112px'
    kb.scale = 5
} a
function time() {
    kb.time -= 1
    document.getElementById('time').textContent = kb.time
}
function gameover() {
    const end = document.querySelector('.mujica .game .end')
    end.style.display = 'block'
    document.getElementById('endscore').textContent = kb.score
    clearInterval(timeInterval)
    clearInterval(scoreInterval)
    kbfish1()
}
//重叠检测
function near() {
    const kbfish = document.querySelector('.mujica .game .kbfish');
    const kbfishRect = kbfish.getBoundingClientRect();
    const fishList = document.querySelectorAll('.mujica .game .fish > div');
    fishList.forEach(fish => {
        const fishRect = fish.getBoundingClientRect();
        const overlapLeft = Math.min(kbfishRect.right, fishRect.right) - Math.max(kbfishRect.left, fishRect.left);
        const overlapTop = Math.min(kbfishRect.bottom, fishRect.bottom) - Math.max(kbfishRect.top, fishRect.top);
        const overlapRight = overlapLeft;
        const overlapBottom = overlapTop;
        // 判断是否重叠
        if (overlapLeft > 0 && overlapTop > 0 && overlapRight > 0 && overlapBottom > 0) {
            if (fish.classList.contains('f1')) {
                fish.style.display = 'none';
                kb.score += 100;
            } else if (fish.classList.contains('f2')) {
                if (kb.scale >= 2) {
                    fish.style.display = 'none';
                    kb.score += 200;
                } else {
                    gameover();
                }
            } else if (fish.classList.contains('f3')) {
                if (kb.scale >= 3) {
                    fish.style.display = 'none';
                    kb.score += 300;
                } else {
                    gameover();
                }
            } else if (fish.classList.contains('f4')) {
                if (kb.scale >= 4) {
                    fish.style.display = 'none';
                    kb.score += 500;
                } else {
                    gameover();
                }
            } else if (fish.classList.contains('f5')) {
                if (kb.scale >= 5) {
                    fish.style.display = 'none';
                    kb.score += 1000;
                } else {
                    gameover();
                }
            }
        }
    });
}

function fishon() {
    document.getElementById('score').textContent = kb.score
    document.querySelector('.mujica .content').style.display = 'none'
    document.querySelector('.mujica .game').style.display = 'block'
    const kb1 = document.querySelector('.kb')
    kb1.style.background = 'url(kbimages/kbbaka.gif) no-repeat'
    kb1.style.backgroundSize = 'cover'
    kb1.style.top = '80%'
    clearInterval(scoreInterval)
    scoreInterval = setInterval(score, 500)
    timeInterval = setInterval(time, 1000)
    const fishElements = document.querySelectorAll('.mujica .game .fish > div')
    fishElements.forEach(fish => {
        const fishAnimation = Math.floor(Math.random() * 6) + 1
        const fishTime = Math.floor(Math.random() * 11) + 10
        const delay = Math.floor(Math.random() * 286)
        if (fishAnimation % 2 == 0) {
            fish.style.transform = 'rotateY(180deg)'
        }
        fish.style.animation = `swim${fishAnimation} ${fishTime}s linear forwards`
        fish.style.animationDelay = `${delay}s`
    })
}
function fishoff() {
    const con = document.querySelector('.mujica .content')
    con.style.display = 'block'
    const sea = document.querySelector('.mujica .game')
    sea.style.display = 'none'
    const end = document.querySelector('.mujica .game .end')
    end.style.display = 'none'
    const kb1 = document.querySelector('.kb')
    kb1.style.background = 'url(kbimages/tired.gif) no-repeat'
    kb1.style.backgroundSize = 'cover'
    kb1.style.backgroundPosition = '0 -30px'
    kb1.style.top = '80%'
    clearInterval(scoreInterval)
    clearInterval(timeInterval)
    kb.score = 0
    kb.time = 300
    kb.scale = 1
    const fishElements = document.querySelectorAll('.mujica .game .fish > div')
    fishElements.forEach(fish => {
        fish.classList.remove('active')
        fish.style.transform = 'none'
        fish.style.animation = 'none'
        fish.style.display = 'block'
    })
}