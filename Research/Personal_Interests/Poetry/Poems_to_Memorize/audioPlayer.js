// Get references to elements
const audioPlayer = document.getElementById('audioPlayer');
const playButton = document.getElementById('playButton');
const progressBar = document.getElementById('progressBar');
const timeDisplay = document.getElementById('timeDisplay');
const volumeControl = document.getElementById('volumeControl');
const backButton = document.getElementById('backButton');

// Update the time format to MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

// Update progress bar and time display
function updateProgress() {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    progressBar.value = (currentTime / duration) * 100;
    timeDisplay.textContent = `${formatTime(currentTime)}/${formatTime(duration)}`;
}

// Play/Pause functionality
playButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playButton.textContent = 'Play';
    }
});

// Volume control functionality
volumeControl.addEventListener('input', () => {
    audioPlayer.volume = volumeControl.value;
});

// Back 10 seconds functionality
backButton.addEventListener('click', () => {
    audioPlayer.currentTime -= 10;
});

// Update progress and time every second
audioPlayer.addEventListener('timeupdate', updateProgress);

// Allow user to click on the progress bar to change the position
progressBar.addEventListener('input', () => {
    const duration = audioPlayer.duration;
    const value = progressBar.value;
    audioPlayer.currentTime = (value / 100) * duration;
});
