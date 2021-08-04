/*==================== SHOW MENU ====================*/
/*const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    // Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu') */
/*==================== SHOW MENU 2 ====================*/
const toggleButton = document.getElementById("nav-toggle");
const navList = document.getElementById("nav__list");

toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');


})



/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav__list')
        // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('active')

}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
$(window).on("scroll", function() {
    if ($(window).scrollTop() > 100) {
        $(".l-header").addClass("scroll-header");

    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".l-header").removeClass("scroll-header");


    }
});

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/


// Previously selected topic (if user selected)


// We obtain the current theme that the interface has by validating the dark-theme cla

// We validate if the user previously chose a topi

// Activate / deactivate the theme manually with the button