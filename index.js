// Code your solutions in this file

const messsage = []

const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names, suprise){

  for(let i = 0; i < names.length; i++){
    messsage.push(`Thank you, ${names[i]}, for the wonderful ${suprise} gift!`);
  }

  return messsage

}



function countDown(num){

  while (num >= 0 ){
    console.log(num)
    num--;


  }
 
 
}

