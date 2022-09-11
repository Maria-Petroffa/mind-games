import { gameBody, generateNumberRandom } from './variables.js';

const startQuestionMessage = 'Find the greatest common divisor of given numbers.';

const dataForQuestion = () => ({
    number1: generateNumberRandom(20),
    number2: generateNumberRandom(20)
});

const createQuestion = ({ number1, number2 }) => {
    if (number1 === number2) {
        return number1
    }
    if (number1 === 0 || number2 === 0) {
        return 0
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
    const correctAnswer = furstNum + secondNum + ''
    const questionData = `${number1} ${number2}`

    return { questionData, correctAnswer }
}

export default () => gameBody(startQuestionMessage, dataForQuestion, createQuestion);