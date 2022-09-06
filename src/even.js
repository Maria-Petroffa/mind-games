import readlineSync from 'readline-sync';

const generateNumberRandom = () => Math.floor(Math.random() * 20)
const maxCorrectAnsver = 3;

export default () => {

    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`)
    console.log('Answer "yes" if the number is even, otherwise answer "no".')

    for (let i = 1; i <= maxCorrectAnsver; i += 1) {
        const currentNumber = generateNumberRandom()
        const correctAnswer = currentNumber % 2 === 0 ? 'yes' : 'no'
        console.log(`Question: ${currentNumber}`)
        const answer = readlineSync.question('Your answer: ')
        if (currentNumber % 2 === 0 && answer === correctAnswer) {
            console.log('Correct!')
        } else if (currentNumber % 2 !== 0 && answer === correctAnswer) {
            console.log('Correct!')
        } else {
            console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`)
            console.log(`Let's try again, ${name}!`)
            break
        }
        if (i === 3) {
            console.log(`Congratulations, ${name}!`)
            break
        }
    }
}



