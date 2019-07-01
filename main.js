document.addEventListener('DOMContentLoaded', function () {

    const toggleButton = document.getElementById("menu-toggle");
    const topNav = document.getElementById("mobile-nav");
    const closeButton = document.getElementById("close__button");
    const mobileNav = document.getElementById("#mobile-nav");
    const navModal = document.getElementById("nav__modal");

    function toggleModal() {
        if (navModal.className === "open")
            navModal.className = "closed";
        else
            navModal.className = "open";
    }

    //added event listeners to buttons
    toggleButton.addEventListener('click', function () {
        console.log("toggle clicked");
        topNav.classList.toggle("active");
        toggleModal();
    }, false);

    closeButton.addEventListener('click', function closeNav() {
        console.log("toggle clicked");
        topNav.classList.toggle("active");
        toggleModal();

    }, false);


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
        if (position <= -total * 0.5) closeNav();;
    }

    mobileNav.addEventListener('touchstart', handleTouch, false)
    mobileNav.addEventListener('touchmove', handleTouch, false)
    mobileNav.addEventListener('touchend', handleTouchEnd, false)
    document.getElementById('nav_modal').addEventListener('click', closeNav, false);




}, false);

