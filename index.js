import fs from 'fs';
// const events = require('events');
// const emitter = new events.EventEmitter();
// import KeThua from './kethua.js';
// const new_emitter = new KeThua.EventEmitter();
import MyEmitter2 from './kethua.js';
let B = new MyEmitter2();
let count = 0;
fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        const json = JSON.parse(data);
        // emitter.emit("OnGetDataSuccess", json);
        // new_emitter.emit('OnGetDataSuccess', json);
        for (let i = 0; i < Object.keys(json.members).length; i++) {
            count++;
            B.emit('OnCatchData', count, JSON.stringify(json.members[i]));
        }
    }
});

// emitter.on("OnGetDataSuccess", (data) => {
//   console.log(data);
// });

// new_emitter.on('OnGetDataSuccess', (data) => {
//     console.log(data);
// });

B.on('OnCatchData', (a, b) => {
    console.log(a + ': ' + b);
});
