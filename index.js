import fs from 'fs';
fs.readFile('./EventInfo.json', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        const events = JSON.parse(data);
        console.log(events.event2.info);

        Object.keys(events).forEach((evt) => {
            eval(`${events}.${evt}`);
        });
    }
});
