import { gameBody, generateNumberRandom } from './variables.js';

const startQuestionMessage = 'Find the greatest common divisor of given numbers.';

const dataForQuestion = () => ({
  number1: generateNumberRandom(20),
  number2: generateNumberRandom(20),
});

const getGcd = (number1, number2) => {
  if (number1 === number2) {
    return String(number1);
  }
  if (number1 === 0 || number2 === 0) {
    return String(Math.max(number1, number2));
  }
  let furstNum = number1;
  let secondNum = number2;
  for (; furstNum !== 0 || secondNum !== 0;) {
    if (furstNum > secondNum) {
      furstNum %= secondNum;
    } else {
      secondNum %=  furstNum;
    }
    if (furstNum === 0 || secondNum === 0) {
      break;
    }
  }
  return String(furstNum + secondNum);
};

const createQuestion = ({ number1, number2 }) => {
  const correctAnswer = getGcd(number1, number2);
  const questionData = `${number1} ${number2}`;
  return { questionData, correctAnswer };
};

export default () => gameBody(startQuestionMessage, dataForQuestion, createQuestion);
