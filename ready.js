module.exports = (client) => {
    client.user.setPresence({
        game: {
            name: "c/help --> Affiche l'aide !"
        }
    });
};
