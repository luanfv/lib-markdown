import chalk from 'chalk';
import { getFile } from './index.js';

const path =  process.argv;

async function procressText(pathFile) {
    const response = await getFile(pathFile[2]);

    console.log(chalk.yellow('Lista de links'), response);
}

procressText(path);