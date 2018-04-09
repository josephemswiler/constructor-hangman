class Letter {
    constructor(character) {
        this.character = character //store the underlying character
        this.guessed = false //boolean value that stores whether that letter has been guessed yet
    }

    showLetter() { //underlying character if the letter has been guessed, or a placeholder(like an underscore) if the letter has not been guessed
        if (this.guessed) {
            return this.character
        } else {
            return "_"
        }
    }

    checkLetter(letter) { //takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
        if (this.guessed && letter === this.character) {
            console.log(`${letter} has already been guessed!`)
        } else if (letter === this.character) {
            this.guessed = true
        } else {}
        // this.showLetter()
    }

} //Letter

console.log('letter runs')

// let arg = process.argv[2]

// let a = new Letter('a', false)

// a.checkLetter(arg)

module.exports = Letter