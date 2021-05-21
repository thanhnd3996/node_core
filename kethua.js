import EventEmitter from 'events';

export default class MyEmitter extends EventEmitter {
    constructor() {
        super();
        this.on('OnCatchData', (a, b) => {
            console.log(a + ': ' + b);
        });
    }
}
