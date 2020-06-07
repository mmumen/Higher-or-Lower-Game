let random = Math.floor((Math.random() * 100)) ;
function first(){ 
    if (random <= 25){
        document.getElementById('status').innerHTML = "you won, how unfortunate";
        //location.replace("page.html")
        console.log(random);
        
    } else {
        document.getElementById('status').innerHTML = "You Lose. Glory to our site";
        console.log(random)
    }
}

function second() {
    if (random => 26 && random <=50){
        document.getElementById('status').innerHTML = "you won congratulation";
        //location.replace("page.html")
        console.log(random)
    } else {
        document.getElementById('status').innerHTML = "You Lose. Glory to our site";
        console.log(random)
    }
}

function third(){ 
    if (random => 51 && random <= 75){
        document.getElementById('status').innerHTML = "you won, how unfortunate";
        location.replace("page.html")
        console.log(random);
        
    } else {
        document.getElementById('status').innerHTML = "You Lose. Glory to our site";
        console.log(random)
    }
}

function fourth(){ 
    if (random => 76){
        document.getElementById('status').innerHTML = "you won, how unfortunate";
        location.replace("page.html")
        console.log(random);
        
    } else {
        document.getElementById('status').innerHTML = "You Lose. Glory to our site";
        console.log(random)
    }
}