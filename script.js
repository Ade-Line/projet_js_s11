//BURGER MENU

const menuIcon = document.querySelector('.burger-menu');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
});

//CALCUL FRAIS

function calculer() {
    
    let child = document.getElementById('child').value;
    let hour = document.getElementById('hour').value;
    let tarif = document.getElementById('tarif').value;
    let entretien = document.getElementById('entretien').value;
    let repas = document.getElementById('repas').value;
    let gouter = document.getElementById('gouter').value;
      
    let result = +hour * +tarif * +child + +entretien + +repas + +gouter

    document.getElementById('result').value = result.toFixed(2)

}

function calculate() {
    let child1 = document.getElementById('child1').value;
    let hour1 = document.getElementById('hour1').value;
    let tarif1 = document.getElementById('tarif1').value;
    let entretien1 = document.getElementById('entretien1').value;
    let repas1 = document.getElementById('repas1').value;
    let gouter1 = document.getElementById('gouter1').value;

    let result1 = +hour1 * +tarif1 * +child1 + +entretien1 + +repas1 + +gouter1

    document.getElementById('result1').value = result1.toFixed(2)

    let cout = document.getElementById('result').value
      
    let cout1 = document.getElementById('result1').value

    let result2 = +cout + +cout1

    document.getElementById('result2').value = result2.toFixed(2)

}





//GEOLOCATION

        // PREMIERE METHODE

// var x = document.getElementById("demo");

// function getGeoLocation(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(onSuccess, onError);
//     }else{
//         x.innerHTML = "La géolocaliastion n'est pas prise en compte"
//     }
// }

// function onSuccess(position) {
//     x.innerHTML = "Latitude : " + position.coords.latitude + 
//     "<br>Longitude: " + position.coords.longitude;
// }

        // SECONDE METHODE


function getGeoLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }else{
        console.log('Not Supported');
    }
}


function onSuccess(position){
    const {latitude, longitude} = position.coords;
    // const {latitude, longitude} = {
    //     latitude: '40.785091',
    //     longitude: '-73.968285'
    // };

    const url = `https://www.latlong.net/c/?lat=${latitude}&long=${longitude}`;

    document.querySelector(".geo a").setAttribute('href', url);
    document.querySelector(".geo a").style.display = 'block';
}

function onError(error){
    console.log(error);
}

