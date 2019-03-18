#!/usr/bin/env node

const move = require('../lib/move');
const inquirer = require('inquirer');
const execSync = require('child_process').execSync;

execSync('npm init');

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