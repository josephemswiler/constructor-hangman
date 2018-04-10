let Letter = require('./letter.js')

class Word {
    constructor(word) {
        this.title = word
        let arr = []
        for (let i = 0; i < word.length; i++) {
            let loopLetter = new Letter(word.substr(i, 1))
            arr.push(loopLetter)
        }
        this.arr = arr //array of new Letter objects representing the letters of the underlying word
        this.complete = false
    }

    makeWord(guess) { //returns a string representing the word
        let buildStr = []
        let correct = false
        this.complete = true
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i].guessed) {
                buildStr.push(this.arr[i].character)
                this.arr[i].showResult(guess)
                correct = true
            } else if (this.arr[i].character === ' ') {
                buildStr.push(' ')
            } else {
                buildStr.push('_')
                this.complete = false
            }
        } //for loop
        if (!correct) {
            console.log('\x1b[31m%s\x1b[0m', `${guess.character} is incorrect!`)
        }
        console.log(buildStr.join(' '))
        // console.log(this.arr)
    }

    checkWord(letter) {
        for (let i = 0; i < this.arr.length; i++) {
            this.arr[i].checkLetter(letter)
        } //for loop
    }
}

module.exports = Word