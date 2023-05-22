const discord_js = require("discord.js");
const discord_helper_js = require("discord-helper.js");
const better_date_js = require("better-date.js");

class Bot extends discord_js.Client {
  constructor(intents, partials) {
    super({ intents, partials });

    this.commands = new discord_js.Collection();
    this.runCommands = new discord_js.Collection();
  }
  start(token) {
    this.login(token);
  }
}

module.exports = {
  Bot,
  BotClient: new Bot(),
};
