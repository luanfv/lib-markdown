function generateURLsList(linkList) {
    return linkList.map((object) => Object.values(object).join());
}

function checkURLs(linkList) {
    return generateURLsList(linkList);
}

export { checkURLs };