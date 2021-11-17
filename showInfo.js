function show() {
    var pom = document.getElementById("aboutMe");
    document.write(pom);
}
function start() {
    var button = document.getElementById("main_btn");
    button.addEventListener("click", show, false);
}
window.addEventListener("load", start, false);