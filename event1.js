import fs from 'fs';

export default class Event1 {
    browsing(file_path) {
        fs.readFile(file_path, 'utf8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                const events = JSON.parse(data);
                Object.values(events).forEach((evt) => {
                    console.log(evt.info);
                });
            }
        });
    }
}
