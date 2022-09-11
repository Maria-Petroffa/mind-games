import { gameBody, generateNumberRandom } from './variables.js';

const startQuestionMessage = 'What number is missing in the progression?';

const generateListNumber = (length = 10, step = 2) => {
  const lengthList = length >= 5 ? length : 10;
  const stepNumber = step >= 2 ? step : 2;
  let currentNumber = generateNumberRandom(20);
  const result = [currentNumber];
  for (let i = 1; i < lengthList; i += 1) {
    result[i] = currentNumber + stepNumber;
    currentNumber += stepNumber;
  }
  return result;
};

const createQuestion = (list) => {
  const index = generateNumberRandom(9);
  const questionData = list;
  const answer = questionData.splice(index, 1, '..');
  return { questionData: questionData.join(' '), correctAnswer: `${answer[0]}` };
};

export default () => gameBody(startQuestionMessage, generateListNumber, createQuestion);