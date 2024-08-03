import mongoose from 'mongoose';

const Schema = mongoose.Schema;
import Answer from './AnswerSchema.js';

const questionSchema = new Schema({
    id: { type: String, required: true },
    question: { type: String, required: true },
    answer: { type: Schema.Types.ObjectId, ref: 'Answer', required: true },
    questionType: { type: String, default: 'Question' }
});

const Question = mongoose.model('Question', questionSchema);
export default Question;
