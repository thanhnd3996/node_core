import fs from 'fs';
fs.readFile('./EventInfo.json', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        const events = JSON.parse(data);
        console.log(events);
        // console.log(Object.keys(events).forEach((evt) => {}));
        // for (let i = 0; i < Object.keys(events).length; i++) {
        //     console.log(Object.keys(events)[i].handle);
        // }
    }
});
