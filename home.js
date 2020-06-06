let random = Math.floor((Math.random() * 2)) ;
function heads(){ 
    if (random => 2){
        document.getElementById('coin').innerHTML = random;
        document.getElementById('status').innerHTML = "you won congratulation"
    } else {
        document.getElementById('coin').innerHTML = random;
        document.getElementById('status').innerHTML = "You Lose. Glory to our site";
    }
}

function tail() {
    if (random <=1){
        document.getElementById('coin').innerHTML = random
        document.getElementById('status').innerHTML = "you won congratulation"
    } else {
        document.getElementById('coin').innerHTML = random;
        document.getElementById('status').innerHTML = "You Lose. Glory to our site";
    }
}