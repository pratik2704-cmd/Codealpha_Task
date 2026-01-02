const playlist = [{
        songName: "arabic-instrumental-hip-hop",
        songImg: "https://w0.peakpx.com/wallpaper/333/257/HD-wallpaper-trumpet-player-music.jpg",
        songSrc: "/music/arabic-instrumental-hip-hop-background-music-for-short-video-1-minute-144608.mp3"
    },
    {
        songName: "blackout-nightS",
        songImg: "https://w0.peakpx.com/wallpaper/385/956/HD-wallpaper-guitar-player-music.jpg",
        songSrc: "/music/blackout-nights-short-version-161164.mp3"
    },
    {
        songName: "cartoon-intro",
        songImg: "https://w0.peakpx.com/wallpaper/749/397/HD-wallpaper-phonograph-gramophone-music-king-music-recorder-old-music-player.jpg",
        songSrc: "/music/cartoon-intro-13087.mp3"
    },
    {
        songName: "dramatic-hip-hop-music-background-jazz-music",
        songImg: "https://w0.peakpx.com/wallpaper/386/155/HD-wallpaper-cassette-player-beograd-music-radio-cassette-player.jpg",
        songSrc: "/music/dramatic-hip-hop-music-background-jazz-music-for-short-video-148505.mp3"
    },
    {
        songName: "energetic-background-reggaeton-short-fun-vlog-music",
        songImg: "https://w0.peakpx.com/wallpaper/260/127/HD-wallpaper-vinyl-turntable-vinyl-disc-retro.jpg",
        songSrc: "/music/energetic-background-reggaeton-short-music-27-sec-fun-vlog-music-149384.mp3"
    },
    {
        songName: "funny-trumpet-hip-hop-background-music",
        songImg: "https://w0.peakpx.com/wallpaper/782/278/HD-wallpaper-baby-player-disco-music.jpg",
        songSrc: "/music/funny-trumpet-hip-hop-music-free-short-video-background-music-39-sec-154216.mp3"
    },
    {
        songName: "short-3",
        songImg: "https://w0.peakpx.com/wallpaper/854/926/HD-wallpaper-g-a-headphones-beat-cannabis-disco-dj-music-party-trance.jpg",
        songSrc: "/music/short-3-199284.mp3"
    },
    {
        songName: "space-intro",
        songImg: "https://w0.peakpx.com/wallpaper/773/686/HD-wallpaper-dj-party-trance.jpg",
        songSrc: "/music/space-intro-124261.mp3"
    },
    {
        songName: "stomps-and-claps-percussion-and-rhythM",
        songImg: "https://w0.peakpx.com/wallpaper/393/639/HD-wallpaper-dj-marshmello-dj-night-club-superstars-party-marshmello.jpg",
        songSrc: "/music/stomps-and-claps-percussion-and-rhythm-141190.mp3"
    },
    {
        songName: "toy-story-short-happy-cartoony-intro-outro",
        songImg: "https://w0.peakpx.com/wallpaper/139/200/HD-wallpaper-cool-monkey-blue-headphones-music.jpg",
        songSrc: "/music/toy-story-short-happy-audio-logo-short-cartoony-intro-outro-music-125627.mp3"
    }
]

var handle = document.getElementById('music');
var songName = document.getElementById('song-name');
var songImg = document.getElementById('song-img');
var play = document.getElementById('play');
var pause = document.getElementById('pause');
handle.controls = false;

function togglePlaylist() {
    console.log("3")
    document.getElementById('playlist').classList.toggle("togglePlaylist");
}

function togglePlay() {
    if (handle.paused || handle.ended) {
        play.style.display = 'none'
        pause.style.display = 'inline-block';
        handle.play();
    } else {
        pause.style.display = 'none';
        play.style.display = 'inline-block';
        handle.pause();
    }
}

function setVolume() {
    var volume = document.getElementById('volume');
    handle.volume = volume.value;
}

function loop() {
    handle.loop = !handle.loop;
    if (handle.loop) {
        document.getElementById('repeat').classList.add('repeat-active');
    } else {
        document.getElementById('repeat').classList.remove('repeat-active');
    }
}

function toggleMute() {
    if (!handle.muted) {
        document.getElementById('volume').value = "0";
    } else {
        document.getElementById('volume').value = handle.volume;
    }
    handle.muted = !handle.muted;
}

var duration = 0;
handle.onloadedmetadata = function () {
    duration = Math.floor(handle.duration);
}

function update() {
    var progress = document.getElementById('progress');
    if (handle.currentTime > 0) {
        progress.value = Math.floor((100 / handle.duration) * handle.currentTime);
    }
    var minDuration = Math.floor(duration / 60);
    var secDuration = duration - minDuration * 60;
    document.getElementById('song-duration').innerHTML = minDuration + ":" + secDuration;

    var time = Math.floor(handle.currentTime);
    var min = Math.floor(time / 60);
    var seconds = time - min * 60;
    if (seconds < 10) {
        document.getElementById('current-time').innerHTML = min + ":0" + seconds;
    } else {

        document.getElementById('current-time').innerHTML = min + ":" + seconds;
    }
}

var i = 0;

function next() {
    var prev = "id" + (i);
    document.getElementById(prev).classList.remove("addClass");
    if (i < playlist.length - 1) {
        i = i + 1;
    } else {
        i = 0
    }
    songImg.src = playlist[i].songImg;
    songName.innerHTML = playlist[i].songName;
    handle.src = playlist[i].songSrc;
    handle.autoplay = "true";
    var current = "id" + i;
    document.getElementById(current).classList.add("addClass");
    document.getElementById('song-duration').innerHTML = "0:0";
    togglePlay();
}

function back() {
    var prev = "id" + i;
    document.getElementById(prev).classList.remove("addClass");
    if (i > 0) {
        i = i - 1;
    }
    songImg.src = playlist[i].songImg;
    songName.innerHTML = playlist[i].songName;
    handle.src = playlist[i].songSrc;
    handle.autoplay = "true";
    var current = "id" + i;
    document.getElementById(current).classList.add("addClass");
    document.getElementById('song-duration').innerHTML = "0:0";
    togglePlay();
}

function songByChoice(e) {
    var prev = "id" + i;
    document.getElementById(prev).classList.remove("addClass");
    var get = "/music/" + document.getElementById(e.id).innerHTML + ".mp3";
    i = playlist.findIndex(x => x.songSrc === get);
    console.log(i)
    songImg.src = playlist[i].songImg;
    songName.innerHTML = playlist[i].songName;
    handle.src = playlist[i].songSrc;
    var current = "id" + i;
    document.getElementById(current).classList.add("addClass");
    handle.autoplay = "true";
    togglePlay();
}

var disableUpdate = false;
var progress = document.getElementById('progress');
progress.addEventListener('input',
    function () {
        disableUpdate = true;
        var progress = document.getElementById('progress').value;
        handle.currentTime = (progress / 100) * handle.duration;
    });

if (!disableUpdate) {
    handle.addEventListener("timeupdate", update, false);
}