'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var overheardSchema = Schema( {
  userId: ObjectId,
  comment:String,
  createdAt: Date,
} );

module.exports = mongoose.model( 'OverheardItem', overheardSchema );
