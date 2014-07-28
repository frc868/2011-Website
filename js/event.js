// Event Calendar
// copyright Stephen Chapman, 10th June 2006, 30th October 2006

var tb = 'b'; // top or bottom (t or b)
var headbg = '#666666';  // table heading background colour
var todaybg = '666666'; // current selected date background colour
var textclr = '#666666'; // text colour
var linkclr = '#ffffff'; // link text colour
var noMessage =  'No Events Today'; // message to display when no entry in array

var dA = new Array(); var x = 0;
// first 8 characters in ccyymmdd format for single date events
// first 8 characters in 0000mmdd format for every year events
dA[x++] = "00000101 New Year's Day";
dA[x++] = "00000214 Valentine's Day";

dA[x++] = "20080918 Meeting in C105";
dA[x++] = "20080925 Meeting in C105 and Registration Deadline";
dA[x++] = "20081009 Parents' Meeting, 6:30 - 7:00 pm and Safety Animation Announced!";
dA[x++] = "20081002 Meeting in C105"; 
dA[x++] = "20081015 PSAT Testing!";
dA[x++] = "20081016 Meeting in C105";
dA[x++] = "20081023 Fall Break!";
dA[x++] = "20081024 Fall Break!";
dA[x++] = "20081030 Meeting in C105";
dA[x++] = "20081107 Overnighter!";
dA[x++] = "20081113 Meeting in C105";
dA[x++] = "20081127 Thanksgiving Break!"
dA[x++] = "20081128 Thanksgiving Break!"
dA[x++] = "20081204 Meeting in C105";
dA[x++] = "20081209 Safety Animation Due!";
dA[x++] = "20081211 Meeting before Kickoff!";
dA[x++] = "20081217 Finals!";
dA[x++] = "20081218 Finals!";
dA[x++] = "20081219 Finals!";
dA[x++] = "20081222 Winter Break!";
dA[x++] = "20081223 Winter Break!";
dA[x++] = "20081224 Winter Break!";
dA[x++] = "20081225 Winter Break!";
dA[x++] = "20081226 Winter Break!";
dA[x++] = "20081229 Winter Break!";
dA[x++] = "20081230 Winter Break!";
dA[x++] = "20081231 Winter Break!";
dA[x++] = "20090102 Winter Break!";
dA[x++] = "20090103 FRC KICKOFF!!!";
dA[x++] = "20090216 President's Day - No School!";
dA[x++] = "20090217 ROBOT SHIP DATE!!";
dA[x++] = "20090219 Woodie Flowers, Website, Animation, and Inventor Submissions Due!";
dA[x++] = "20090403 Spring Break!";
dA[x++] = "20090406 Spring Break!";
dA[x++] = "20090407 Spring Break!";
dA[x++] = "20090408 Spring Break!";
dA[x++] = "20090409 Spring Break!";
dA[x++] = "20090410 Spring Break!";


dA[x++] = "20080317 St. Patrick's Day";
dA[x++] = "20080323 Easter";
dA[x++] = "20080401 April Fool's Day";
dA[x++] = "20080511 Mother's Day";
dA[x++] = "20080704 Independence Day";
dA[x++] = "20080901 Labor Day";
dA[x++] = "20081031 Halloween";
dA[x++] = "20081127 Thanksgiving";
dA[x++] = "20081225 Christmas Day";

// permission is granted to use this javascript provided that the below code is not altered
var pageLoaded = 0; window.onload = function() {pageLoaded = 1;}
function loaded(i,f) {if (document.getElementById && document.getElementById(i) != null) f(); else if (!pageLoaded) setTimeout('loaded(\''+i+'\','+f+')',100);
}
function monthlength(month,year) {var dd = new Date(year, month, 0);return dd.getDate();}
var moy = ['January','February','March','April','May','June','July','August','September','October','November','December'];var today = new Date();var selDate = today.getFullYear()+getmmdd(today.getMonth()+1,today.getDate());

