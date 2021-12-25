let  readlineSync  =  require('readline-sync');

console.log( ".........................Welcome to Magic Hour!............................................................................................................................................................................." );
console.log("....................................................................................................................................................................................................................................................................................");
console.log( "Do you want the great wizard Walter to read your mind?" );
let option1 = readlineSync.question( "Options: yes? or no?" );
switch (option1) {
  case "yes" || "y"|| "YES" || "Y":
  console.log( "Great! now let's get to it. I want you to pick a number between 1-10 but DON'T tell me! I will use my great Wizard powers to guess the number!" );
  break;
  case "no" || "n" || "NO" || "N":
  console.log( "Fine! Git git!" );
  console.log("See you later!");
  return ;

// if (option1 === "yes" || "y"|| "YES" || "Y") {
//   console.log( "Great! now let's get to it. Pick a number between 1-10 but DON'T tell me!" );
// } else {
//   console.log( "Fine! Git git!" );
//   console.log("See you later!");
// return;
}
// switch(option1) {
//   case "yes":
//     console.log( "Great! now let's get to it. Pick a number between 1-10 but DON'T tell me!" );
//     break;
//   case "no":
//     console.log( "Fine! Git git!" );
//     console.log("See you later!");
//     return;
//   }

  console.log( "Did you think of a number?" );
  let option2 = readlineSync.question( "Options: yes? no? or exit?" );
  switch (option2) {
    case "Exit" || "exit" || "E" || "e":
      console.log("Fine! You don't want your mind read! See you later!");
      return;
    case "yes" || "y"|| "YES" || "Y":
      console.log( "Great! Now multiply your number by 2" );
      break;
    case "no" || "n" || "NO" || "N":
      console.log( "Well Hurry up then!.." );
      break;
    }
    let optTwoResponse = readlineSync.question( "did you multiply your number by 2? Options: yes? no? or exit?" );
    switch (optTwoResponse) {
      case "yes" || "y"|| "YES" || "Y":
      console.log( "Great!" );
      break;
      case "no" || "n" || "NO" || "N" || "Exit" || "E"||"exit"||"e":
      console.log("I guess I can wait.... NO I can't GOODBYE!");
      return;
}

//   if (option2 === "yes" || "y"|| "YES" || "Y") {
//   console.log( "Great! Now multiply your number by 2" );
// } else if (option2 === "no" || "n" || "NO" || "N"){
//   console.log( "Well Hurry up then!.. are you ready NOW?" );
// } else if (option2 === "exit" || "EXIT" || "Exit" || "e" || "E"){
//     console.log("Nevermind! I Don't want to tell your fortune anymore! Goodbye!");
//     return;
//   }

// let optionTwoOne = readlineSync.question( "Options: yes? no? or exit?" );
//   if (optionTwoOne === "yes" || "y"|| "YES" || "Y") {
//   console.log( "Great! Now multiply your number by 2" );
// }
//


  // switch(option2) {
  //   case "yes":
  //     console.log( "Great! Now multiply your number by 2" );
  //     break;
  //   case "no":
  //     console.log( "Well Hurry up then!" );
  //     break;
  //   }

    console.log( "Hmmm.... your mind is strong. I need to kick it up a notch, are you ready?" );
    let option3 = readlineSync.question( "Options: yes? or no?" );

    switch(option3) {
      case "yes" || "y"|| "YES" || "Y":
        console.log( "OK! Now multiply the last number by 5" );
        break;
      case "no" || "n" || "NO" || "N":
        console.log( "I'll give you some more time... Hurry up! Are you ready now?!?" );
        break;
      case "Exit" || "exit" || "E" || "e":
        console.log("Fine! You don't want your mind read! See you later!");
        return;
      }
      let num = readlineSync.question( "What number did you get?" );
      let guessNum = num.substring(0, num.length-1);
      let verify = typeof guessNum;
      //verification
      if(isNaN(guessNum)){
	       console.log("You are terrible at math" + guessNum + " is not a number");
       }else{console.log(guessNum + " is a number");
 }


      console.log( "Ahh ok!! Now stare at the screen and think of your original number" );
      console.log("............................................");
      console.log("............................................");
      console.log("............................................");
      console.log("............................................");
      console.log("................Is your number...."+ guessNum +"?");
