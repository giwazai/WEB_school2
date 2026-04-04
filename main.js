AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

let arrow = document.querySelector('#arrow-down')
let nav = document.querySelector('.navigation')
let map = document.querySelector('.map')
let question = document.querySelectorAll('.question')
let answer = document.querySelectorAll('.answer')
let timetable = document.querySelector('.timetable')
let isNavOpen = false


nav.addEventListener('click', function () {
    isNavOpen = !isNavOpen
    if (isNavOpen) {
        anime({
            targets: '#arrow-down',
            duration: 100,
            rotate: 180,
            easing: 'linear',

        })
        anime({
            targets: '.map',
            duration: 1000,
            translateX: [
                { value: 400, duration: 0 },
                { value: 0, duration: 1 }
            ],
            easing: 'linear',

        })
        map.style.display = 'flex'
    } else {
        anime({
            targets: '#arrow-down',
            duration: 100,
            rotate: 0,
            easing: 'linear',
        })
        anime({
            targets: '.map',
            duration: 1000,
            translateX: [
                { value: 0, duration: 0 },
                { value: 400, duration: 1 }
            ],
            easing: 'linear',

        })
        setTimeout(() => {
            map.style.display = 'none'
        }, 500)

    }
})

let isQuestionsOpen = [false, false, false, false] 
let height = 800


for (let i = 0; i < question.length; i++) {
    question[i].addEventListener('click', function () {
        isQuestionsOpen[i] = !isQuestionsOpen[i]
        if (isQuestionsOpen[i]){
            answer[i].style.display = 'block'
            height += 200
        } else{
            answer[i].style.display = 'none'
            height -= 200
        }
        timetable.style.height = height + 'px'
    })

}
