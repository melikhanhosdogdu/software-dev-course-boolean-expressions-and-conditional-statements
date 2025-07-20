const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasSword = true;
const hasCompass = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'? ");

if (choice === "mountains") {
  if (hasTorch && hasSword) {
    console.log("With your torch and sword, you safely fight off wild animals and navigate the dark mountains.");
  } else if (hasTorch && !hasSword) {
    console.log("You have your torch but no weapon. You carefully avoid danger and make it through the mountains.");
  } else if (!hasTorch && hasSword) {
    console.log("It's too dark to see well, but you defend yourself with your sword. You decide to find a torch next time.");
  } else {
    console.log("It's too dark and dangerous. You get lost and decide to turn back.");
  }
} else if (choice === "village") {
  if (hasMap || hasCompass) {
    console.log("Using your map or compass, you find the village easily.");
  } else {
    console.log("Without a map or compass, you wander but eventually find a helpful traveler who guides you to the village.");
  }
} else {
  console.log("You hesitate and wander aimlessly, unsure where to go.");
}
