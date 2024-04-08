const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    run: async ({ interaction, client }) => {
      const commandid = interaction.options.getString("commandid"); //see line 28
  
      if (!commandid) {
        return interaction.reply({
          content: "Please enter a command id",
          ephemeral: true,
        });
      }
    try {
        await client.application.commands.delete(commandid);
        interaction.reply("Command deleted - restart the bot to readd the same command");
    } catch (error) {
        console.error(error);
        interaction.reply({ content: "Failed to delete command", ephemeral: true });
    }

    },

    data: {
        name: "devonly", //has to be lowercase and no spaces
        description: "Delete a bots slash command",
        options: [
          {
            name: "commandid", 
            description: "Commandid via rightclick on the command in discord and copy id",
            type: ApplicationCommandOptionType.String,
            required: true,
          },
        ],
      },
    };

      