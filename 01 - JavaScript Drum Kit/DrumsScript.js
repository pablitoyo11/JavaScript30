
window.addEventListener("keydown", function (e){
   // console.log(e.code);    
    let audio = document.querySelector(`audio[data-key='${e.code}']`)
    let key = this.document.querySelector (`div[data-key='${e.code}']`)
    
    if (!audio) return; //stop the function ffrom running all together
    audio.currentTime=0; //makes audio go to start position
    audio.play();
    key.classList.add("playing");

});


/*
function removeTransition(e){
    if (e.propertyName !== "box-shadow") return;
    console.log(e.propertyName);
    this.classList.remove("playing");
}
*/
/*
keys.forEach(key => {key.addEventListener("transitionend", removeTransition)
});
*/  

let keys = document.querySelectorAll(".key");

console.log(keys);


keys.forEach(key => {key.addEventListener("transitionend", (e)=>{
    if (e.propertyName !== "box-shadow") return;
   // console.log(key.getAttribute("data-key"));
    key.classList.remove("playing");
    })   
});


