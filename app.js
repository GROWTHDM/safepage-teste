const targetDiv = document.getElementById("littleImages");
const btn = document.getElementById('btnCasa');


btn.onclick = function() {
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
    } else {
        targetDiv.style.display = "block";
    }
};