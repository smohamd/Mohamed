const Black = {
  name: "قول",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "عمر",
  description: "تضيفك لشات البوت",
  usePrefix: true,
  commandCategory: "〘 الخدمات 〙",
  usages: "ا",
  cooldowns: 5
};
  const axios = require('axios');
module.exports = {
  config: Black,
  run: async function({ api, event, args }) {

const tvm = args.join(" ");
const {messageID, threadID} = event;
const mid = messageID;
const tid = threadID;
const rel = await axios.get('https://akenator-da7856313e76.herokuapp.com/game');
if (!tvm) return api.sendMessage(" شي اقوله ",tid,mid)
if (tvm.length > 412)
{
  let tvm1 = tvm.slice(0,tvm.length/2);
  let tvm2 = tvm.slice(tvm.length/2);
  try {
  await api.sendMessage({body:"Credits: " + rel.data.Credit ,attachment: await axios.get(`http://103.188.244.205:19505/tts?text=${encodeURIComponent(tvm1)}&model=10`,{responseType:"stream"})},tid,mid)
  await api.sendMessage({body:"Credits: " + rel.data.Credit ,attachment: await axios.get(`http://103.188.244.205:19505/tts?text=${encodeURIComponent(tvm2)}&model=10`,{responseType:"stream"})},tid,mid)
  } catch(e) {
   return api.sendMessage("ياااا عمي نصك طويييل قصر شويي") }
} 
else {
  try {
  await api.sendMessage({body:"Credits: " + rel.data.Credit ,attachment: await axios.get(`http://103.188.244.205:19505/tts?text=${encodeURIComponent(tvm)}&model=10`,{responseType:"stream"})},tid,mid)
  } catch (e) {
    api.sendMessage("خطأ غير معروف")
  }
}
}
   };