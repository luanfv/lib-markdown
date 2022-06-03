import chalk from 'chalk';
import fs from 'fs';

function handleError(error) {
    throw new Error(chalk.red(error, '\nArquivo não encontrado!'));
}

function getFile(filepath) {
    const encoding = 'utf-8';

    fs.readFile(filepath, encoding, (error, text) => {
        if (error) {
            handleError(error);
        }

        console.log(chalk.green(text));
    });
}

console.log(getFile('./files/text1.md'));
