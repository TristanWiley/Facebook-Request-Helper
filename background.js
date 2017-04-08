function hideIt(event) {
    var t = event.target;
    if (t.getAttribute("name") == "approve button" || t.getAttribute("name") == "decline button") {
        t.parentElement.parentElement.parentElement.parentElement.style.display = "none";
    }
}
document.body.addEventListener('click', hideIt, true);
