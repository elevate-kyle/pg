var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.rect(100, 100, 100, 200);
ctx.rect(150, 150, 10, 10);
ctx.rect(160, 150, 10 , 10);
ctx.rect(170, 150, 10, 10);
ctx.rect(160, 160, 10, 10)
ctx.stroke();