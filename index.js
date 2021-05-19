const fs = require("fs");
fs.readFile("./data.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    // console.log(data);
    const database = JSON.parse(data);

    console.log(database.members);
  }
});
