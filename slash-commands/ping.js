//imports here



// const, let vars here


module.exports = {
    run: ({ interaction }) => {
      interaction.reply({ content: 'Pong!', ephemeral: true }); //reply to the user with "Pong!" ephemeral = private
    },
  
    //command description (can be seen when user types /xxxx)
    data: {
      name: 'ping', //has to be lowercase and no spaces
      description: 'Pong!',
    },
  };
  