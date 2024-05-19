
interface QuestionType
{
    getQuestionType() : String;
}
export class Answer
{
    id : String;
    answer : String;
    isCorrect : Boolean;
    constructor(id : String, answer : String, isCorrect : Boolean)
    {
        this.answer = answer;
        this.id = id;
        this.isCorrect = isCorrect;
    }
    getAnswer()
    {
        return this.answer;
    }
    getId()
    {
        return this.id;
    }
    getIsCorrect()
    {
        return this.isCorrect;
    }
}

export class Question{
    question : String;
    id  : String;
    answer : Answer;
    constructor(id : String, question: String, answer: Answer){
        this.id = id;
        this.question  = question;
        this.answer = answer;
    }
    getQuestion()
    {
        return this.question;
    }
    getAnswer()
    {
        return this.answer;
    }
    getId()
    {
        return this.id;
    }
    getQuestionType(): String {
        return 'Question';
    }
}
export class MultipleChoiceQuestion extends Question
{
    options : Answer[];
    constructor(id: String, question: String, options: Answer[]){
        super(id, question, null);
        this.options = options;
    }
    getQuestionType(): String {
        return 'MultipleChoice';
    }
    getOptions()
    {
        return this.options;
    } 
    getCorrectOptions()
    {
        this.options.filter(option => {
            option.getIsCorrect();
        });
    }
}
export class BooleanQuestion extends Question
{
    constructor(id: String, question: String, answer: Boolean){
        super(id, question, new Answer('0',answer.toString() , answer));
    }
    getQuestionType(): String {
        return 'Boolean'
    }
}

const questions : Question[] = [
    new MultipleChoiceQuestion('1', "What is my favorite Color?", [
        new Answer('1', 'Red', false),
        new Answer('2', 'Green', false),
        new Answer('3', 'Blue', true)
    ]),
    new BooleanQuestion('2', 'Is my favorite Color Red?', true),
    new BooleanQuestion('3', 'Is my favorite Color Green?', false),
        new MultipleChoiceQuestion('1', "What is the capital of Japan?", [
            new Answer('1', 'Tokyo', true),
            new Answer('2', 'Kyoto', false),
            new Answer('3', 'Osaka', false),
            new Answer('4', 'Seoul', false)
        ]),
        new BooleanQuestion('2', 'Is water composed of two hydrogen atoms and one oxygen atom?', true),
        new BooleanQuestion('3', 'Is Pluto considered a planet?', false),
        new MultipleChoiceQuestion('4', "Who wrote 'Romeo and Juliet'?", [
            new Answer('1', 'William Shakespeare', true),
            new Answer('2', 'Charles Dickens', false),
            new Answer('3', 'Jane Austen', false),
            new Answer('4', 'Leo Tolstoy', false)
        ]),
        new BooleanQuestion('5', 'Is the Amazon river the longest river in the world?', false),
        new MultipleChoiceQuestion('6', "What is the chemical symbol for gold?", [
            new Answer('1', 'Au', true),
            new Answer('2', 'Ag', false),
            new Answer('3', 'Fe', false),
            new Answer('4', 'Cu', false)
        ])    
 ];
export default questions;