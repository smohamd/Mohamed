 module.exports.config = {
  name: "المطور",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "DRIDI-RAYEN",
  description: "معلومات عن مطور البوت.",
  commandCategory: "〘 المجموعات 〙",
  usages: "adm",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
  "https://i.imgur.com/6xeijLA.jpg"
  ];
  var callback = () => api.sendMessage({body:`〘━━━━━❪ المطور ❫━━━━〙
⦿¦✗¦←الاسم:
 𝐌𝐎𝐇𝐀𝐌𝐄𝐃 𝐀𝐍𝐃 𝐙𝐈𝐍𝐎
⦿¦✗¦←العمر : 17
⦿¦✗¦←البلد: الجزائر 🇩🇿🐧🇵🇸
⌔┇↜{ المـــطــور } ← m.me/100044725279836
⌔┇↜{ المـــطــور } ← m.me/100013384479798
⌔┇↜{ تلقرام} ← https://t.me/mohamd_and_zino
| ⚠️ |اذا حدث خطا تواصل معا لمطورين 
اكتب [.تقرير] 
〘━━━❪𝗕𝗢𝗧 𝗟𝗨𝗡𝗔❫━━━━〙`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };