
let random = Math.floor((Math.random() * 50)) ;

/*function start(){
  document.getElementById('display').innerHTML = random; 
}*/


function higher(){
  if (random > 25) {
    let round = document.getElementById('display').innerHTML = random;
    document.getElementById('status').innerHTML = "You Won, this time";
    /*document.createAttribute('display').innerHTML = random;*/

    let add = document.getElementById("score").innerHTML;
    add++;
    localStorage.setItem('score', add);
    document.getElementById("score").innerHTML = add;
    localStorage.getItem('score');
  /*document.getElementById("high").click = random;
    console.log(random);*/
  } else {
    document.getElementById('display').innerHTML = random;
    document.getElementById('status').innerHTML = "You Lose. Glory to our site";
  } 
}

function lower(){
  if (random < 25) {
  document.getElementById('display').innerHTML = random;
  document.getElementById('status').innerHTML = "You Won, this time";
  } else {
    document.getElementById('display').innerHTML = random;
    document.getElementById('status').innerHTML = "You lose, Glory to our Site"
  }
}

function newround(){
  if ( random >26 || random < 24 ){
      document.getElementById('display').innerHTML = random;
    
}
}

function reset() {
  window.location.reload();
}
/*document.getElementById('no. display').innerHTML > random;
  console.log("greater")*/
  let score = localStorage.getItem('score');

  console.log(score);
