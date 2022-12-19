var cat=0;
var cow=0;
var lion=0;
var dog=0;

function startClassifictaion() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/wQ4goxDcd/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}
function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;
document.getElementById("number").innerHTML="Detected dog sound:"+dog+" ,Detected cat sound:"+cat+ " ,Detected lion sound:"+lion+ " ,Detected cow sound:"+cow;
document.getElementById("name").innerHTML="Detected voice is of :"+results[0].label;
img=document.getElementById("image");
if(results[0].label=="barking")
{
    img.src="dog.jpg";
dog=dog+1;
}
else if(results[0].label=="Meowing")
{
    img.src="cat.jpg";
    cat=cat+1;
}
else if(results[0].label=="Mooing")
{
    img.src="cow.jpg";
    cow=cow+1;
}
else if(results[0].label=="Roar")
{
    img.src="lion.jpg";
    lion=lion+1;
}

else{
    img.src="ear.gif";
}
    }


   
}