window.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header')
        header.classList.toggle('sticky', window.scrollY > 0)
    })
    const bars = document.querySelector('#bars')
    bars.addEventListener('click', function () {
        bars.classList.toggle('active')
        bars.classList.toggle('fa-times')
        bars.classList.toggle('header_menu')
    })
})
