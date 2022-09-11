import { gameBody, generateNumberRandom } from './variables.js';

const startQuestionMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const dataForQuestion = () => generateNumberRandom(20);

const createQuestion = (data) => {
  const questionData = data;
  const correctAnswer = data % 2 === 0 ? 'yes' : 'no';
  return { questionData, correctAnswer };
};

export default () => gameBody(startQuestionMessage, dataForQuestion, createQuestion);
