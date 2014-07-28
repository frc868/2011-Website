<!-- Begin
//  texts:
//  Your messages wich may contain regular html tags but
//  Your messages wich may contain regular html tags but
//  must at least contain: [ <font color='{COLOR}'> ]
//  Use single quotes [ ' ] in your html only. If you need
//  a double quote in the message itself use an escape
//  sign like this: [ \" ]  (not including the brackets)

var texts = new Array(
"<font size='+1' color='{COLOR}' face='Arial'><strong><center>Registration Due September 22nd</center></strong></font>",
"<font size='+1' color='{COLOR}' face='Arial'><strong><center>Wisconsin Regional Results: TechHOUNDS reached semifinals!</center></font>",
"<font size='+1' color='{COLOR}' face='Arial'><strong><center>Boilermaker Regional Results: Quarterfinalists and Delphi Engineering Excellence award winners!</center></strong></font>");

var bgcolor = "#1d2c47"; // background color, must be valid browser hex color (not color names)
var fcolor = "#FFFFFF";  // foreground or font color
var steps = 20; // number of steps to fade
var show = 3000; // milliseconds to display message
var sleep = 50; // milliseconds to pause inbetween messages
var loop = true; // true = continue to display messages, false = stop at last message

// Do Not Edit Below This Line
var colors = new Array(steps);
getFadeColors(bgcolor,fcolor,colors);
var color = 0;
var text = 0;
var step = 1;

// fade: magic fader function
function fade() {

// insert fader color into message
var text_out = texts[text].replace("{COLOR}", colors[color]); // texts should be defined in user script, e.g.: var texts = new Array("<font color='{COLOR}' sized='+3' face='Arial'>howdy</font>");

// actually write message to document
document.getElementById("fader").innerHTML = text_out; 

// select next fader color
color += step;

// completely faded in?
if (color >= colors.length-1) {
step = -1; // traverse colors array backward to fade out

// stop at last message if loop=false
if (!loop && text >= texts.length-1) return; // loop should be defined in user script, e.g.: var loop=true;
}

// completely faded out?
if (color == 0) {
step = 1; // traverse colors array forward to fade in again

// select next message
text += 1;
if (text == texts.length) text = 0; // loop back to first message
}

// subtle timing logic...
setTimeout("fade()", (color == colors.length-2 && step == -1) ? show : ((color == 1 && step == 1) ? sleep : 50)); // sleep and show should be defined in user script, e.g.: var sleep=30; var show=500;
}
// getFadeColors: fills Colors (predefined Array)
// with color hex strings fading from ColorA to ColorB

// note: Colors.length equals the number of steps to fade
function getFadeColors(ColorA, ColorB, Colors) {
len = Colors.length;

// strip '#' signs if present
if (ColorA.charAt(0)=='#') ColorA = ColorA.substring(1);
if (ColorB.charAt(0)=='#') ColorB = ColorB.substring(1);

// substract rgb compents from hex string
var r = HexToInt(ColorA.substring(0,2));
var g = HexToInt(ColorA.substring(2,4));
var b = HexToInt(ColorA.substring(4,6));
var r2 = HexToInt(ColorB.substring(0,2));
var g2 = HexToInt(ColorB.substring(2,4));
var b2 = HexToInt(ColorB.substring(4,6));

// calculate size of step for each color component
var rStep = Math.round((r2 - r) / len);
var gStep = Math.round((g2 - g) / len);
var bStep = Math.round((b2 - b) / len);

// fill Colors array with fader colors
for (i = 0; i < len-1; i++) {
Colors[i] = "#" + IntToHex(r) + IntToHex(g) + IntToHex(b);
r += rStep;
g += gStep;
b += bStep;
}
Colors[len-1] = ColorB; // make sure we finish exactly at ColorB
}

// IntToHex: converts integers between 0-255 into a two digit hex string.
function IntToHex(n) {
var result = n.toString(16);
if (result.length==1) result = "0"+result;
return result;
}
function setFadeLink() {
  var ilink = document.getElementById("fader");
  }

// HexToInt: converts two digit hex strings into integer.
function HexToInt(hex) {
return parseInt(hex, 16);
}

window.onload=fade;
//  End -->