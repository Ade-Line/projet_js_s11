document.getElementById("titre").addEventListener("mouseover", mouseOver);
document.getElementById("titre").addEventListener("mouseout", mouseOut);

function mouseOver(){
   
    document.getElementById('titre').style.color = "red";
}

function mouseOut(){
   
    document.getElementById('titre').style.color = "black";
}


// document.getElementsByClassName("fab").addEventListener("mouseover", mouseOver);

// function mouseOver(){

//     document.getElementsByClassName('fab').style.color = "green";
// }    