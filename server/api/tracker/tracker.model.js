'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var TrackerSchema = new mongoose.Schema({
    id: Number,
    count : Number, 
    url: String, 
    content: String
});

export default mongoose.model('Tracker', TrackerSchema);
