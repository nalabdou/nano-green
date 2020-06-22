let pills = document.querySelectorAll('[data-toggle="pill"]')
let pillPans = document.querySelectorAll('.tab-pane')
var showedPane = document.querySelector('.tab-pane.show')

pills.forEach((pill, index) => {
    pill.addEventListener('click', function (e) {
        e.preventDefault()
        pills.forEach(t => {
            t.classList.remove('active')
        })
        pillPans.forEach(pane => {
            pane.classList.add('is-hidden')
        })
        this.classList.add('active')
        let toShow = document.querySelector(pill.getAttribute('href'))
        if (!toShow.classList.contains('show')) {
            toShow.classList.add('show')
            let showedPane = document.querySelector('.tab-pane.show')
        }
        toShow.classList.remove('is-hidden')
    })
})
let tabs = document.querySelectorAll('[data-toggle="tab"]')
let tabPans = document.querySelectorAll('.tab-pane')
var showedPane = document.querySelector('.tab-pane.show')

tabs.forEach((tab, index) => {
    tab.addEventListener('click', function (e) {
        e.preventDefault()
        tabs.forEach(t => {
            t.classList.remove('active')
        })
        tabPans.forEach(pane => {
            pane.classList.add('is-hidden')
        })
        this.classList.add('active')
        let toShow = document.querySelector(tab.getAttribute('href'))
        if (!toShow.classList.contains('show')) {
            toShow.classList.add('show')
            let showedPane = document.querySelector('.tab-pane.show')
        }
        toShow.classList.remove('is-hidden')
    })
})

document.addEventListener('DOMContentLoaded', function () {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll('.navbar-burger'),
        0
    )

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {
                // Get the target from the "data-target" attribute
                var target = $el.dataset.target
                var $target = document.getElementById(target)

                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active')
                $target.classList.toggle('is-active')
            })
        })
    }
})
