var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
    const img = document.getElementById("fullImg");
    const icon = document.querySelector(".icon");
    const countEl = document.getElementById("Numlike");
    let count = 0;
    img.addEventListener("dblclick", () => {
    count++;
    icon.classList.add("like");
    countEl.innerHTML = "Number of Likes: " + count;
    setTimeout(() => {
        icon.classList.remove("like");
    }, 1200);
  });
}
function closeFullImg() {
    fullImgBox.style.display = "none";
}
