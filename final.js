document.getElementById("openPopup").addEventListener("click", function () {
    document.getElementById("popupContainer").style.display = "block";
    document.getElementById("popupOverlay").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function () {
    document.getElementById("popupContainer").style.display = "none";
    document.getElementById("popupOverlay").style.display = "none";
});
