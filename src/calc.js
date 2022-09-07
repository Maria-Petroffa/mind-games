import readlineSync from 'readline-sync';

const generateNumberRandom = () => Math.floor(Math.random() * 20)
const generateOperation = () => {
    const rundomNumber = generateNumberRandom()
    if (rundomNumber % 2 === 0) {
        return "+";
    }
    if (rundomNumber % 3 === 0) {
        return "*";
    }
    return '-';
}

const maxCorrectAnsver = 3;

export default () => {

    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`)
    console.log('What is the result of the expression?')

    for (let i = 1; i <= maxCorrectAnsver; i += 1) {
        const currentNumber1 = generateNumberRandom()
        const currentNumber2 = generateNumberRandom()
        const currentOperation = generateOperation()

        const correctAnswer = (number1, number2) => {
            let result = 0
            if (currentOperation === '+') {
                result = number1 + number2;
            } else if (currentOperation === '*') {
                result = number1 * number2
            } else {
                result = number1 - number2
            }
            return result + ""
        }

        console.log(`Question: ${currentNumber1} ${currentOperation} ${currentNumber2}`)
        const answer = readlineSync.question('Your answer: ')


        if (answer === correctAnswer(currentNumber1, currentNumber2)) {
            console.log('Correct!')
        } else {
            console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer(currentNumber1, currentNumber2)}".`)
            console.log(`Let's try again, ${name}!`)
            break
        }
        if (i === 3) {
            console.log(`Congratulations, ${name}!`)
            break
        }
    }
}