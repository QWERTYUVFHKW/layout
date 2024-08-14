/*открытие по клику*/
export function Menu() {
    const mobMenu = document.querySelector('.concealment')

    if (mobMenu.style.display === 'flex') {
        mobMenu.style.display = 'none'
    }
    else {
        mobMenu.style.display = 'flex'
    }
}

const clickMenu = document.querySelector('.b-line')
clickMenu.addEventListener('click', Menu)

/*стили меню*/
const b1 = document.querySelector('.b-line1')
const b2 = document.querySelector('.b-line2')
const b3 = document.querySelector('.b-line3')
const b = document.querySelector('.b-line')
const headPanel = document.querySelector('header')
const headRight = document.querySelector('.head-right')
const net = document.querySelector('.first_section-right')
const svgCol1 = document.querySelector('.section-right-svg-1')
const svgCol2 = document.querySelector('.section-right-svg-3')
const rightText = document.querySelector('.section-right-text')


function styleMenu() {
    b.classList.toggle('b')
    b1.classList.toggle('m1')
    b2.classList.toggle('m2')
    b3.classList.toggle('m3')
    net.classList.toggle('net')
    headPanel.classList.toggle('hP')
    headRight.classList.toggle('hR')
    svgCol1.classList.toggle('svgCol1')
    svgCol2.classList.toggle('svgCol2')
    rightText.classList.toggle('rightText')
}

clickMenu.addEventListener('click', styleMenu)

