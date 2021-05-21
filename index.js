import Reader from './jsonreader.js';
import EventEmitter from 'events';
export default class Main extends EventEmitter {
    constructor() {
        let A = new Reader();
        const result = A.emit('RequestReadFile', './data.json');
        this.on('ResponeReadFile', (json) => {
            this.emit('');
        });
    }
}

console.log('Hello Event');
