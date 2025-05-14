//状态值
const kb = {
    healthstatus: 100,
    mood: 100,
    favorability: 50,
    intelligence: 50,
    hungry: 50,
    score: 0,
    time: 300,
    scale: 1
}
//获取更新状态值
document.getElementById('intelligence').textContent = kb.intelligence
document.getElementById('healthstatus').textContent = kb.healthstatus
document.getElementById('favorability').textContent = kb.favorability
document.getElementById('mood').textContent = kb.mood
document.getElementById('hungry').textContent = kb.hungry
//鼠标样式状态
let cursorstatus = 0
function cursor_chui() {
    const a = document.querySelector('.w')
    a.style.cursor = 'url(kbimages/chui.png), auto'
    cursorstatus = 1
}
function cursor_hand() {
    const a = document.querySelector('.w')
    a.style.cursor = 'url(kbimages/hand.png), auto'
    cursorstatus = 2
}
function cursor_food() {
    const a = document.querySelector('.w')
    a.style.cursor = 'url(kbimages/food.png), auto'
    cursorstatus = 3
}
function cursor_shubiao() {
    const a = document.querySelector('.w')
    a.style.cursor = 'default'
    cursorstatus = 0
}
//点击操作
function kbclick() {
    if (cursorstatus == 1) {
        kb.healthstatus -= 5
        kb.mood -= 5
        kb.favorability -= 3
        const rainy = document.querySelector('.w')
        rainy.classList.add('clicked1')
        setTimeout(() => {
            rainy.classList.remove('clicked1')
        }, 3000)
    } else if (cursorstatus == 2) {
        kb.mood += 3
        kb.favorability += 3
        const stroke = document.querySelector('.w')
        stroke.classList.add('clicked2')
        setTimeout(() => {
            stroke.classList.remove('clicked2')
        }, 3000)
    } else if (cursorstatus == 3) {
        kb.healthstatus += 2
        kb.favorability += 1
        kb.hungry += 3
        kb.intelligence += 1
        const brain = document.querySelector('.w')
        brain.classList.add('clicked3')
        setTimeout(() => {
            brain.classList.remove('clicked3')
        }, 3000)
    }
    //点击后更新状态
    document.getElementById('intelligence').textContent = kb.intelligence
    document.getElementById('healthstatus').textContent = kb.healthstatus
    document.getElementById('favorability').textContent = kb.favorability
    document.getElementById('mood').textContent = kb.mood
    document.getElementById('hungry').textContent = kb.hungry
    if (kb.healthstatus <= 0) {
        dead()
    }
    if (kb.favorability <= 0) {
        kbgo()
    }
    if (kb.mood <= 0) {
        kbgo()
    }
}
//开关窗口
function chuqin() {
    const chu = document.querySelector('.chuqin')
    chu.style.visibility = 'visible'
    computeroff()
    bubbleoff()
    mujicaoff()
    jiting()
}
function buchuqin() {
    const buchu = document.querySelector('.chuqin')
    buchu.style.visibility = 'hidden'
}
//出勤内调用更新场景
function jiting() {
    const bg = document.querySelector('.w')
    bg.style.background = 'url(images/jt.jpg) no-repeat'
    bg.style.backgroundSize = 'cover'
    const kb = document.querySelector('.kb')
    kb.style.background = 'url(kbimages/kbok.gif) no-repeat'
    kb.style.backgroundSize = 'cover'
    kb.style.top = '50%'
    const sl = document.querySelector('.sleep')
    sl.style.visibility = 'hidden'
}
//button1
function chaoshangji() {
    const yueji = document.querySelector('.choose .song .img')
    let random = Math.floor(Math.random() * 50) + 1
    const bg = [
        'url(songs/aaa.png)', 'url(songs/acid.png)', 'url(songs/aje.png)', 'url(songs/am.png)', 'url(songs/arais.png)',
        'url(songs/bbb.png)', 'url(songs/bear.png)', 'url(songs/birth.png)', 'url(songs/black.png)', 'url(songs/chilun.png)',
        'url(songs/emp.png)', 'url(songs/Ene.png)', 'url(songs/f135.png)', 'url(songs/fan.png)', 'url(songs/fft.png)',
        'url(songs/FR.png)', 'url(songs/gc.png)', 'url(songs/GDP.png)', 'url(songs/guijiao.png)', 'url(songs/hrx.png)',
        'url(songs/jc.png)', 'url(songs/jingle.png)', 'url(songs/LAMIA.png)', 'url(songs/larva.png)', 'url(songs/lia.png)',
        'url(songs/LK.png)', 'url(songs/lx.png)', 'url(songs/ms.png)', 'url(songs/nu.png)', 'url(songs/os.png)',
        'url(songs/oto.png)', 'url(songs/ow.png)', 'url(songs/PAN.png)', 'url(songs/QZ.png)', 'url(songs/rap.png)',
        'url(songs/regulus.png)', 'url(songs/rtr.png)', 'url(songs/sage.png)', 'url(songs/smog.png)', 'url(songs/Titania.png)',
        'url(songs/Trr.png)', 'url(songs/TT.png)', 'url(songs/ver.png)', 'url(songs/virtus.png)', 'url(songs/wipe.png)',
        'url(songs/wo.png)', 'url(songs/xin.png)', 'url(songs/XY.png)', 'url(songs/aaa.png)', 'url(songs/acid.png)'
    ]

    const index = random - 1
    yueji.style.background = bg[index]
    const kb1 = document.querySelector('.kb')
    kb1.style.background = 'url(kbimages/chai.gif) no-repeat'
    kb1.style.backgroundSize = 'cover'
    kb.mood += 2
    kb.favorability += 2
    kb.intelligence -= 1
    if (kb.hungry >= 5) {
        kb.hungry -= 5
    } else {
        kb.hungry = 0
        kb.healthstatus -= 3
        alert('咖波太饿了，快去喂点食物吧')
    }
    document.getElementById('intelligence').textContent = kb.intelligence
    document.getElementById('healthstatus').textContent = kb.healthstatus
    document.getElementById('favorability').textContent = kb.favorability
    document.getElementById('mood').textContent = kb.mood
    document.getElementById('hungry').textContent = kb.hungry
    if (kb.healthstatus <= 0) {
        dead()
    }
    if (kb.favorability <= 0) {
        kbgo()
    }
    if (kb.mood <= 0) {
        kbgo()
    }
    if (kb.intelligence <= 0) {
        kbcrazy()
    }
}
//button2
function shangji() {
    const xiamai = document.querySelector('.choose .song .img')
    let random = Math.floor(Math.random() * 58) + 1
    const bg = ['url(songs2/2000.png)', 'url(songs2/ama.png)', 'url(songs2/brain.png)', 'url(songs2/cang.png)', 'url(songs2/cm.png)',
        'url(songs2/conflict.png)', 'url(songs2/cp.png)', 'url(songs2/cth.png)', 'url(songs2/cy.png)', 'url(songs2/ding.png)',
        'url(songs2/dong.png)', 'url(songs2/dra.png)', 'url(songs2/DW.png)', 'url(songs2/emo.png)', 'url(songs2/ener.png)',
        'url(songs2/fa.png)', 'url(songs2/FFT.png)', 'url(songs2/flower.png)', 'url(songs2/GDP.png)', 'url(songs2/gemini.png)',
        'url(songs2/hachi.png)', 'url(songs2/hot.png)', 'url(songs2/huawei.png)', 'url(songs2/irr.png)', 'url(songs2/kafu.png)',
        'url(songs2/kairos.png)', 'url(songs2/KB.png)', 'url(songs2/last.png)', 'url(songs2/laur.png)', 'url(songs2/ld.png)',
        'url(songs2/life.png)', 'url(songs2/lift.png)', 'url(songs2/light.png)', 'url(songs2/maxi.png)', 'url(songs2/miku.png)',
        'url(songs2/milk.png)', 'url(songs2/mofa.png)', 'url(songs2/mp.png)', 'url(songs2/mr.png)', 'url(songs2/pink.png)',
        'url(songs2/reder.png)', 'url(songs2/ri1.png)', 'url(songs2/rtr.png)', 'url(songs2/sakura.png)', 'url(songs2/six.png)',
        'url(songs2/sl.png)', 'url(songs2/ss.png)', 'url(songs2/steel.png)', 'url(songs2/sz.png)', 'url(songs2/ttc.png)',
        'url(songs2/val.png)', 'url(songs2/veryhot.png)', 'url(songs2/weone.png)', 'url(songs2/wf.png)', 'url(songs2/wo.png)',
        'url(songs2/xewel.png)', 'url(songs2/yq.png)', 'url(songs2/YYY.png)']
    const index = random - 1
    xiamai.style.background = bg[index]
    const kb1 = document.querySelector('.kb')
    kb1.style.background = 'url(kbimages/kbc.gif) no-repeat'
    kb1.style.backgroundSize = 'cover'
    kb1.style.backgroundPosition = '-18px 0'
    kb.mood += 2
    kb.favorability += 2
    kb.intelligence -= 1
    if (kb.hungry >= 3) {
        kb.hungry -= 3
    } else {
        kb.hungry = 0
        kb.healthstatus -= 2
        alert('咖波太饿了，快去喂点食物吧')
    }
    document.getElementById('intelligence').textContent = kb.intelligence
    document.getElementById('healthstatus').textContent = kb.healthstatus
    document.getElementById('favorability').textContent = kb.favorability
    document.getElementById('mood').textContent = kb.mood
    document.getElementById('hungry').textContent = kb.hungry
    if (kb.healthstatus <= 0) {
        dead()
    }
    if (kb.favorability <= 0) {
        kbgo()
    }
    if (kb.mood <= 0) {
        kbgo()
    }
    if (kb.intelligence <= 0) {
        kbcrazy()
    }
}
//回家
function backhome() {
    const bg = document.querySelector('.w')
    bg.style.background = 'url(images/home.png) no-repeat'
    bg.style.backgroundSize = 'cover'
    bg.style.backgroundPosition = '0px -60px'
    const kb1 = document.querySelector('.kb')
    kb1.style.background = 'url(kbimages/tired.gif) no-repeat'
    kb1.style.backgroundSize = 'cover'
    kb1.style.backgroundPosition = '0 -30px'
    kb1.style.top = '80%'
    const chuqin = document.querySelector('.chuqin')
    chuqin.style.visibility = 'hidden'
    const sl = document.querySelector('.sleep')
    sl.style.visibility = 'visible'
    computeron()
    setTimeout(() => {
        bubbleon()
    }, 300)
}
function computeron() {
    const com = document.querySelector('.computer')
    com.style.display = 'block'
}
function bubbleon() {
    const bubble = document.querySelector('.computer .bubble')
    bubble.classList.add('active')
}
function computeroff() {
    const com = document.querySelector('.computer')
    com.style.display = 'none'
}
function bubbleoff() {
    const bubble = document.querySelector('.computer .bubble')
    bubble.classList.remove('active')
}
function mujicaon() {
    const com = document.querySelector('.mujica')
    com.style.visibility = 'visible'
}
function mujicaoff() {
    const com = document.querySelector('.mujica')
    com.style.visibility = 'hidden'
    shitoff()
    fishoff()
}
function lose() {
    kb.intelligence -= 1
    document.getElementById('intelligence').textContent = kb.intelligence
    if (kb.intelligence <= 0) {
        kbcrazy()
    }
}

