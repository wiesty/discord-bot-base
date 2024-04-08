const fs = require('fs');
const path = require('path');

module.exports = {
  handleMessage: (message) => {
    const content = message.content.toLowerCase();

    const data = {
      content: content,
      timestamp: new Date().toISOString(),
    };

    fs.writeFileSync(path.join(__dirname, '../datastore/store.json'), JSON.stringify(data));
    // this would save the message content to a json file


    let reply = "this is a default reply";
    if (content === "no slash") {
      message.channel.send(reply);
    }
  },
};
