let Word = require('./word.js')
let Letter = require('./letter.js')
let inquirer = require('inquirer')
let guesses = 3
let wordArr = [
    'The Shawshank Redemption',
    'The Godfather',
    'Pulp Fiction',
    'Inception',
    'The Dark Knight',
    'Star Wars',
    'Casablanca',
    'Fight Club',
    'The Lord of the Rings',
    'Toy Story',
    'The Matrix',
    'Forrest Gump'
]
let movieTitle = wordArr[Math.floor(Math.random() * wordArr.length)]
let movie = new Word(movieTitle.toLowerCase())

let playGame = function () {
    if (movie.complete) {
        console.log('\x1b[32m%s\x1b[0m', `You win! The correct movie title was ${movieTitle}!`)
        return
    }
    if (guesses > 0) {
        inquirer.prompt([{
            name: "guess",
            message: "Guess a letter to complete the movie title!",
            validate: function (input) {
                if (input === '') {
                    console.log('\x1b[31m%s\x1b[0m', `Please guess a letter!`)
                    return false
                } else if (input.length > 1) {
                    console.log('\x1b[31m%s\x1b[0m', ` Please guess one letter at a time!`)
                    return false
                }
                return true
            }
        }]).then(function (answers) {
            let currentGuess = new Letter(answers.guess.toLowerCase())
            // console.log(movie)
            // console.log(currentGuess)
            movie.checkWord(currentGuess)
            movie.makeWord(currentGuess)

            if (!currentGuess.guessed) {
                guesses--
                if (guesses === 1) {
                    console.log('\x1b[34m%s\x1b[0m', `${guesses} guess remaining!`)
                } else {
                    console.log('\x1b[34m%s\x1b[0m', `${guesses} guesses remaining!`)
                }
            }

            playGame()

        }).catch((err) => console.log(err))
    } else {
        console.log('\x1b[31m%s\x1b[0m', `You lose! The correct movie title was ${movieTitle}!`)
    }
}

playGame()

// Prompts the user for each guess and keeps track of the user's remaining guesses