const totalFrames = 21; // Anzahl der Bilder in der Sequenz
const sequenceImg = document.getElementById('sequence');

// Berechne das aktuelle Bild basierend auf der horizontalen Mausposition
function updateImage(xPos) {
    const windowWidth = window.innerWidth;
    const frameIndex = Math.floor((xPos / windowWidth) * totalFrames);
    const clampedFrame = Math.min(Math.max(frameIndex, 0), totalFrames - 1);
    sequenceImg.src = `images/image${clampedFrame + 1}.png`;
}

// Event-Listener für die Mausbewegung
document.addEventListener('mousemove', (event) => {
    updateImage(event.clientX);
});

// Event-Listener für die Touch-Bewegung (für Mobilgeräte)
document.addEventListener('touchmove', (event) => {
    const touch = event.touches[0];
    updateImage(touch.clientX);
});