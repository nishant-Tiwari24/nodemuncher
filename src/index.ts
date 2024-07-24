#!/usr/bin/env ts-node

import * as fs from 'fs';
import * as path from 'path';
import { Command } from 'commander';
import * as rimraf from 'rimraf';
import chalk from 'chalk';

const program = new Command();

program
  .version('1.0.1')
  .description('Remove all node_modules directories from the specified directory')
  .option('-d, --directory <path>', 'Specify the root directory to start searching from', process.cwd())
  .parse(process.argv);

const options = program.opts();
console.log(options)

const deleteNodeModules = (dir: string): void => {
  const items = fs.readdirSync(dir);
  items.forEach((item) => {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      if (item === 'node_modules') {
        console.log(chalk.red(`Removing ${fullPath}`));
        rimraf.sync(fullPath);
      } else {
        deleteNodeModules(fullPath);
      }
    }
  });
};

try {
  console.log(options)
  console.log(chalk.green(`Starting to clean node_modules from ${options.directory}`));
  deleteNodeModules(options.directory);
  console.log(chalk.green('Cleaning completed!'));
} catch (error) {
  console.error(chalk.red('Error occurred:'), error);
}
