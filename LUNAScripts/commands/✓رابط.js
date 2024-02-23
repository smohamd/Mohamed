const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");
const FormData = require('form-data');
  


module.exports.config = {
  name: "روابط",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "عبدالرحمن",
  description: "رابط لصوره او صور",
  commandCategory: "صور",
  usages: "رد عا صوره",
  cooldowns: 1,
};

module.exports.run = async function({ api, event, args }) {
  
  
const regCheckURL = /^(http|https):\/\/[^ "]+$/;

async function uploadImgbb(file) {
  let type = "file";
  try {
    if (!file) {
      throw new Error("The first argument (file) must be a stream or an image URL");
    }
    if (regCheckURL.test(file) === true) {
      type = "url";
    }
    if (
      (type !== "url" && !(typeof file._read === "function" && typeof file._readableState === "object")) ||
      (type === "url" && !regCheckURL.test(file))
    ) {
      throw new Error("The first argument (file) must be a stream or an image URL");
    }

    const res_ = await axios({
      method: "GET",
      url: "https://imgbb.com",
    });

    const auth_token = res_.data.match(/auth_token="([^"]+)"/)[1];
    const timestamp = Date.now();

    const formData = new FormData();
    formData.append("source", file);
    formData.append("type", type);
    formData.append("action", "upload");
    formData.append("timestamp", timestamp);
    formData.append("auth_token", auth_token);

    const res = await axios.post("https://imgbb.com/json", formData, {
      headers: formData.getHeaders(),
    });

    return res.data.image.url;
  } catch (err) {
    throw new Error(err.response ? err.response.data : err);
  }
}


  
  
  
  
          let links = [];
  
  
  
          if (event.type === "message_reply" && event.messageReply.attachments.length > 0) {
            for (const attachment of event.messageReply.attachments) {
              links.push(attachment.url);
            }
          } else if (event.attachments.length > 0) {
            for (const attachment of event.attachments) {
              links.push(attachment.url);
            }
          } else {
            return api.sendMessage("رد عا صوره", event.threadID, event.messageID);
          }
  
          const shortenedLinks = [];
          let i = 0;
          for (const link of links) {
            const res = await uploadImgbb(link);
            
            
            shortenedLinks.push(res);
            i++;
          }
  
          const formattedLinks = shortenedLinks.map((link, index) => `"${link}",`).join('\n\n');
          return api.sendMessage(`${formattedLinks}`, event.threadID, event.messageID);
  
  
 
}