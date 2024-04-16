/* 
// Sync
const fs = require('node:fs');
searchWord = 'JavaScript';

let gotText = fs.readFileSync('./sample.txt', { encoding: 'utf8', flag: 'r' });

gotText = gotText.replaceAll(',', '');

let splitText = gotText.split(' ');

let cont = 0;

splitText.forEach(element => {
    if(element == 'JavaScript') {   cont++; };
})

fs.writeFileSync('count.txt', `The word "JavaScript" appears ${cont} times in the text.`);
*/

// Async
const fs = require('node:fs');
searchWord = 'JavaScript';

fs.readFile('./sample.txt', { encoding: 'utf8', flag: 'r' }, (err, data) => {
    if (err) throw err;

    let gotText = data;

    gotText = gotText.replaceAll(',', '');

    let splitText = gotText.split(' ');
    
    let cont = 0;
    
    splitText.forEach(element => {
        if(element == searchWord) {   cont++; };
    })
    
    fs.writeFile('count_async.txt', `The word "${searchWord}" appears ${cont} times in the text.`, (err, data) => {
        if (err) throw err;
    });
});
