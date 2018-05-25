function random_bg_color() {
    var style = document.createElement('style');
    style.type = 'text/css'; 
    var count = 600;
    var i = 1 ;  
    while(count--) {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        style.innerHTML += '#x'+ i +' { background-color: '+bgColor+'; }';
        i += 1;
    }
    document.getElementsByTagName('head')[0].appendChild(style);
}

function createblocks() {
    random_bg_color();
    var id = document.getElementById("field");
    var count = 600;
    var i = 1 ;  
    var k = 5;
    var value = 300; //initial value
    while(count--) {
        var div = document.createElement("div");
        div.setAttribute("class", "m-2");
        div.setAttribute("id", "x"+i);
        //div.setAttribute("onmouseover", "snd("+value+",'square', 'x" +i +"')"); 

        var num = Math.floor((Math.random() * 4) + 1);
        if(num == 1) { div.setAttribute("onmouseover", "snd("+value+",'sine', 'x" +i +"')");  div.setAttribute("onclick", "snd("+value+",'sine', 'x" +i +"')");   div.setAttribute("oncontextmenu", "snd("+value+",'sine', 'x" +i +"')"); } 
        if(num == 2) { div.setAttribute("onmouseover", "snd("+value+",'square', 'x" +i +"')");  div.setAttribute("onclick", "snd("+value+",'square', 'x" +i +"')");   div.setAttribute("oncontextmenu", "snd("+value+",'square', 'x" +i +"')"); } 
        if(num == 3) { div.setAttribute("onmouseover", "snd("+value+",'sawtooth', 'x" +i +"')");  div.setAttribute("onclick", "snd("+value+",'sawtooth', 'x" +i +"')");   div.setAttribute("oncontextmenu", "snd("+value+",'sawtooth', 'x" +i +"')"); } 
        if(num == 4) { div.setAttribute("onmouseover", "snd("+value+",'triangle', 'x" +i +"')");   div.setAttribute("onclick", "snd("+value+",'triangle', 'x" +i +"')");    div.setAttribute("oncontextmenu", "snd("+value+",'triangle', 'x" +i +"')");  }

        id.appendChild(div);

        value += k;
        i += 1;        
    }
}

var context = new (window.AudioContext || window.webkitAudioContext)();
function snd(freq,typ,i) { 
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
    osc.stop(context.currentTime + 0.3);
}

function getBgColor(ii) {
    var elem = document.getElementById(ii);
    var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("background-color");
    return theCSSprop;
}
