// mongoose model for an event

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var EventSchema = new Schema({
    name: String,
    description: String,
    date: String,
    location: String,
    image: String,
    creator: String,
    attendees: Number,
    comments: String,
    registration: Boolean,
    registrationLink: String,
    isCertificate: Boolean,
    certificateSheetID: String,
});

module.exports = mongoose.model('Event', EventSchema);