module.exports = {
  config: {
    name: "خلفيات",
    version: "1.0.",
    hasPermssion: 0,
    credits: "jameslim",
    description: "توليد صور من Pinterest",
    usePrefix: true,
    commandCategory: "image",
    usages: "query",
    cooldowns: 10,
  }, 
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
    const keySearch = args.join(" ");
    
    if(keySearch.includes("-") == false) return api.sendMessage('الاستخدام : -خلفيات انمي - 10', event.threadID, event.messageID)
    const keySearchs = keySearch.substr(0, keySearch.indexOf('-'))
    const numberSearch = keySearch.split("-").pop() || 9
    const res = await axios.get(`https://api-samir.onrender.com/pinterest?query=${encodeURIComponent(keySearchs)}&number=${numberSearch}`, { headers: { "Authorization": "3605c0e7a63dfc7c2212198c7e9fc16a8b1efdc55b1790d7c51ba46312ee33b4" }});
    const data = res.data.result;
    var num = 0;
    var imgData = [];
    for (var i = 0; i < parseInt(numberSearch); i++) {
      let path = __dirname + `/cache/${num+=1}.jpg`;
      let getDown = (await axios.get(`${data[i]}`, { responseType: 'arraybuffer' })).data;
      fs.writeFileSync(path, Buffer.from(getDown, 'utf-8'));
      imgData.push(fs.createReadStream(__dirname + `/cache/${num}.jpg`));
    }
    api.sendMessage({
        attachment: imgData,
        body: numberSearch + ' صورة لـ '+ keySearchs
    }, event.threadID, event.messageID)
    for (let ii = 1; ii < parseInt(numberSearch); ii++) {
        fs.unlinkSync(__dirname + `/cache/${ii}.jpg`)
    }
};
