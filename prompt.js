#!/usr/bin/env node --harmony 

var co = require('co');
var prompt = require('co-prompt');
var commander = require('commander');

// prompt.start();

// prompt.get(['username', 'email'], function (err, result) {
//    //
//    // Log the results.
//    //
//    console.log('Command-line input received:');
//    console.log('  username: ' + result.username);
//    console.log('  email: ' + result.email);
// });
//
var gameObject = {};

newGame();
function getGameParams() {
    co (function *() {
        gameObject.username = yield prompt('username: ');
        gameObject.gameName = yield prompt('name of game: ');
    });
}


function newGame() {
    
    getGameParams();
    console.log("does it wait?");
    console.log(gameObject);
    // console.log(gameName);
}