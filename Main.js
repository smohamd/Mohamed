const logger = require("./utils/log");
const chalk = require("chalk");
const cv = chalk.bold.hex("#1390f0");
const gradient = require("gradient-string")
const logo = `
█   █▀▀█ █▀▀▄ █▀▀█   █▀▀▄ █▀▀█ ▀▀█▀▀
█   █  █ █  █ █▄▄█   █▀▀▄ █  █   █  
▀▀▀ ▀▀▀▀ ▀  ▀ ▀  ▀   ▀▀▀  ▀▀▀▀   ▀  
く愛[.]↬ 𝗕𝗢𝗧 𝗟𝗨𝗡𝗔↫⚠️ ☠️ 🇩🇿
𝗟𝗢𝗡𝗚 𝗟𝗜𝗩𝗘 𝗣𝗔𝗟𝗘𝗦𝗧𝗜𝗡𝗘 🇵🇸 🤍 
𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐃 𝐁𝐘 𝐌𝐎𝐇𝐀𝐌𝐄𝐃 𝐀𝐍𝐃 𝐙𝐈𝐍𝐎🐧
`;

const c = ["cyan", "#7D053F"];
const redToGreen = gradient("red", "cyan");
console.log(redToGreen("━".repeat(50), { interpolation: "hsv" }));
const text = gradient(c).multiline(logo);
console.log(text);
console.log(redToGreen("━".repeat(50), { interpolation: "hsv" }));

console.log(cv(`\n` + `──𝑳𝑶𝑨𝑫𝑰𝑵𝑮 𝑺𝑻𝑨𝑹𝑻𝑬𝑹─●`));


logger.log([
  {
  message: "[ 𝑺𝑬𝑻𝑻𝑰𝑵𝑮𝑺 ]: ",
   color: ["red", "cyan"],
  },
  {
  message: `Getting Started`,
  color: "white",
  },
]);

const { spawn } = require('child_process');
const Fastify = require('fastify');
const fastifyStatic = require('@fastify/static'); 
class EvaA {
  constructor() {
    this.app = Fastify();
    this.PORT = 3000;
    this.countRestart = 0;
    this.child = null;
    this.init();
  }

  init() {
    this.startApp();
    this.startBot();
  }

  startApp() {
    this.app.get("/", (req, reply) => {
      reply.send("く愛↬ 𝗕𝗢𝗧 𝗟𝗨𝗡𝗔↫⚠️☠️🇩🇿\n MOHAMED AND ZINO ")
    });

    const listenOptions = {
      port: this.PORT,
      host: '0.0.0.0',
    };

    this.app.listen(listenOptions, (err, address) => {
      if (err) {
        logger.log([
          {
          message: "[ 𝑺𝑬𝑻𝑻𝑰𝑵𝑮𝑺 ]: ",
           color: ["red", "red"],
          },
          {
          message: `Error starting server: ${err}`,
          color: "white",
          },
        ]);
        process.exit(1);
      }
      logger.log([
        {
        message: "[ 𝑺𝑬𝑻𝑻𝑰𝑵𝑮𝑺 ]: ",
         color: ["red", "cyan"],
        },
        {
        message: `App deployed on port ${this.PORT}`,
        color: "white",
        },
      ]);
    });
  }
  startBot() {
    const options = {
      cwd: __dirname,
      stdio: "inherit",
      shell: true,
    };
    this.child = spawn(
      "node",
      [ "--trace-deprecation", "--trace-warnings", "--async-stack-traces", "LUNA.js"],
      options
    );
    this.child.on("close", (codeExit) => {
      if (codeExit !== 0 && this.countRestart < 5) {
        this.countRestart += 1;
        this.startBot();
      }
    });
    this.child.on("error", (error) => {
      console.error("An error occurred: " + JSON.stringify(error), "error");
    });
  }
}

const Ammar3mk = new EvaA(); 
