import readlineSync from 'readline-sync';

const generateNumberRandom = () => Math.floor(Math.random() * 20)

const maxCorrectAnsver = 3;

export default () => {

    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`)
    console.log('Find the greatest common divisor of given numbers.')

    for (let i = 1; i <= maxCorrectAnsver; i += 1) {
        const currentNumber1 = generateNumberRandom()
        const currentNumber2 = generateNumberRandom()

        const correctAnswer = (number1, number2) => {
            if (number1 === number2) {
                return number1
            }
            let furstNum = Math.max(number1, number2)
            let secondNum = Math.min(number1, number2)

            for (; furstNum != 0 || secondNum != 0;) {
                if (furstNum > secondNum) {
                    furstNum = furstNum % secondNum
                } else {
                    secondNum = secondNum % furstNum
                }

                if (furstNum === 0 || secondNum == 0) {
                    break
                }
            }

            return furstNum + secondNum + ''
        }

        console.log(`Question: ${currentNumber1} ${currentNumber2}`)
        const answer = readlineSync.question('Your answer: ')
        const tryAnswer = correctAnswer(currentNumber1, currentNumber2)


        if (answer === tryAnswer) {
            console.log('Correct!')
        } else {
            console.log(`"${answer}" is wrong answer ;(. Correct answer was "${tryAnswer}".`)
            console.log(`Let's try again, ${name}!`)
            break
        }
        if (i === 3) {
            console.log(`Congratulations, ${name}!`)
            break
        }
    }
}