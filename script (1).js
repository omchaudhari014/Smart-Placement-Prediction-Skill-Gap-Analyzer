let mode = 'prediction';

function showForm(){
mode = 'prediction';
document.getElementById("home").style.display="none";
document.getElementById("formSection").style.display="block";
document.getElementById("submitBtn").innerHTML = "Predict Placement";
}



function showSkillGap(){
mode = 'skillgap';
document.getElementById("home").style.display="none";
document.getElementById("formSection").style.display="block";
document.getElementById("submitBtn").innerHTML = "Skill Gap Analyzer";
}



function goHome(){

location.reload();

}



document.getElementById("predictionForm").addEventListener("submit",function(e){

e.preventDefault();


let cgpa=document.getElementById("cgpa").value;
let programming=document.getElementById("programming").value;
let communication=document.getElementById("communication").value;
let logic=document.getElementById("logic").value;
let aptitude=document.getElementById("aptitude").value;


let result;


if(mode === 'prediction'){
if(cgpa>=7 && programming>=6 && communication>=5 && logic>=5 && aptitude>=5){

result="High Chance of Placement";

}

else{

result="Low Chance of Placement";

}
document.getElementById("resultTitle").innerHTML = "Prediction Result";
} else {
result = "Skill Gap Analysis for your scores:";
document.getElementById("resultTitle").innerHTML = "Skill Gap Analysis";
}


document.getElementById("formSection").style.display="none";
document.getElementById("resultSection").style.display="block";


document.getElementById("predictionResult").innerHTML=result;



let gapText="";


if(programming<7){

gapText+="Improve Programming Skills<br>";

}

if(communication<7){

gapText+="Improve Communication Skills<br>";

}

if(logic<7){

gapText+="Practice Logical Reasoning<br>";

}

if(aptitude<7){

gapText+="Improve Aptitude<br>";

}

if(gapText===""){

gapText="Your skills look good for placement!";

}


document.getElementById("skillGap").innerHTML=gapText;

});