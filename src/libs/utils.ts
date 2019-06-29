import * as fs from 'fs';

const readFile = async (url: string): Promise<any> => {
    const promise = new Promise((resolve, reject): void => {
        fs.readFile(url, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });

    return await promise;
}
    



export {
    readFile
}