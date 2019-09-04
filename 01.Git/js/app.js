
var button = document.querySelectorAll("button");
var rezult = 0;
function k(e) {
    var o = document.querySelectorAll("button");
    for (var i = 0; i < o.length; i++) {
        if (o[i] == e) {
            if (button[i].classList.contains('btn-info')) {
                rezult += button[i].textContent;
            }
            else {
                alert(i);
            }
        }
    }

}

for (var i = 0; i < button.length; i++) {
    button[i].setAttribute("onclick", "k(this)");
}
var out = document.querySelector("output");

setInterval(function () {
    out.textContent = rezult;
}, 50)

