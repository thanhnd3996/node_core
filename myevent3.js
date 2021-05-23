import EventEmitter from 'events';
import MyEvent1 from './myevent1.js';

export default class MyEvent3 extends EventEmitter {
    constructor() {
        super();
        let event1 = new MyEvent1();
        this.on('ResponseReadFile', (json_str) => {
            console.log(json_str);
            event1.emit('ResponseReadFile', true);
        });
    }
}
