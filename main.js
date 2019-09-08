document.addEventListener('DOMContentLoaded', function () {

    //Navigation 
    const toggleButton = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    const topNav = document.getElementsByTagName("nav");
    const closeButton = document.getElementById("close__button");
    const navModal = document.getElementById("nav__modal");
    const menuItems = document.getElementsByClassName("nav__link");

    function toggleModal() {
        if (navModal.className === "open") {
            navModal.className = "closed";
        } else {
            navModal.className = "open";
        }
    }

    function toggleNav() {
        mobileNav.classList.toggle("active");
        topNav[0].classList.toggle("hidden__nav");
        toggleModal();
    }

    //added event listeners to buttons
    toggleButton.addEventListener('click', toggleNav);
    closeButton.addEventListener('click', toggleNav);

    for (var i = 0, len = menuItems.length; i < len; i++) {
        menuItems[i].addEventListener('click', toggleNav);
    }

    document.getElementById('nav__modal').addEventListener('click', toggleNav, false);


    // function handleTouch(e) {
    //     var x = e.changedTouches[0].clientX;
    //     var total = this.clientWidth;
    //     var position = x - total;
    //     if (position < 0) this.style.left = (x - total) + 'px'
    //     else if (position >= 0) this.style.left = 0 + 'px'
    // }

    // function handleTouchEnd(e) {
    //     var x = e.changedTouches[0].clientX;
    //     var total = this.clientWidth;
    //     var position = x - total;
    //     this.style.left = "";
    //     if (position <= -total * 0.5) { closeNav(); }
    // }

    // mobileNav.addEventListener('touchstart', handleTouch, false)
    // mobileNav.addEventListener('touchmove', handleTouch, false)
    // mobileNav.addEventListener('touchend', handleTouchEnd, false)


}, false);

