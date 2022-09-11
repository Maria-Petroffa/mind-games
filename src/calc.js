import { gameBody, generateNumberRandom } from './variables.js';

const startQuestionMessage = 'What is the result of the expression?';

const generateOperation = () => {
  const rundomNumber = generateNumberRandom(20);
  if (rundomNumber % 2 === 0) {
    return '+';
  }
  if (rundomNumber % 3 === 0) {
    return '*';
  }
  return '-';
};

const dataForQuestion = () => {
  const number1 = generateNumberRandom(20);
  const number2 = generateNumberRandom(20);
  const operation = generateOperation();
  return { number1, number2, operation };
};

const createQuestion = ({ number1, number2, operation }) => {
  const questionData = `${number1} ${operation} ${number2}`;
  let result = 0;
  if (operation === '+') {
    result = number1 + number2;
  } else if (operation === '*') {
    result = number1 * number2;
  } else {
    result = number1 - number2;
  }
  const correctAnswer = String(result);
  return { questionData, correctAnswer };
};

export default () => gameBody(startQuestionMessage, dataForQuestion, createQuestion);
