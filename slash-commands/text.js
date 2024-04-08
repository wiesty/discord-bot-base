const { ApplicationCommandOptionType } = require("discord.js");



// const, let vars here


module.exports = {
    run: async ({ interaction }) => {
      const enteredtext = interaction.options.getString("enteredtext"); //see line 28
  
      if (!enteredtext) {
        return interaction.reply({
          content: "Please enter a text",
          ephemeral: true,
        });
      }
      const embed = createEmbed(enteredtext);
      interaction.reply({ embeds: [embed] });
    },

    //command description (can be seen when user types /xxxx)
    data: {
        name: "text", //has to be lowercase and no spaces
        description: "let the user add text",
        options: [
          {
            name: "enteredtext", //name of the text variable
            description: "Example text provided by user",
            type: ApplicationCommandOptionType.String, //set the data type
            required: true,
          },
        ],
      },
    };

    function createEmbed(enteredText) {
        const embed = {
          color: 0x99060e,
          title: `This is a embed`,
          fields: [
            { name: "Entered Text", value: enteredText},
          ],
        };
      
        return embed;
      }
      