document.addEventListener('DOMContentLoaded', function () {
    var audioPlayer = document.getElementById('audioPlayer');
    var playPauseBtn = document.getElementById('playPauseBtn');
    var volumeSlider = document.getElementById('volumeSlider');
    var currentTime = document.getElementById('currentTime');
    var duration = document.getElementById('duration');

    audioPlayer.addEventListener('loadedmetadata', function() {
        duration.textContent = formatTime(audioPlayer.duration);
    });

    audioPlayer.addEventListener('timeupdate', function() {
        currentTime.textContent = formatTime(audioPlayer.currentTime);
    });

    playPauseBtn.addEventListener('click', function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.textContent = '⏸️';
        } else {
            audioPlayer.pause();
            playPauseBtn.textContent = '▶️';
        }
    });

    volumeSlider.addEventListener('input', function () {
        audioPlayer.volume = volumeSlider.value;
    });

    function formatTime(time) {
        var minutes = Math.floor(time / 60);
        var seconds = Math.floor(time % 60);
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        return minutes + ':' + seconds;
    }
});
