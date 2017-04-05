#!/usr/bin/env node

var express = require('express');
var pkg = require('./package.json');
var fs = require("fs");
var program = require('commander');

const readline = require('readline');
var prompt = require('prompt');



var runningGame = {};

var gameData = fs.readFileSync("./gameList.json");
var gameList = JSON.parse(gameData);
var gameRules = {};

program 
    .version(pkg.version)
    .option('-g, --game <game>', 'Name of the game to play')
    // .option('-p, --players <players>', 'Number of players', parseInt)
    .option('-p, --players <players>', "List of players")
    .parse(process.argv);

    var gameString = program.game || 'scrabble';
    // console.log("game requested is " + gameString.toLowerCase());
    
    var count = 0;
for (var game in gameList) {
    // console.log(gameList[game]);
    // console.log(typeof(gameList[game]));
    // console.log("short title is " + gameList[game].shortTitle);
    if ( gameString.toLowerCase() == gameList[game].shortTitle )  {
        gameRules = gameList[game];
        // console.log("Found game in database");
    }
}

runningGame.gameName = gameRules.title;
// if (program.players) {
//     if (validNumberOfPlayers(gameRules, program.players)) {
//         runningGame.playerCount = program.players;
//      } else {
//          console.log("The number of players you've requested is either too few or too many.")
//      }
// } else {
//     console.log("*    Please choose between " + gameRules.minPlayers + " to " + gameRules.maxPlayers + " players.");
//     console.log("*    Defaulting to " + gameRules.minPlayers + " players for now.");
//     runningGame.playerCount = gameRules.minPlayers;
// }

if (program.players) {
    runningGame.playerNames = program.players
}

console.log("\n*****\nStarting a game of " + runningGame.gameName);
console.log("for " + runningGame.playerCount + " players.");

// runningGame.playerNames = [];
// var count = runningGame.playerCount;


function ask(question, format, callback) {
 var stdin = process.stdin, stdout = process.stdout;
 
 stdin.resume();
 stdout.write(question + ": ");
 
 stdin.once('data', function(data) {
   data = data.toString().trim();
 
   if (format.test(data)) {
     callback(data);
   } else {
     stdout.write("It should match: "+ format +"\n");
     ask(question, format, callback);
   }
 });
}

console.log("**************");
console.log('the state of the runningGame object');
console.log(runningGame);

function validNumberOfPlayers(rules, num) {
    return (program.players >= rules.minPlayers && program.players <= rules.maxPlayers);
}

