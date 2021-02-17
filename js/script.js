document.addEventListener('DOMContentLoaded', function () {

    // TOGGLE NAV 
    var mymenubutton = document.querySelector('.menu-button');
    var mytogglenav = document.querySelector('.toggle-nav');

    mymenubutton.addEventListener('click', function () {
        mytogglenav.classList.toggle('expanded');
    });

    //STICKY NAV - REMOVE EXPANDED CLASS FOR MOBILE
    var stickynavlinks = document.querySelectorAll(".sticky nav a");
    for (var i = 0; i < stickynavlinks.length; i++) {
        stickynavlinks[i].onclick = function () {
            mytogglenav.classList.remove("expanded");
        }
    };

});