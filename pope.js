#!/usr/bin/env node 

const readlineSync = require('readline-sync');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// rl.question('What do you think of Node.js? ', getAnswer);
//
// function getAnswer(answer) {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);
//
//   rl.close();
// };

var question = readlineSync.question("Is Michael Pope 'The Man'?");

console.log(question);