function dispCal(yy,mm) {if (mm < 0 || mm > 12) {alert('month must be between 1 and 12'); return false;} if (yy != 0 && (yy < 1901 || yy > 2100)) {alert('year must be after 1900 and before 2101'); return false;} var dow = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']; var calendar = new Date();  var today = calendar.getDate(); calendar.setDate(1); if (yy > 1900) calendar.setFullYear(yy); if (mm > 0) calendar.setMonth(mm - 1); var yy = year = calendar.getFullYear(); var month = calendar.getMonth(); calendar.setDate(today); var weekday = calendar.getDay(); var daysInMonth = monthlength(month+1,year); var hilite_start = '<td width="30" style="background:' + todaybg + '" align="center"><b>'; var td_start = '<td width="30" align="center">'; var cal = '<div id="cal"><div style="border:0pt solid #cccccc;height:150px;width:220px"><table border="0" cellspacing="0" cellpadding="2" align="center"><tr><td colspan="7" style="background:' + headbg + '" align="center"><b>' + moy[month]  + ' ' + year + '<\/b><\/td><\/tr><tr>'; for(dex=0; dex < 7; dex++) {cal += td_start + dow[dex] + '</td>';} cal += '<\/tr><tr>'; var day2 = today; for (dex = today; dex > 6; dex -=7) day2 = dex; weekday -= day2 - 1; while (weekday < 0) weekday += 7; for(dex=0; dex < weekday; dex++) cal += td_start + ' <\/td>'; for(dex=1; dex <= daysInMonth; dex++) {if(weekday == 7) {cal += '</tr><tr>'; weekday = 0;} if(selDate==year+getmmdd(month+1,dex)) cal += hilite_start +'<span'+clickDate(dex,month,year) + '>'+ dex + '<\/span><\/b><\/td>'; else cal += td_start + '<span '+clickDate(dex,month,year) + '>' + dex + '<\/span><\/td>'; weekday += 1;} for(dex=weekday; dex < 7; dex++) cal += td_start + ' <\/td>'; cal += '<\/tr><\/table><\/div>';if (document.getElementById) {var mmb = month;  mm = month + 1; var yya = yyb = yy; if (mmb <1) {mmb += 12; yyb--;} var mma = month + 2; if (mma > 12) {mma -= 12; yya++;} var yb = yy -1; var ya = yy +1; cal += '<table border="0" cellspacing="0" cellpadding="2" width="210"><tr><td><a href="#" onclick="if (cala = dispCal('+yb+','+mm+')) {document.getElementById(\'cal\').innerHTML = cala; return false;}"><center><<</a></td><td><a href="#" onclick="if (cala = dispCal('+yyb+','+mmb+')) {document.getElementById(\'cal\').innerHTML = cala; return false;}"><</a></td><td align="right"><a href="#" onclick="if (cala = dispCal('+yya+','+mma+')) {document.getElementById(\'cal\').innerHTML = cala; return false;}">></a></td><td align="right"><a href="#" onclick="if (cala = dispCal('+ya+','+mm+')) {document.getElementById(\'cal\').innerHTML = cala; return false;}">>></a></td></tr></table>';} else {cal += '<div> </div>';} cal += '</div>'; return cal;}

function start() {var x = '<div id="calDate" style="border:0pt solid #cccccc;width:220px"><\/div>'; var y = ''; if (tb == 't') y = x + dispCal(0,0); else y = dispCal(0,0) + x; document.getElementById('calendar').innerHTML = y; ev();}
loaded('calendar',start);

function clickDate(day, month, year) {var ct = nextDate(year + getmmdd(month+1,day));if (ct == '') ct = nextDate('0000' + getmmdd(month+1,day));if (ct == '') return 'style="color:'+textclr+'"'; else return 'style="cursor:pointer;color:'+linkclr+'" onclick="selDate = '+year+ getmmdd(month+1,day)+'; isDate(' + day + ',' + month + ',' + year + ');return false;"';}

function isDate(dayVal,monthVal,yearVal) {var ct = nextDate(yearVal + getmmdd(monthVal+1,dayVal));if (ct == '') ct = nextDate('0000' + getmmdd(monthVal+1,dayVal));if (ct == '') ct = noMessage;document.getElementById('calDate').innerHTML = selDate + ':<br \/>' +ct; return false;}

function nextDate(yymmdd) {var x = dA.length;for (var i = 0; i < x; i++) {if (dA[i].substr(0,8) == yymmdd) return dA[i].substr(8);}return '';}

function getmmdd(mm,dd) {return (mm > 9 ? '' + mm : '0' + mm) + (dd > 9 ? dd : '0' + dd);}

function ev() {var ct = nextDate(selDate);var ct = nextDate(selDate);if (ct == '') ct = nextDate('0000' + selDate.substr(4));if (ct == '') ct = noMessage; document.getElementById('calDate').innerHTML = selDate + ':<br \/> ' +ct;}











