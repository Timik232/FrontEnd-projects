window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("upHere").style.display = "block";
        document.getElementById("upHere").style.opacity = 1;
    } else {
        document.getElementById("upHere").style.display = "none";
        document.getElementById("upHere").style.opacity = 0;
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
