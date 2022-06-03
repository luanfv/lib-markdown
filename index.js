import chalk from 'chalk';
import fs from 'fs';

function extractLink(text) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const textList = [];
    let temp = [];

    while ((temp = regex.exec(text)) !== null) {
        textList.push({
            [temp[1]]: temp[2],
        });
    }

    return textList.length === 0 ? 'Não há links' : textList;
}

function handleError(error) {
    throw new Error(chalk.red(error, '\nArquivo não encontrado!'));
}

async function getFile(filepath) {
    try {
        const encoding = 'utf-8';
        const text = await fs.promises.readFile(filepath, encoding);

        return extractLink(text);
    } catch (err) {
        handleError(err);
    }
}

// getFile('./files/text1.md');

export { getFile };
