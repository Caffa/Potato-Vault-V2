function randChoice(myArray) {
    var randIndex = ~~(Math.random() * myArray.length);
    var rand = myArray[randIndex];
    return rand
}
module.exports = randChoice;