document.addEventListener("DOMContentLoaded", function() { initialiseVideoPlayer(); }, false);

var videoPlayer = document.getElementById("site-video");
var playbtn = document.getElementById('play-pause-button');
var stopbtn = document.getElementById('stop-button');
var volup = document.getElementById('volume-inc-button');
var voldown = document.getElementById('volume-dec-button');
var mute = document.getElementById('mute-button');
var replay = document.getElementById('replay-button');
var playFont = '<i class="fa fas fa-play"></i>';
var pauseFont = '<i class="fa fas fa-pause"></i>';
var muteFont = '<i class="fa fas fa-volume-mute"></i>';

/// function hides default controls
function initialiseVideoPlayer(){
  videoPlayer.controls = false;
}

/// play button function 
playbtn.addEventListener("click", togglePlay)

function togglePlay() {
  if(videoPlayer.paused || videoPlayer.ended){
    playbtn.innerHTML = pauseFont;
    playbtn.className = 'pause';
    videoPlayer.play();
  }

  else{
    playbtn.innerHTML = playFont;
    playbtn.className = 'play';
    videoPlayer.pause();
  }
}

//stop function
stopbtn.addEventListener('click', stopPlay);
function stopPlay(){
  videoPlayer.pause();
  videoPlayer.currenTime = 0;
}

//volume function
volup.addEventListener('click', volumeChg);
function volumeChg(direction){
  if(direction === volup) {
    videoPlayer.volume += videoPlayer.volume == 1 ? 0 : 0.1;
  }
  else if(direction === voldown) {
    videoPlayer.volume -= (videoPlayer.volume == 0 ? 0 : 0.1);
  }
  videoPlayer.volume = parseFloat(videoPlayer.volume).toFixed(1);
}

//mute function

mute.addEventListener('click', muteToggle);
function muteToggle(){
   if(videoPlayer.muted){
    fontColor(muteFont);
    videoPlayer.muted = false;
   }
   else{
    mute.innerHTML = muteFont;
    videoPlayer.muted = true;
   }
}

function fontColor(value){
  value.className = 'button_on';
  console.log(value);
}

//replay function
replay.addEventListener('click', replayNow);
function replayNow(){
  resetPlayer();
  videoPlayer.play();
}

function resetPlayer(){
  videoPlayer.currentTime = 0;
  playbtn.innerHTML = playFont;
}

//progress bar
videoPlayer.addEventListener('timeupdate', updateProgressBar, false);
function updateProgressBar() {
  var progressBar = document.getElementById('progress-bar');
  var percentage = Math.floor((100 / videoPlayer.duration) *
  videoPlayer.currentTime);
  progressBar.value = percentage;
  progressBar.innerHTML = percentage + '% played';
}