let intelligenceInterval

function shiton() {
    const con = document.querySelector('.mujica .content')
    con.style.display = 'none'
    const vid = document.querySelector('.mujica .movie video')
    vid.style.display = 'block'
    intelligenceInterval = setInterval(lose, 10000)
    const kb1 = document.querySelector('.kb')
    kb1.style.background = 'url(kbimages/kbbaka.gif) no-repeat'
    kb1.style.backgroundSize = 'cover'
    kb1.style.top = '80%'
}
function shitoff() {
    const con = document.querySelector('.mujica .content')
    con.style.display = 'block'
    const vid = document.querySelector('.mujica .movie video')
    vid.style.display = 'none'
    clearInterval(intelligenceInterval)
    const kb1 = document.querySelector('.kb')
    kb1.style.background = 'url(kbimages/tired.gif) no-repeat'
    kb1.style.backgroundSize = 'cover'
    kb1.style.backgroundPosition = '0 -30px'
    kb1.style.top = '80%'
}
//出门
function goout() {
    computeroff()
    bubbleoff()
    mujicaoff()
    const bg = document.querySelector('.w')
    bg.style.background = 'url(images/bg.jpeg) no-repeat'
    bg.style.backgroundSize = 'cover'
    const kb = document.querySelector('.kb')
    kb.style.background = 'url(kbimages/kbc.gif) no-repeat'
    kb.style.backgroundSize = 'cover'
    kb.style.backgroundPosition = '-18px 0'
    kb.style.top = '50%'
    const chuqin = document.querySelector('.chuqin')
    chuqin.style.visibility = 'hidden'
    const sl = document.querySelector('.sleep')
    sl.style.visibility = 'hidden'
}
//sleep
function sleep() {
    const kb1 = document.querySelector('.kb')
    kb1.style.background = 'url(kbimages/kbsleep.gif) no-repeat'
    kb1.style.backgroundSize = 'cover'
    kb1.style.top = '80%'
    kb.mood += 2
    if (kb.hungry >= 1) {
        kb.hungry -= 1
    } else {
        kb.healthstatus -= 2
        alert('咖波太饿了，快去喂点食物吧')
    }
    document.getElementById('intelligence').textContent = kb.intelligence
    document.getElementById('healthstatus').textContent = kb.healthstatus
    document.getElementById('favorability').textContent = kb.favorability
    document.getElementById('mood').textContent = kb.mood
    document.getElementById('hungry').textContent = kb.hungry
    if (kb.healthstatus <= 0) {
        dead()
    }
}
function dead() {
    const w1 = document.querySelector('.w')
    const kb1 = document.querySelector('.kb')

    w1.style.transition = 'background - color 5s ease - in - out'
    w1.style.backgroundImage = 'none'
    w1.style.backgroundColor = 'white'

    setTimeout(() => {
        kb1.style.background = 'url(kbimages/kba.gif)'
        kb1.style.backgroundSize = 'cover'
    }, 5000)
    const children = w1.children

    for (let i = 0; i < children.length; i++) {
        const child = children[i]
        if (child !== kb1) {
            child.style.display = 'none'
        }
    }
    alert('游戏结束,达成结局1')
    alert('您的咖波升天了')
}
function kbgo() {
    const w1 = document.querySelector('.w')
    const kb1 = document.querySelector('.kb')

    w1.style.transition = 'background - color 5s ease - in - out'
    w1.style.backgroundImage = 'none'
    w1.style.backgroundColor = 'white'

    setTimeout(() => {
        kb1.style.background = 'url(kbimages/kbgo.gif)'
        kb1.style.backgroundSize = 'cover'
    }, 5000)
    const children = w1.children

    for (let i = 0; i < children.length; i++) {
        const child = children[i]
        if (child !== kb1) {
            child.style.display = 'none'
        }
    }
    alert('游戏结束,达成结局2')
    alert('您的咖波因为心情不好或不喜欢你而离家出走')
}
function kbcrazy() {
    const w1 = document.querySelector('.w')
    const kb1 = document.querySelector('.kb')

    w1.style.transition = 'background - color 5s ease - in - out'
    w1.style.backgroundImage = 'none'
    w1.style.backgroundColor = 'white'

    setTimeout(() => {
        kb1.style.background = 'url(kbimages/kbbaka.gif)'
        kb1.style.backgroundSize = 'cover'
    }, 2000)
    const children = w1.children

    for (let i = 0; i < children.length; i++) {
        const child = children[i]
        if (child !== kb1) {
            child.style.display = 'none'
        }
    }
    clearInterval(intelligenceInterval)
    alert('游戏结束,达成结局3')
    alert('您的咖波因为理智过低永久性变成了笨蛋')
}