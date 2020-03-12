const navbar = document.querySelector('header')


navbar.addEventListener('click', function (){

    const currentColor = document.querySelector('header').style.background

    if (currentColor === "coral"){
        document.querySelector('header').style.background = "blue"
    } else {
        document.querySelector('header').style.background = "coral"
    }
})

const li = document.querySelector('ul')

li.addEventListener('mousemove', function() {
    const color = document.querySelector('ul').style.color

    document.querySelector('ul').style.color = "green"

})

li.addEventListener('mouseout', function() {
    const color = document.querySelector('ul').style.color

    document.querySelector('ul').style.color = "black"

})

let btn1 = document.getElementById('btn1')

btn1.addEventListener('click', function(){
    document.querySelector('body').style.background = "aquamarine"
})

let btn2 = document.getElementById('btn2')
let box1 = document.getElementById('box1')


btn2.addEventListener('click', function(){
    const currentColor = document.querySelector('#box1').style.background

    if(currentColor === "white") {
        document.getElementById('box1').style.background = "red"
    }else{
        document.getElementById('box1').style.background = "white"
    }
})

let btn3 = document.getElementById('btn3')
let box2 = document.getElementById('box2')


btn3.addEventListener('click', function(){
    document.getElementById('box2').innerText = "Coucou John"

})    

let btn4 = document.getElementById('btn4')
let box3 = document.getElementById('box3')

btn4.addEventListener('click', function () {
    const currentBorder = document.getElementById('box3').style.border
    if (currentBorder === "1px solid black") {
        document.getElementById('box3').style.border = "1px solid green"
    } else {
        document.getElementById('box3').style.border = "1px solid black"
    }


    let title = document.createElement("h1")
    
    let lien = document.createElement("a")
   
    let texte = document.createTextNode("John Forever")

    lien.appendChild(texte)
    title.appendChild(lien)

    let node = document.getElementById("box3")
    node.appendChild(title)


})