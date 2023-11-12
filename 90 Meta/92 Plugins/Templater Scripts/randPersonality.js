
const persTraitsa = ["Introverted", "Extroverted"];
const persTraitsb = ["Practical", "Imaginative"];
const persTraitsc = ["Logical", "Emotional"];
const persTraitsd = ["Planning", "Spontaneous"];
const persTraitse = ["Self-assured", "Self-conscious"];

function randChoice(myArray) {
    var randIndex = ~~(Math.random() * myArray.length);
    var rand = myArray[randIndex];
    return rand
}

function randPersonality() {
    var myString = randChoice(persTraitsa) + ", " + randChoice(persTraitsb) + ", " + randChoice(persTraitsc) + ", " + randChoice(persTraitsd) + ", " + randChoice(persTraitse);
    return myString;
}

// console.log(~~(Math.random() * persTraitsa.length))
// console.log(persTraitsa[0]);
// console.log(randChoice(persTraitsa));
// console.log(randPersonality());

module.exports = randPersonality;