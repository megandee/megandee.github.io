var randomNum=Math.floor(Math.random()*9)
var randomNum2=Math.floor(Math.random()*9)

console.log(randomNum)

const treasure=(number)=>{
    if(number===randomNum){  
        document.getElementById(number).innerHTML="💚"
}

else if(number===randomNum2){  
    document.getElementById(number).innerHTML="💚"
    alert('You win!')
}

else{
    document.getElementById(number).innerHTML="💣"
    alert('You lose!')
    }
}


// if(heart==="0"){
//        document.getElementById("0").innerHTML="💚"
// } else if(heart==="1"){
//     document.getElementById("1").innerHTML="💣"
//  } else if(heart==="2"){
//  document.getElementById("2").innerHTML="💣"}
//  if(heart==="3"){
//     document.getElementById("3").innerHTML="💣"
// } else if(heart==="4"){
//     document.getElementById("4").innerHTML="💣"
//  } else if(heart==="5"){
//  document.getElementById("5").innerHTML="💣"}
//  if(heart==="6"){
//     document.getElementById("6").innerHTML="💣"
// } else if(heart==="7"){
//     document.getElementById("7").innerHTML="💣"
//  } else if(heart==="8"){
//  document.getElementById("8").innerHTML="💣"}
 
//  }