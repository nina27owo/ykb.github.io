document.addEventListener('DOMContentLoaded', function () {
    const a = document.querySelector('.mujica .game .kbfish')
    const keys = {}
    document.addEventListener('keydown', function (e) {
        keys[e.key] = true
    })
    document.addEventListener('keyup', function (e) {
        keys[e.key] = false
    })
    setInterval(function () {
        let Top = parseInt(a.style.top) || 200
        let Left = parseInt(a.style.left) || 150
        const space = keys[' ']
        const moveX = space ? 2 : 1
        const moveY = space ? 2 : 1
        let prevLeft = Left

        if (Top <= 2) {
            if (keys['s']) Top += moveY
            if (keys['a']) Left -= moveX
            if (keys['d']) Left += moveX
        } else if (Top >= 265) {
            if (keys['w']) Top -= moveY
            if (keys['a']) Left -= moveX
            if (keys['d']) Left += moveX
        } else if (Left <= 2) {
            if (keys['w']) Top -= moveY
            if (keys['s']) Top += moveY
            if (keys['d']) Left += moveX
        } else if (Left >= 455) {
            if (keys['w']) Top -= moveY
            if (keys['s']) Top += moveY
            if (keys['a']) Left -= moveX
        } else {
            if (keys['w']) Top -= moveY
            if (keys['s']) Top += moveY
            if (keys['a']) Left -= moveX
            if (keys['d']) Left += moveX
        }
        if (Left < prevLeft) {
            a.style.background = 'url(kbimages/kbfish.gif) no-repeat'
            a.style.backgroundSize = 'cover'
        } else if (Left > prevLeft) {
            a.style.background = 'url(kbimages/kbfish2.gif) no-repeat'
            a.style.backgroundSize = 'cover'
        }
        a.style.top = Top + 'px'
        a.style.left = Left + 'px'
    }, 16)
})