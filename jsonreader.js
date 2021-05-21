import MyEmitter from './kethua.js';
import fs from 'fs';
export default class Reader extends EventEmitter {
    read_json(json_file) {
        let B = new MyEmitter();
        fs.readFile(json_file, 'utf8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                const json = JSON.parse(data);
                for (let i = 0; i < Object.keys(json.members).length; i++) {
                    count++;
                    B.emit('OnCatchData', count, JSON.stringify(json.members[i]));
                }
            }
        });
    }
}
