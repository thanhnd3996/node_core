import EventEmitter from 'events';
import fs from 'fs';

export default class Event1 extends EventEmitter {
    constructor() {
        super();
        this.on('ListEnabledEvent', (filepath) => {
            let evt_list = this.browsing(filepath);
            console.log(`list of enabled event: ${evt_list}`);
        });
    }

    browsing(file_path) {
        let evt_list = [];
        let data1 = fs.readFileSync(file_path, 'utf8');
        // read EventInfo.json
        const events = JSON.parse(data1);
        Object.values(events).forEach((evt) => {
            let data2 = fs.readFileSync(evt.info, 'utf8');
            //read event.info.json
            const info = JSON.parse(data2);
            if (info.isEnabled) {
                // fs.readFile(evt.handle, 'utf8', (err, handle));
                evt_list.push(info.name);
            }
        });
        return evt_list;
    }
}
