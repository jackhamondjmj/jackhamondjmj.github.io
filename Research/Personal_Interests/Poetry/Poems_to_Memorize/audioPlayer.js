// Get references to the audio player, play button, and volume control
const audioPlayer = document.getElementById('audioPlayer');
const playButton = document.getElementById('playButton');
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

// Volume Control Functionality
volumeControl.addEventListener('input', () => {
    audioPlayer.volume = volumeControl.value;
});
