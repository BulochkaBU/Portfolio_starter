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
    if (document.documentElement.scrollTop >= 250) {    
        sidepanel.style.color = '#0f8853';
        divider.style.background = '#0f8853';
        link.forEach(item => {
            item.style.fill = '#0f8853'
            item.addEventListener('mouseenter', function() {
                item.style.fill = '#324265'
            })
            item.addEventListener('mouseleave', function() {
                item.style.fill = '#0f8853'
            })
        })
    } else {        
        sidepanel.style.color = '#fff';
        divider.style.background = '#fff';
        link.forEach(item => {
            item.style.fill = '#fff'
            item.addEventListener('mouseenter', function() {
                item.style.fill = '#0f8853'
            })
            item.addEventListener('mouseleave', function() {
                item.style.fill = '#fff'
            })
        })
    }
})

