import fetch from 'node-fetch';

function handleErrors(error) {
    throw new Error(error.message);
}

async function checkStatus(linkList) {
    try {
        const statusList = await Promise
        .all(linkList
            .map(async (url) => {
                const response = await fetch(url);

                return response.status;
            }),
        );

        return statusList;
    } catch (err) {
        handleErrors(err);
    }
}

function generateURLsList(linkList) {
    return linkList.map((object) => Object.values(object).join());
}

async function checkURLs(linkList) {
    const links = generateURLsList(linkList);
    const statusLinks = await checkStatus(links);

    const response = linkList.map((link, index) => ({
        ...link,
        status: statusLinks[index],
    }));

    return response;
}

export { checkURLs };