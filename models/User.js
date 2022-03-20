'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

//var userSchema = mongoose.Schema( {any:{}})

var userSchema = Schema( {
  username: String,
  passphrase: String,
  age: String
} );

module.exports = mongoose.model( 'UserTeam0', userSchema );
