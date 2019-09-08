document.addEventListener('DOMContentLoaded', function () {

    const toggleButton = document.getElementById("menu-toggle");
    const topNav = document.getElementById("mobile-nav");
    const closeButton = document.getElementById("close__button");
    const mobileNav = document.getElementById("mobile-nav");
    const navModal = document.getElementById("nav__modal");
    const menuItems = document.getElementsByClassName("nav__link");

    function toggleModal() {
        if (navModal.className === "open")
            navModal.className = "closed";
        else
            navModal.className = "open";
    }

    function closeNav() {
        topNav.classList.toggle("active");
        toggleModal();
    }

    //added event listeners to buttons
    toggleButton.addEventListener('click', closeNav);
    closeButton.addEventListener('click', closeNav);

    for (var i = 0, len = menuItems.length; i < len; i++) {
        menuItems[i].addEventListener('click', closeNav);
    }

    function handleTouch(e) {
        var x = e.changedTouches[0].clientX;
        var total = this.clientWidth;
        var position = x - total;
        if (position < 0) this.style.left = (x - total) + 'px'
        else if (position >= 0) this.style.left = 0 + 'px'
    }

    function handleTouchEnd(e) {
        var x = e.changedTouches[0].clientX;
        var total = this.clientWidth;
        var position = x - total;
        this.style.left = "";
        if (position <= -total * 0.5) { closeNav(); }
    }

    mobileNav.addEventListener('touchstart', handleTouch, false)
    mobileNav.addEventListener('touchmove', handleTouch, false)
    mobileNav.addEventListener('touchend', handleTouchEnd, false)
    document.getElementById('nav__modal').addEventListener('click', closeNav, false);


    //check to see if user is using keyboard navigation before removing blue focus outline (accessibility)
    function handleFirstTab(e) {
        if (e.keyCode === 9) { // the "I am a keyboard user" key
            document.body.classList.add('user-is-tabbing');
            window.removeEventListener('keydown', handleFirstTab);
        }
    }

    window.addEventListener('keydown', handleFirstTab);



}, false);

