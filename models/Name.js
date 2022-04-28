'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;


var nameSchema = Schema( {
    year: Number,
    name: String,
    sex: String,
    count: Number,
} );

module.exports = mongoose.model( 'Name', nameSchema );
