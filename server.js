const express = require("express");
const app = express();

app.use(express.json()); // Parse JSON requests

app.get("/message", (req, res) => {
  res.redirect("/"); // Or serve homepage
});

// Endpoint for Roblox to fetch messages
app.get("/", (req, res) => {
    const whitelistData = [
        { username: "SeintSlavx",gameCreatorId: "851145815", WhitelistEnabled: true, Suspended: false },
        { username: "| USDF | United States Defense Forces",gameCreatorId: "34814858", WhitelistEnabled: false, Suspended: false }, // expired march 23
        { username: "Sormovsky Underground Combat Syndicate",gameCreatorId: "590047336", WhitelistEnabled: true, Suspended: false }, // april 4
        { username: "USM 1960's, Vietnam War",gameCreatorId: "991095116", WhitelistEnabled: true, Suspended: false }, // March 14
        { username: "1lNNS",gameCreatorId: "4583397891", WhitelistEnabled: true, Suspended: false }, // Active 15
        { username: "Snake Industry Team",gameCreatorId: "8459375", WhitelistEnabled: true, Suspended: false }, // March 17

    ];
    res.json(whitelistData); // Return the whitelist with the enabled and suspended status for each user
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
