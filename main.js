nose_X = 0
nose_Y = 0
function preload(){
    clown_nose = loadImage("https://i.postimg.cc/Dy3cSQWR/Moustache-PNG-Clipart.png");
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("Model Loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_X = results[0].pose.nose.x - 33;
        nose_Y = results[0].pose.nose.y - 7;
        console.log(nose_X, nose_Y)
    }
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(clown_nose, nose_X, nose_Y, 70, 50);

}
function take_snapshot(){
    save("It_is_your_filtered_image.png")
}