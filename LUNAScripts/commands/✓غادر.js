module.exports.config = {
    name: "غادر",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ZINO and MOHAMED",
    description: "مالك دخل🐢",
    usePrefix: true,
    commandCategory: "〘 المطور 〙",
    usages: "مالك دخل كمان🐢",
    cooldowns: 10,
};

module.exports.run = async function({ api, event, args }) {
    const permission = [`100013384479798`, `100065302673515`,"100044725279836" ];

    if (!permission.includes(event.senderID)) return api.sendMessage("🤦‍♂️مدصرنيش انا نسمع غير لمطورين توعي", event.threadID, event.messageID);

    if (!args[0]) {
        // إضافة رسالة قبل الخروج
        await api.sendMessage("ليس بارادتي أن أغادر أصدقائي، ولكن المطور أمرني بالخروج. سأفتقدكم إلى لقاء 🥀🧸.", event.threadID);
        api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
    }
  
  if (!isNaN(args[0])) {   
api.removeUserFromGroup(api.getCurrentUserID(), args.join(" "));
    }
}