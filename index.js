import fs from 'fs';
fs.readFile('./EventInfo.js', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
