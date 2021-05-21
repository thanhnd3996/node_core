import EventEmitter from 'events';

export default class MyEmitter2 extends EventEmitter {
    constructor(a, b) {
        super();
        this.on('OnCatchData', (a, b) => {
            console.log(a + ': ' + b);
        });
    }
}
