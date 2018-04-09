let Letter = require('./letter')

class Word {
    constructor(word) {
        let arr = []
        for (let i = 0; i < word.length; i++) {
            let loopLetter = new Letter(word.substr(i, 1))
            arr.push(loopLetter)
        }
        this.arr = arr //array of new Letter objects representing the letters of the underlying word
    }

    makeWord() { //returns a string representing the word
        this.arr[2].guessed = true
        let buildStr = []
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i].guessed) {
                buildStr.push(this.arr[i].character)
            } else {
                buildStr.push('_')
            }
        } //for loop
        console.log(buildStr.join(' '))
        // console.log(this.arr)
    }

    checkWord(letter) {
        for (let i = 0; i < this.arr.length; i++) {
            this.arr[i].checkLetter(letter)
        } //for loop
        this.makeWord()
    }
}

let test = new Word('test')

let arg = process.argv[2]

test.checkWord(arg)