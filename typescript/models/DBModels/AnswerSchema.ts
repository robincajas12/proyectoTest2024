import mongoose from "mongoose";
const Schema = mongoose.Schema;

const answerSchema = new Schema({
    id: { type: String, required: true },
    answer: { type: String, required: true },
    isCorrect: { type: Boolean, required: true }
});

const Answer = mongoose.model('Answer', answerSchema);

export default Answer;
