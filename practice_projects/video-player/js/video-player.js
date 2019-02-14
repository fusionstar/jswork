document.addEventListener("DOMContentLoaded", function() { initialiseVideoPlayer(); }, false);

var videoPlayer;
var playbtn = document.getElementById('play-pause-button');

/// function hides default controls

function initialiseVideoPlayer(){
  videoPlayer = document.getElementById("site-video");
  videoPlayer.controls = false;
}

/// play button function 

playbtn.addEventListener("click", togglePlay)

function togglePlay() {
  if(videoPlayer.paused || videoPlayer.ended){
    playbtn.title = 'pause';
    playbtn.innerHTML = 'pause';
    playbtn.className = 'pause';
    videoPlayer.play();
  }

  else{
    playbtn.title = 'play';
    playbtn.innerHTML = 'play';
    playbtn.className = 'play';
    videoPlayer.pause();
  }
}

