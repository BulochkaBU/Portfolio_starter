const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
})

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active')
})

const counters = document.querySelectorAll('.skills__rating-counter')
      lines = document.querySelectorAll('.skills__rating-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
})

const sidepanel = document.querySelector('.sidepanel')
const divider = document.querySelector('.sidepanel__divider')
const link = document.querySelectorAll('.sidepanel__link svg path')

window.addEventListener("scroll", function() {
    if (document.documentElement.scrollTop >= 350) {    
        sidepanel.style.color = '#7fff00';
        divider.style.background = '#7fff00';
        link.forEach(item => {
            item.style.fill = '#7fff00'
            item.addEventListener('mouseenter', function() {
                item.style.fill = '#000'
            })
            item.addEventListener('mouseleave', function() {
                item.style.fill = '#7fff00'
            })
        })
    } else {        
        sidepanel.style.color = '#000';
        divider.style.background = '#000';
        link.forEach(item => {
            item.style.fill = '#000'
            item.addEventListener('mouseenter', function() {
                item.style.fill = '#7fff00'
            })
            item.addEventListener('mouseleave', function() {
                item.style.fill = '#000'
            })
        })
    }
})

