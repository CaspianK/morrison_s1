let password = document.getElementById('password')
let show = document.getElementById('show')
let hide = document.getElementById('hide')

show.addEventListener('click', function() {
    password.type = 'text'
    show.style.display = 'none'
    hide.style.display = 'inline'
})

hide.addEventListener('click', function() {
    password.type = 'password'
    show.style.display = 'inline'
    hide.style.display = 'none'
})