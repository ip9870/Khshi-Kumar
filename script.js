function showHideSideDropdown() {
    var element = document.getElementById('side-bar');
    const sideBar = document.getElementById('side-bar');

    sideBar.classList.toggle('active');
    sideBar.classList.add('animated');

    if (sideBar.classList.contains('active')) {
        sideBar.classList.remove('reverse');
    } else {
        sideBar.classList.add('reverse');
    }

    var currentDisplaySituation = window.getComputedStyle(element).getPropertyValue('display');
    if (currentDisplaySituation === "none") {
        document.getElementById('side-bar').style.setProperty('display', 'FLEX')
    }
    else {
        document.getElementById('side-bar').style.setProperty('display', 'none')
    }
    console.log(currentDisplaySituation);
}
function show1() {
    console.log('clicked');
}

document.addEventListener("DOMContentLoaded", function () {
    // Function to show the login form and overlay
    function showLoginForm() {
        document.getElementById("allcontent").style.setProperty('overflow-y', 'hidden');
        document.getElementById("allcontent").style.setProperty('opacity', '0.5');
        document.getElementById("register-form").style.display = "none";
        document.getElementById("login-form").style.display = "block";
    }

    function showSignUpForm() {
        document.getElementById("allcontent").style.setProperty('overflow-y', 'hidden');
        document.getElementById("allcontent").style.setProperty('opacity', '0.5');
        document.getElementById("register-form").style.display = "block";
        document.getElementById("login-form").style.display = "none";
    }

    // Event listener for the close button
    function close() {
        document.getElementById("allcontent").style.setProperty('overflow-y', 'auto');
        document.getElementById("allcontent").style.setProperty('opacity', '1');
        document.getElementById("login-form").style.display = "none";
        document.getElementById("register-form").style.display = "none";

    }


    
    // Set a timeout to show the form after 3 seconds
    setTimeout(showLoginForm, 3000);
    document.getElementById("close-form").addEventListener("click", close);
    document.getElementById("close-form-2").addEventListener("click", close);
    document.getElementById('login').addEventListener("click", showLoginForm);
    document.getElementById('register').addEventListener("click", showSignUpForm);
    document.getElementById('sm-login').addEventListener("click", showLoginForm);
    document.getElementById('sm-register').addEventListener("click", showSignUpForm);

    document.getElementById('button-transfer-to-register').addEventListener("click", showSignUpForm);
    document.getElementById('button-transfer-to-login').addEventListener("click", showLoginForm);

});

document.getElementById('show_hide_side_dropdown').addEventListener("click", showHideSideDropdown);
