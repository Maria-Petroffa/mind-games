import readlineSync from 'readline-sync';

export const maxCorrectAnswer = 3;

export const generateNumberRandom = (maxNumber = 10) => Math.floor(Math.random() * maxNumber);

export const startMessage = (question) => {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(question);
    return name;
}

export const wrongAnswerMessage = (name, userAnswer, correctAnswer) => {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${name}!`);
}

export const rightAnswerMessage = () => console.log('Correct!');

export const winMessage = (name) => console.log(`Congratulations, ${name}!`);

export const generateQuestionMessage = (dataForQuestion) => {
    console.log(`Question: ${dataForQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    return answer;
};

export const createQuestionData = (data, func) => {
    const { questionData, correctAnswer } = func(data)
    return { questionData, correctAnswer }
}

// тело игры

export const gameBody = (startQuestionMessage, dataForQuestion, createQuestion) => {

    // приветствие
    const name = startMessage(startQuestionMessage)

    for (let i = 1; i <= maxCorrectAnswer; i += 1) {

        // генерируется вопрос + верный ответ
        const { questionData, correctAnswer } = createQuestionData(dataForQuestion(), createQuestion)

        // задается вопрос + принимается ответ
        const userAnswer = generateQuestionMessage(questionData)

        // проверка ответа
        if (userAnswer === correctAnswer) {
            rightAnswerMessage()
        } else {
            return wrongAnswerMessage(name, userAnswer, correctAnswer)
        }
        if (i === 3) {
            return winMessage(name);
        }
    }
}