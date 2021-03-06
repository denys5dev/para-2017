var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({ 
   name: { type: String, required: true },
   email: { type: String, required: true, unique: true },
   password: {type: String, required: true },
   likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
   role: { type: Number }
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);