var hardWork = 7;

if (hardWork > 8) {
  console.log("You will be a great developer!");
} else if (hardWork > 6) {
  console.log("You're getting better, but you could be working harder!");
} else {
  console.log("You're slacking. I saw you fall asleep on the desk.");
}


var pollution = 9;

  if (pollution > 2) {
    console.log("enact measures");

    } else if (pollution > 6) {
    console.log("emergency situation");

    } else { console.log("under control");
    }

var hardWork = 9;

if (hardWork > 8) {
  console.log("You will be a great developer!");
}
if (hardWork > 6) {
  console.log("You're getting better, but you could be working harder!");
}

 NOT
var isSmart = true;
if (!isSmart){
  console.log("Go to school!");
}

// AND
var isDeveloper = true;
if (isSmart && isDeveloper){
  console.log("Congrats, looks like you're an Ironhacker!");
}

// OR
var languageOfChoice = "JavaScript"
if (isDeveloper && (languageOfChoice === "JavaScript" || languageOfChoice === "Ruby")){
  console.log("You are a smart developer!");
}

var brave = true;
  if (!brave) {
    console.log("i'll think about it")
  }

var smart = true;
  if (brave && smart) {
    console.log("skydiving maybe...")
  }

var silly = false;
  if (brave || silly) {
    console.log("stand-comedy could be an option")
  }

var favMusic = "rap"
  if((!smart && silly) && (favMusic === "rap" || favMusic === "electro")) {
    console.log("you are the man!")
  }

let hungry = true,
    inTheMoodForBreakfast = true,
    isLunchTime = false,
    isDinnerTime = true,
    isBreakfastTime = false;


if (hungry && isLunchTime){
  console.log("Time to go to lunch!");

} else if (isDinnerTime && !hungry){
  console.log("Let's go for drinks, I'm not very hungry!");

} else if (isBreakfastTime || inTheMoodForBreakfast){
  console.log("I could really go for some french toast...");

} else {
  console.log("Guess I'll have a snack")

}

let dinnerTime = true,
    hungry = false,
    rich = false,
    frustrated = false,
    smart = true,
    eminemFan = true;

if (dinnerTime && rich) {
  console.log("we're not going to 5 star place")

} else if (eminemFan || frustrated) {
  console.log("I got to study, reward myself w em")

} else if (!rich && !frustrated) {
  console.log("time for mcdonalds")

} else { console.log("keep studying")
}

let dinner = "ralphs";

switch (dinner) {
  case "kfc":
    console.log("i hate that place")
    break;
  case "rubios":
    console.log("omg yes, I cannot wait")
    break;
  case "roy's":
    console.log("souffle time")
    break;
  case "rando sandwich shop":
    console.log("do we have to go there?")
    break;
}

if (2) {
  console.log("truthy");
}
var name = "Ironhack";
if ("Hi!" && name) {
  console.log("truthy");
}
var age;
if (age && "Bye") {
  console.log("falsy")
}
if (0) {
  console.log("falsy")
}

var counter = 0;

while (counter <= 10) {
  console.log(counter);
  counter += 1.5;
}



var counter = 30;

while (counter > 0){
  console.log(counter);
  counter += -1;
}

for (var i = 5; i <= 100; i++){
  console.log(i);
}

for (var i = ""; i.length <= 20; i += "*"){
  console.log(i);
}

for (var ruxpin = ''; ruxpin.length <= 10; ruxpin += '@'){
  console.log(ruxpin);
}



for (var i = 10; i >= 0; i--){
  console.log(i);
}

for (var i = 5; i < 24; i++){
  console.log(i);
}

console.log("herro")

for (var i = 1; i <= 30; i++){
  if (i === 21){
    console.log("TWENTY ONE! Blackjack.");
    break;
  } else {
    console.log(i);
  }
}

for (var i = 1; i <= 50; i++){
  if (i % 7 === 0) {
    console.log(i + 1);

    } else if (i % 15 === 0 || i % 10 === 0){
    console.log("Donkey!");

    } else if (i % 2 === 1 && i % 10 === 0){
      console.log("Monkey!");
    
    } else {
      console.log(i);
    }
  }