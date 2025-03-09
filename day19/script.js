gsap.from(".hero .head img", {
    y:40,
    opacity:0,
    duration: 0.3,
    delay: 0.3
})




  let isPlaying = true;
  let button = document.querySelector(".audio-btn");

  
  let playlist = ["audios/song1.mp3", "audios/song2.mp3", "audios/song3.mp3"];
  let currentTrack = 0;
  let audio = document.getElementById("bg-music");
  audio.src = playlist[currentTrack];
  audio.volume = 0.3;
  window.onload = function() {
      audio.play();
    };
  function toggleMusic() {
    currentTrack = (currentTrack + 1) % playlist.length; // Loop to first song after last
    audio.src = playlist[currentTrack];
    audio.play();
  }