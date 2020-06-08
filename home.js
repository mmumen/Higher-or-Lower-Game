let random = Math.floor((Math.random() * 100)) ;
function heads(){ 
    if (random > 50){
        /*document.getElementById('coin').innerHTML = random;*/
        document.getElementById('status').innerHTML = "you won, how unfortunate";
        location.replace("load.html")
        console.log(random);
        
    } else {
        /*document.getElementById('coin').innerHTML = random;*/
        document.getElementById('status').innerHTML = "You Lose. Glory to our site";
        console.log(random)
    }
}

function tails() {
    if (random < 49){
        /*document.getElementById('coin').innerHTML = random*/
        document.getElementById('status').innerHTML = "you won congratulation";
         location.replace("page.html")
        console.log(random)
    } else {
        /*document.getElementById('coin').innerHTML = random;*/
        document.getElementById('status').innerHTML = "You Lose. Glory to our site";
        console.log(random)
    }
}
