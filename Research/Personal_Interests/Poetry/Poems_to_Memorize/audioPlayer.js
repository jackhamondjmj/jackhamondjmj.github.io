// Get references to the audio player, buttons, and controls
const audioPlayer = document.getElementById('audioPlayer');
const playButton = document.getElementById('playButton');
const backButton = document.getElementById('backButton');
const volumeControl = document.getElementById('volumeControl');

// Play/Pause Functionality
playButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = 'Pause'; // Change the button text to 'Pause'
    } else {
        audioPlayer.pause();
        playButton.textContent = 'Play'; // Change the button text to 'Play'
    }
});

// Back 10 Seconds Functionality
backButton.addEventListener('click', () => {
    audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 10); // Move back 10 seconds, but not before 0
});

// Volume Control Functionality
volumeControl.addEventListener('input', () => {
    audioPlayer.volume = volumeControl.value; // Set the volume based on the slider
});
