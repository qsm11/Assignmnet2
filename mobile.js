
function hamburgerIconFunction(x) {
    x.classList.toggle("hamburger-close");
}

function hamburgerMenuFunction() {
    var x = document.getElementById('hamburger-navbar-collapse');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        $(".hamburger-div").css("background-color", "#DBDBDB");
    } else {
        x.style.display = 'none';
        $(".hamburger-div").css("background-color", "white");
    }
}
$("a.togglebtn").click(function () {
    var _this = this;
    setTimeout(function () {
        $(_this).popover('destroy');
    }, 3000)
})