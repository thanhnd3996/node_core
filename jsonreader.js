import EventEmitter from 'events';
import fs from 'fs';
export default class Reader extends EventEmitter {
    constructor() {
        super();
        let json = '';
        this.on('RequestReadFile', (filePath) => {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    json = JSON.parse(data);
                }
            });
        });
        this.emit('ResponseReadFile', json);
    }
}
