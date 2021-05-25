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
        fs.readFile(file_path, 'utf8', (err, data) => {
            console.log('123');
            // read EventInfo.json
            if (err) {
                console.log(err);
            } else {
                const events = JSON.parse(data);
                Object.values(events).forEach((evt) => {
                    fs.readFile(evt.info, 'utf8', (err, data) => {
                        //read event.info.json
                        if (err) {
                            console.log(err);
                        } else {
                            const info = JSON.parse(data);
                            if (info.isEnabled) {
                                // fs.readFile(evt.handle, 'utf8', (err, handle));
                                evt_list.push(info.name);
                            }
                        }
                    });
                });
            }
        });
        console.log('456');
        return evt_list;
    }
}
