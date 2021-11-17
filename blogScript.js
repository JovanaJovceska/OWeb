var AllInfo = document.getElementById("full-card");
var buttonClose = document.getElementById("close");
var AllInfo1 = document.getElementById("full-card1");
var buttonClose1 = document.getElementById("close1");

function Show() {
    AllInfo.style.display = "flex";
    buttonClose.style.display = "block";
}

function Show1() {
    AllInfo1.style.display = "flex";
    buttonClose1.style.display = "flex";
}

function Close() {
    AllInfo.style.display = "none";
    buttonClose.style.display = "none";
}

function Close1() {
    AllInfo1.style.display = "none";
    buttonClose1.style.display = "none";
}

function start() {
    var button = document.getElementById("showMore");
    button.addEventListener( "click", Show, false );
    var button1 = document.getElementById("showMore1");
    button1.addEventListener( "click", Show1, false );

    var button2 = document.getElementById("close");
    button2.addEventListener( "click", Close, false );
    var button3 = document.getElementById("close1");
    button3.addEventListener( "click", Close1, false );
}
window.addEventListener("load", start, false);