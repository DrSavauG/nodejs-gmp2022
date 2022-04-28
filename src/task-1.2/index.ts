import fs from 'fs';
import csvToJson from 'csvtojson';
import { pipeline } from 'stream';

const pathToCsv = './src/task-1.2/nodejs-hw1-ex1.csv';
const pathToTxt = './src/task-1.2/converted.txt';

pipeline(
    csvToJson({
        colParser: {
            price: 'number',
            amount: 'omit',
        },
        headers: ['book', 'author', 'amount', 'price'],
        checkType: true,
    }).fromFile(pathToCsv),
    fs.createWriteStream(pathToTxt),
    (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Pipeline succeeded');
        }
    }
);
