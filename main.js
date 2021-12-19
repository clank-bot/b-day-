function preload(){

}

function setup(){
    canvas = createCanvas(500,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    tint_color ="";
}

function draw(){
    image(video,80,80,350,280);
    tint(tint_color);
    fill("blue");
    stroke("gold");
    circle(50,50,80);
    circle(450,50,80);
    circle(50,350,80);
    circle(450,350,80);
    fill("orange");
    stroke("gold");
    rect(90,30,325,50);
    rect(90,325,325,50);
    rect(28,87,50,225);
    rect(425,87,50,225);
}

function take_snapshot(){
    save("kris.png");
}