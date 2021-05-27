import EventEmitter from 'events';
import fs from 'fs';

export default class Event1 extends EventEmitter {
    constructor() {
        super();
        this.on('ListEnabledEvent', (param) => {
            //code
        });
    }

    browsing(file_path) {
        let evt_list = [];
        let handle_file_list = [];
        // read EventInfo.json
        const events = JSON.parse(fs.readFileSync(file_path, 'utf8'));
        Object.values(events).forEach((evt) => {
            //read event.info.json
            const info = JSON.parse(fs.readFileSync(evt.info, 'utf8'));
            if (info.isEnabled) {
                evt_list.push(info.name);
                let data = fs.readFileSync(evt.handle, 'utf8');
                handle_file_list.push(data);
            }
        });
        console.log(`list of enabled event: ${evt_list}`);
        return handle_file_list;
    }
}
