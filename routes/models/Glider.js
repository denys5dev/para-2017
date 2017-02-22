var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Company = require('./Conpany');
var Size = require('./Size');

var schema = new Schema({
    model: { type: String, require: true },
    photo: { type: String },
    video: { type: String },
    about: { type: String },
    year: { type: String, require: true },
    companyId: { type: Schema.Types.ObjectId, ref: 'Company', require: true },
    sizes: [{ type: Schema.Types.ObjectId, ref: 'Size' }]
});

module.exports = mongoose.model('Glider', schema);