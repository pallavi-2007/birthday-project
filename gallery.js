document.addEventListener("DOMContentLoaded", function () {
    const photos = document.querySelectorAll(".photo");

    photos.forEach((photo, index) => {
        setTimeout(() => {
            photo.style.animation = "flip 3s infinite alternate ease-in-out";
        }, index * 500); // Staggered animation
    });
});
