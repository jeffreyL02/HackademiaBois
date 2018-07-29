let x = document.getElementById("playBtn");
if(x){
  x.addEventListener('click', myFunction);
}
else{
  setTimeout(myFunction, 1000)
}
// let x = document.getElementById("playBtn")
// x.addEventListener("click", myFunction);

function myFunction(){
  x = document.getElementById("playBtn");
  x.addEventListener('click', pressBtn);
}

function pressBtn(){
  let nick = prompt("Enter a nickname");
  console.log(nick);
}
