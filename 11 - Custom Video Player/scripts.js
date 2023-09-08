let player=document.querySelector(".player");
let video=player.querySelector('.player__video');
let progress=player.querySelector(".progress");
let progressBar=player.querySelector(".progress__filled");

//play and pause toggle
let playButton=player.querySelector(".player__button");

//volume and speed
let playerSliders=player.querySelectorAll(".player__slider");

//skip -10 and +25 buttons
//let skipButtons=player.querySelectorAll(".player__button");
let skipButtons=player.querySelectorAll('[data-skip]');

/*
function togglePlay() {
    if(video.paused){
        video.play();
    } else{
        video.pause();
    }
};

function togglePlay() {
const method = video.paused ? "play" : "pause";
video[method]();
};

*/

function togglePlay() {
    video.paused ? video.play() : video.pause();
};

function updateButton (){
    let icon = this.paused ? ">" : "||";
    playButton.textContent=icon;
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
   video[this.name] = this.value;
/*   
    console.log(video);
    console.log(this.name);
    console.log(this.value);
*/
}
function handleProgress(){
    let percent = (video.currentTime / video.duration) *100;
    progressBar.style.flexBasis = `${percent}%`;
//    console.log(percent);
}

function scrub(e) {
//    console.log(e);
    let scrubTime= (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

video.addEventListener("click", togglePlay);
playButton.addEventListener("click", togglePlay);

video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

video.addEventListener("timeupdate", handleProgress);


skipButtons.forEach(button => button.addEventListener("click", skip));

playerSliders.forEach(range => range.addEventListener("change", handleRangeUpdate));

progress.addEventListener("click", scrub);

let mousedown = false;

//progress.addEventListener("mousemove", scrub);

progress.addEventListener("mousedown", ()=>mousedown=true);
progress.addEventListener("mouseup", ()=>mousedown=false);
progress.addEventListener("mousemove", (e)=> mousedown && scrub(e));



