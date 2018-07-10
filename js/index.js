document.getElementById('mainburger').onclick = function(e) {
    document.getElementById('mainmenu').classList.toggle('is-active')
    e.preventDefault()
}