var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Glider = require('./Glider');

var schema = new Schema({
    size: {type: String},
    price: {type: String},
    modelId: { type: String },
    certification: {type: String},
    projectArea: {type: String},
    faltArea: {type: String},
    projectSpan: {type: String},
    flatSpan: {type: String},
    projectAspectRatio: {type: String},
    flatAspectRatio: {type: String},
    rootChord: {type: String},
    gliderWeight: {type: String},
    numberOfCells: {type: String},
    inFlightWeight: {type: String},
    nakedPilotWeight: {type: String},
    type: {type: String},
    upperSufcace: {type: String},
    underSurface: {type: String},
    trims: {type: String},
    speed: {type: String},
    manual: {type: String},
    certificationReport: {type: String},
    glider: { type: Schema.Types.ObjectId, ref: 'Glider' }
    
});

module.exports = mongoose.model('Size', schema);