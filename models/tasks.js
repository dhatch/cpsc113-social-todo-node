var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var stringField = {
    type: String,
    minlength: 1,
    maxlength: 500
}

var TaskSchema = new Schema({
    owner: ObjectId,
    title: stringField,
    description: {
        type: String,
        minLength: 1,
        maxLength: 4999
    },
    isComplete: Boolean,
    collaborators: [String]
});

module.exports = mongoose.model('Tasks', TaskSchema);
