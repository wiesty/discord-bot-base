//imports here



// const, let vars here


module.exports = {
    run: async ({ interaction }) => {
        try {
            interaction.deferReply(); //acknowledge the interaction
            await new Promise(resolve => setTimeout(resolve, 3000));
            //fetch some data that takes some time 
            interaction.editReply({ content: "message", ephemeral: false });
        } catch (error) {
            console.error("Async action error:", error);
            interaction.followUp({ content: "Error.", ephemeral: true });
        }
    },
  
    //command description (can be seen when user types /xxxx)
    data: {
      name: 'async', //has to be lowercase and no spaces
      description: 'Async slash command!',
    },
  };
  