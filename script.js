const clouds = document.querySelectorAll('.cloud'),
    boat = document.querySelector('.boat')

window.addEventListener('scroll', () => {
    let windowY = window.scrollY
    for (let i = 0; i < clouds.length; i++) {
        const cloud = clouds[i];
        let speed = cloud.getAttribute('speed')
        cloud.style.transform = `translateX(${windowY * speed}px)`
    }
    boat.style.transform = `translateX(${windowY}px)`
})

const div = document.querySelector('.div'),
    images = document.querySelectorAll('.img')

div.addEventListener('mousemove', (e) => {
    // images.forEach(img => {
    //     let speed = img.getAttribute('speed')
    //     let x = (window.innerWidth - e.pageX * speed) / 30
    //     let y = (window.innerHeight - e.pageY * speed) / 10
    //     img.style.transform = `translate(${x}px,${y}px)`
    // })
    for (let i = 0; i < images.length; i++) {
        const img = images[i];
        let speed = img.getAttribute('speed')
        let x = (window.innerWidth - e.pageX * speed) / 30
        let y = (window.innerHeight - e.pageY * speed) / 10
        img.style.transform = `translate(${x}px,${y}px)`
    }


})

const item = document.querySelector('.item'),
    timer = document.querySelectorAll('.timer')
window.addEventListener('scroll', function scroll() {
    if (window.scrollY > item.offsetTop - item.clientHeight * 2) {
        for (let i = 0; i < timer.length; i++) {
            const time = timer[i];
            let count = +time.getAttribute('count')
            function rec(j = 0) {
                time.innerHTML = j++
                if (time.innerHTML < count) {
                    setTimeout(() => {
                        rec(j)
                    }, 30);
                }

            }
            rec()
        }
        window.removeEventListener('scroll', scroll)
    }
})

const title = document.querySelector('.title')
let txt = title.innerHTML
title.innerHTML = ``
function typing(i = 0) {
    title.innerHTML += txt[i]
    i++
    if (i < txt.length) {
        setTimeout(() => {
            typing(i)
        }, 200);
    }
}
typing()

const btns = document.querySelectorAll('.btn'),
root = document.querySelector(':root')
document.documentElement.style.setProperty('--color', localStorage.getItem('birxil'))
for (let i = 0; i < btns.length; i++) {
    const btn = btns[i];
    window.addEventListener('mousemove' , (e)=>{
        let x = e.pageX - btn.offsetLeft
        let y = e.pageY - btn.offsetTop
        btn.style.setProperty('--x' , `${x}px`)
        btn.style.setProperty('--y' , `${y}px`)
    })
    btn.addEventListener('click', ()=>{
        root.style.setProperty('--color' , 'yellow')
        localStorage.setItem('birxil' , 'yellow')
    })
    btn.addEventListener('dblclick', ()=>{
        root.style.setProperty('--color' , 'blue')
        localStorage.setItem('birxil' , 'blue')
    })
    
}

const boxes = document.querySelectorAll('.catalog_box')

for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    box.addEventListener('mousemove', move)
    box.addEventListener('mouseout', remove)
} 
function move(e) {
    halfWidth = this.clientWidth / 2
    let x = e.offsetX - halfWidth
    let y = e.offsetY - halfWidth
    this.style.transform = `rotateX(${-y / 4}deg) rotateY(${x / 4}deg)`
    this.style.transition = `.5 linear`
}
function remove() {
    this.style.transform = `rotate(0)`
}