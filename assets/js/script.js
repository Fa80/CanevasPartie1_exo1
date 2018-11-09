//Les Murs
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
// La methode beginPath nous permet de débuter le déssin dans canevas.
ctx.moveTo(100, 100);
// moveTo nous permet de définir le point de départ de notre dessin.
ctx.lineTo(100, 300);
ctx.lineTo(300, 300);
ctx.lineTo(300, 100);
ctx.lineTo(100, 100);
ctx.strokeStyle = "#A7D5E6";
ctx.stroke();
ctx.fillStyle = "#A7D5E6";
ctx.fill();
// Le Toit
var t = document.getElementById("myCanvas");
var ttx = t.getContext("2d");
ttx.beginPath();
ttx.moveTo(100, 100);
ttx.lineTo(200, 0);
ttx.lineTo(300, 100);
ttx.strokeStyle = "#D08C37";
ttx.stroke();
ttx.fillStyle = "#D08C37";
ttx.fill();
// La fenêtre gauche
var f = document.getElementById("myCanvas");
var ftx = f.getContext("2d");
ftx.beginPath();
ftx.moveTo(130, 130);
ftx.lineTo(130, 170);
ftx.lineTo(170, 170);
ftx.lineTo(170, 130);
ftx.lineTo(130, 130);
ftx.strokeStyle = "#C9C9C9";
ftx.stroke();
ftx.fillStyle = "#C9C9C9";
ftx.fill();

//La fenêtre droite
var g = document.getElementById("myCanvas");
var gtx = g.getContext("2d");
gtx.beginPath();
gtx.moveTo(230, 130);
gtx.lineTo(230, 170);
gtx.lineTo(270, 170);
gtx.lineTo(270, 130);
gtx.lineTo(230, 130);
//gtx.rect(230, 130, 40, 40) La fenêtre avec la méthode rect
gtx.strokeStyle = "#C9C9C9";
gtx.stroke();
gtx.fillStyle = "#C9C9C9";
gtx.fill();
// La Porte
var p = document.getElementById("myCanvas");
var ptx = p.getContext("2d");
ptx.beginPath();
ptx.moveTo(170, 230);
ptx.lineTo(170, 300);
ptx.lineTo(230, 300);
ptx.lineTo(230, 230);
ptx.lineTo(170, 230);
//ptx.rect(170, 230, 60, 60); La porte avec la methode rect
ptx.strokeStyle = "#C9C9C9";
ptx.stroke();
ptx.fillStyle = "#C9C9C9";
ptx.fill();
