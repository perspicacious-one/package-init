#!/usr/bin/env node

const move = require('../lib/move');
const inquirer = require('inquirer');


inquirer
  .prompt([
    {
        type: 'list',
        name: 'type',
        message: "Select project type",
        default: 'node',
        choices: ['node', 'react']

    }
  ])
  .then(answers => {
    move(answers.type)
  });