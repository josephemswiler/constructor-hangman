class Letter {
    constructor(character) {
        this.character = character //store the underlying character
        this.guessed = false //boolean value that stores whether that letter has been guessed yet
    }

    showResult(letter) { //underlying character if the letter has been guessed, or a placeholder(like an underscore) if the letter has not been guessed
        if (letter.guessed) {
            return
        } else if (this.guessed && letter.character === this.character) {
            console.log('\x1b[32m%s\x1b[0m', `${letter.character} is correct!`)
            letter.guessed = true
        } else {}
    }

    checkLetter(letter) { //takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
        if (letter.character === this.character) {
            this.guessed = true
        } else {}
    }

}

module.exports = Letter