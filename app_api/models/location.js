const mongoose = require( 'mongoose' );
const openingTimeSchema = new mongoose.Schema({

    days: {type: String, required: true},
    opening: String,
    closing: String,
    closed: {
    type: Boolean,
    required: true
    }
},{_id:false});
const reviewSchema = new mongoose.Schema({
    author: String,
    rating: {
        type: Number,
    required: true,
    min: 0,
    max: 5
    },
    reviewText: String,
    createdOn: {type: Date, default: Date.now}
},{id:false});
const locationSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true
    },
    address: String,
    rating: {
    type: Number,
    'default': 0,
    min: 0,
    max: 5
    },
    facilities: [String],
    coords: {type:{lat:Number,lng:Number}},
    openingTimes: [openingTimeSchema],
    reviews: [reviewSchema]
});

//locationSchema.index({coords: '2dsphere'});
const Location=mongoose.model("Location",locationSchema)

module.exports={
    Location
}