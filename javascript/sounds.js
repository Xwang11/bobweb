
let on = new Array(9).fill(-1);
let audioPaths = ["../audios/sheet.mp3", "../audios/howling.mp3", "../audios/crowd.mp3"];
let audios = new Array(9).fill(new Audio("..."));

function playEffect(index) {
    var isOn = on[index];
    var path = audios[index];
    var audio = audios[index];
    audio.
    console.log(on[index]);

    if (isOn == -1) {
        audio.play();
    }
    else {
        audio.pause();
    }

    on[index] = isOn*-1;
}