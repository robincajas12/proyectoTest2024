import mongoose from "mongoose";
const Schema = mongoose.Schema;
import Answer from "./AnswerSchema.js";
const booleanQuestionSchema = new Schema({
    id: { type: String, required: true },
    question: { type: String, required: true },
    answer: { type: Schema.Types.ObjectId, ref: 'Answer', required: true },
    questionType: { type: String, default: 'Boolean' }
});

const BooleanQuestion = mongoose.model('BooleanQuestion', booleanQuestionSchema);
module.exports = BooleanQuestion;
