import mongoose from "mongoose";
const Schema = mongoose.Schema;
import Answer from './AnswerSchema.js';

const multipleChoiceQuestionSchema = new Schema({
    id: { type: String, required: true },
    question: { type: String, required: true },
    options: [{ type: Schema.Types.ObjectId, ref: 'Answer', required: true }],
    questionType: { type: String, default: 'MultipleChoice' }
});

const MultipleChoiceQuestion = mongoose.model('MultipleChoiceQuestion', multipleChoiceQuestionSchema);
module.exports = MultipleChoiceQuestion;
