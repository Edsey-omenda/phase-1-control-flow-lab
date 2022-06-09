function scuberGreetingForFeet(distance){
  // Write your code here!

  if(distance >=2501  ){
    return 'No can do.'
  }else if(distance >400 && distance >=2001){
    return 'I will gladly take your thirty bucks.'
  }else if(distance <=400){
    return 'This one is on me!'
  }
}


function ternaryCheckCity(destination){
  // Write your code here!
  return destination === 'NYC'? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return  "Thank you.";
      break;
    default:
      return  "Bye.";
  }
}