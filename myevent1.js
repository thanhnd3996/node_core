import EventEmitter from 'events';
import MyEvent2 from './myevent2.js';
import MyEvent3 from './myevent3.js';

export default class MyEvent1 extends EventEmitter {
    constructor() {
        super();
        this.on('ResponseReadFile', (message) => {
            if (message === true) {
                console.log('Hello Event');
            } else {
                let event3 = new MyEvent3();
                event3.emit('ResponseReadFile', message);
            }
        });
    }
    request_read_file(json_file) {
        let event2 = new MyEvent2();
        event2.emit('RequestReadFile', json_file);
    }
}
