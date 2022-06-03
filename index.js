import chalk from 'chalk';
import fs from 'fs';

function handleError(error) {
    throw new Error(chalk.red(error, '\nArquivo não encontrado!'));
}

async function getFile(filepath) {
    try {
        const encoding = 'utf-8';
        const text = await fs.promises.readFile(filepath, encoding);

        console.log(chalk.green(text));
    } catch (err) {
        handleError(err);
    }
}

getFile('./files/text1.md');
