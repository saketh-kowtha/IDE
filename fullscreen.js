function openFullscreen() {
    var elem = document.getElementById("ide");
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

function exitFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

window.addEventListener('load', function(){
    document.getElementById('fullscreen').addEventListener('click', function(){
        if(this.title.toLocaleLowerCase().indexOf("exit") == -1){
            openFullscreen()
            this.title="Exit fullscreen"
            this.childNodes[0].src="assests/exitscreen.svg"
        }
        else{
            exitFullScreen()
            this.title="Fullscreen"
            this.childNodes[0].src="assests/fullscreen.svg"
        }
    })
})