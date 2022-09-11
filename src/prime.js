import readlineSync from 'readline-sync';

const generateNumberRandom = (maxNumber = 10) => Math.floor(Math.random() * maxNumber)
const generateListNumber = (length = 10, step = 2) => {
    const lengthList = length >= 5 ? length : 10;
    const stepNumber = step >= 2 ? step : 2;
    let currentNumber = generateNumberRandom(20)
    const result = [currentNumber]
    for (let i = 1; i < lengthList; i += 1) {
        result[i] = currentNumber + stepNumber
        currentNumber += stepNumber
    }
    return result
}

const generateQuestion = () => {
    const question = generateNumberRandom(20);
    const answer = isPrimeNum(question) ? 'yes' : 'no';
    return { question, correctAnswer: answer }
}

const isPrimeNum = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    };
    return true;
}

const maxCorrectAnsver = 3;

export default () => {

    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`)
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

    for (let i = 1; i <= maxCorrectAnsver; i += 1) {
        const listNumber = generateListNumber()
        const questionObject = generateQuestion()
        const { question, correctAnswer } = questionObject

        console.log(`Question: ${question}`)
        const answer = readlineSync.question('Your answer: ')

        if (answer === correctAnswer) {
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