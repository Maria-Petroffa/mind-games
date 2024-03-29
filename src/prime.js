import { gameBody, generateNumberRandom } from './variables.js';

const startQuestionMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNum = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const createQuestion = (data) => {
  const questionData = data;
  const correctAnswer = isPrimeNum(questionData) ? 'yes' : 'no';
  return { questionData, correctAnswer };
};

const dataForQuestion = () => generateNumberRandom(20);

export default () => gameBody(startQuestionMessage, dataForQuestion, createQuestion);
