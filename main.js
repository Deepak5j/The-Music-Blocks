var context = new (window.AudioContext || window.webkitAudioContext)();
function message() {
    alert("Touch colored blocks.\n\nUse ear phone for better experience.\n\nIncrease volume of your device.");
} 
window.onload = function snd(freq,typ,i) { 
   
    var op = getBgColor(i);
    
    var array = op.match(/\d+/g);

    array[0] -= 50;
    array[1] -= 50;
    array[2] -= 50;
    var newCol = "rgb(" + array[0] + "," + array[1] + "," + array[2] + ")";
 
    document.body.style.backgroundColor = op; 

    var osc = context.createOscillator();
    osc.type = typ;
    osc.frequency.value = freq;
    osc.connect(context.destination);
    osc.start();
    osc.stop(context.currentTime + 0.8);

}

function getBgColor(ii) {
    var elem = document.getElementById(ii);
    var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("background-color");
    return theCSSprop;
}
