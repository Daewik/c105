Webcam.set({
    height : 300,
    width : 300,
    image_format : 'jpeg',
    jpeg_quality : 90
});
camera = document.getElementById("camera");
Webcam.attach(camera);

function capture()
{
    Webcam.snap(function(data_uri){
        document.getElementById("image").innerHTML = "<img id='image1' src="+ data_uri+">";
    })
}

console.log("ml5 version is", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/zIbNWARVU/model.json",modelLoaded);

function modelLoaded()
{
    console.log("model is loaded!");
}

function identify()
{
    img=document.getElementById("image1");
    classifier.classify(img,gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(2);
    }
}