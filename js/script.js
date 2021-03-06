document.addEventListener('DOMContentLoaded', function () {

    //TOGGLE NAV MOBILE MENU FOR SMALL SCREENS
    const menubutton = document.querySelector('.menu-button');
    const menunav = document.querySelector('.toggle-nav');
    menubutton.addEventListener('click', function () {
        if (menunav.getAttribute('data-navstate') === 'open') {
            // if true do this
            menunav.setAttribute('data-navstate', 'closed');
        } else {
            // else (if false) do this:
            menunav.setAttribute('data-navstate', 'open');
        };
    });

    //STICKY NAV - CLOSE THE NAV ON STICKY HEADER NAV LINK CLICKS
    const stickynavlinks = document.querySelectorAll(".sticky nav a");
    for (let i = 0; i < stickynavlinks.length; i++) {
        stickynavlinks[i].addEventListener('click', function () {
            menunav.setAttribute('data-navstate', 'closed');
        });
    };

});