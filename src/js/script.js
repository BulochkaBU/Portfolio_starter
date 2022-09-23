//menu hamburger
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
})

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active')
})

// rating skills
const counters = document.querySelectorAll('.skills__rating-counter')
      lines = document.querySelectorAll('.skills__rating-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
})

//change color sidepanel
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


$(document).ready(function() {
    //validation form
    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                policy: 'required'

            },
            messages: {            
                name: {                
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                },
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введен адрес почты"
                },
                policy: {
                    required: 'Пожалуйста, установите флажок'
                }
            }
        });
        
    };

    validateForms('form');

    // send form email

    $('form').submit(function(e) {
        e.preventDefault();
        if (!$(this).valid()){
            return;
        }
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
            
        }).done(function() {
            console.log('post')
            $(this).find("input").val("");
            $('.modal').fadeIn();
            $('form').trigger('reset');
        });
        return false;
    });


  });



// modal close
const closeModal = document.querySelector('.modal__close')
const modal = document.querySelector('.modal')

closeModal.addEventListener('click', () => {
    modal.style.display = 'none'
})


