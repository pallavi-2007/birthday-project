function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);

    let size = Math.random() * 20 + 20; 
    heart.style.fontSize = size + 'px';
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; 

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
