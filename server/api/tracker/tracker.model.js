'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var TrackerSchema = new mongoose.Schema({
    id: String,
    url: String, 
    element: String,
    count : Number
});

export default mongoose.model('Tracker', TrackerSchema);
