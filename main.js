canvas=document.getElementById("myCanvas");
var background_imgTag;
ctx=canvas.getContext("2d");

nasa_mars_images_array=["Mars2.png","mars3.png","mars4.png","mars.jpg"];

random_number=Math.floor(Math.random()*4);

console.log(random_number);

rover_width=100 
rover_height=90
 
background_image=nasa_mars_images_array[random_number];
rover_image="rover.png";
rover_x=10 
rover_y=10
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
    
}
function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover.width,rover.height);
}
window.addEventListener("keydown",my_keyDown);
function my_keyDown(e) 
{
    keyPressed = e.keyCode; console.log(keyPressed); 
    if(keyPressed == '38') { up();
         console.log("up"); } 
         if(keyPressed == '40') { down(); console.log("down"); } 
         if(keyPressed == '37') { left(); console.log("left"); } 
         if(keyPressed == '39') { right(); console.log("right"); }
}
function up() { 
    if(rover_y >=0) {
         rover_y = rover_y - 10; 
         console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
 uploadBackground(); 
 uploadrover(); } }
 function down() { 
    if(rover_y <=600) {
         rover_y = rover_y + 10; 
         console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
 uploadBackground(); 
 uploadrover(); } }
 function left() { 
    if(rover_x >=0) {
         rover_x = rover_x - 10; 
         console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
 uploadBackground(); 
 uploadrover(); } }
 function right() { 
    if(rover_x <=800) {
         rover_x = rover_x + 10; 
         console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
 uploadBackground(); 
 uploadrover(); } }