import chalk from 'chalk';

import { getFile } from './index.js';
import { checkURLs } from './http-check.js';

const path =  process.argv;

async function procressText(pathFile) {
    const response = await getFile(pathFile[2]);

    if (path[3] === 'check') {
        console.log(chalk.yellow('Links validados'), await checkURLs(response));

        return;
    }

    console.log(chalk.yellow('Lista de links'), response);
}

procressText(path);