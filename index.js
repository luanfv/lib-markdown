import chalk from 'chalk';
import fs from 'fs';

function extractLink(text) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const textList = [];
    let temp = [];

    while ((temp = regex.exec(text)) !== null) {
        console.log(temp);
        textList.push({
            [temp[1]]: temp[2],
        });
    }

    return textList;
}

function handleError(error) {
    throw new Error(chalk.red(error, '\nArquivo não encontrado!'));
}

async function getFile(filepath) {
    try {
        const encoding = 'utf-8';
        const text = await fs.promises.readFile(filepath, encoding);

        console.log(extractLink(text));
    } catch (err) {
        handleError(err);
    }
}

getFile('./files/text1.md');
