    Webcam.set({
    width:350,
    hieght:300,
    image_format:"png",
    png_quality:98,
    })

camera=document.getElementById("camera")

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
document.getElementById('result').innerHTML='<img id="captured_image" src="'+data_uri+'"/>'
    })
}
console.log("ml5version- ",ml5.version)
classifier=ml5.imageClassifier("",modelLoaded)
function modelLoaded(){
    console.log("apoorvhas loaded model")
}