const axios = require("axios");
const fs = require("fs-extra");

module.exports.config = {
     name: "صور",
        version: "1.0.0",
        hasPermssion: 0,
        credits: "DRIDI-RAYEN",
        description: "",
        commandCategory: "〘 صور 〙",
        usages: "..",
        cooldowns: 5,
};
module.exports.run = async function({ api, event, args }) {
   
    const keySearch = args.join(" ");
if (!keySearch) return api.sendMessage("اكتب شي للبحث", event.threadID)
   
    const res = await axios.get(`https://api-samir.onrender.com/pinterest?query=${encodeURIComponent(keySearch)}&number=12`);
    const data = res.data.result;
    var num = 0;
    var imgData = [];
    for (var i = 0; i < 12; i++) {
      let path = __dirname + `/cache/${num+=1}.jpg`;
      let getDown = (await axios.get(`${data[i]}`, { responseType: 'arraybuffer' })).data;
      fs.writeFileSync(path, Buffer.from(getDown, 'utf-8'));
      imgData.push(fs.createReadStream(__dirname + `/cache/${num}.jpg`));
    }
    api.sendMessage({
        attachment: imgData,
        body: 'تفضل'
    }, event.threadID, event.messageID)
    for (let ii = 11; ii < 12; ii++) {
        fs.unlinkSync(__dirname + `/cache/${ii}.jpg`)
    }
};