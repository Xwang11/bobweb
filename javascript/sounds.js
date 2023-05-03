
let on = new Array(9).fill(-1);
let audios = [];

function playEffect(index) {
    var isOn = on[index];
    var path = audios[index];
    var audio = new Audio(path);

    if (isOn == -1) {
        audio.play();
    }
    else {
        audio.pause();
    }
}