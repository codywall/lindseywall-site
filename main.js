document.addEventListener('DOMContentLoaded', function () {

    //NAVIGATION SCRIPTS
    const toggleButton = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    const topNav = document.getElementsByTagName("nav");
    const closeButton = document.getElementById("close__button");
    const navModal = document.getElementById("nav__modal");
    const menuItems = document.getElementsByClassName("nav__link");

    //toggle modal which covers the background
    function toggleModal() {
        if (navModal.className === "open") {
            navModal.className = "closed";
        } else {
            navModal.className = "open";
        }
    }

    //toggle displaying the mobile navigation
    function toggleNav() {
        mobileNav.classList.toggle("active");
        topNav[0].classList.toggle("hidden__nav");
        toggleModal();
    }

    //add event listeners to buttons
    toggleButton.addEventListener('click', toggleNav);
    closeButton.addEventListener('click', toggleNav);
    navModal.addEventListener('click', toggleNav, false);
    for (var i = 0, len = menuItems.length; i < len; i++) {
        menuItems[i].addEventListener('click', toggleNav);
    }


    //hide menu on scroll down
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("nav").style.top = "0";
        } else {
            document.getElementById("nav").style.top = "-100vw";
        }
        prevScrollpos = currentScrollPos;
    }

}, false);

