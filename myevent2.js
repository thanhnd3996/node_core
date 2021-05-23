import EventEmitter from 'events';
import MyEvent1 from './myevent1.js';
import fs from 'fs';
export default class MyEvent2 extends EventEmitter {
    constructor() {
        super();
        this.on('RequestReadFile', (filePath) => {
            let event1 = new MyEvent1();
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    const json_str = JSON.parse(data);
                    event1.emit('ResponseReadFile', json_str);
                }
            });
        });
    }
}
