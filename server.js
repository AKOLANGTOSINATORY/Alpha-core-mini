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
        { username: "The Filipino Armyᅠᅠ ᅠ",gameCreatorId: "11641165", WhitelistEnabled: true, Suspended: false }, // sep 20
        { username: "Riverstone Prison",gameCreatorId: "33851205", WhitelistEnabled: false, Suspended: false }, // june 28
        { username: "Florenta State Prison",gameCreatorId: "955353315", WhitelistEnabled: false, Suspended: false }, // june 8
        { username: "|| British Army",gameCreatorId: "704324852", WhitelistEnabled: false, Suspended: false }, // june 25
        { username: "|SBA| Skad's British Army",gameCreatorId: "32540278", WhitelistEnabled: false, Suspended: false }, // JUNE 26
        { username: "|СA| Canadian Army",gameCreatorId: "144649153", WhitelistEnabled: false, Suspended: false }, // June 30
        { username: "BARP | British Army Roleplay",gameCreatorId: "1087800622", WhitelistEnabled: false, Suspended: false }, // July 9
        { username: "[VRR] British Army",gameCreatorId: "35769284", WhitelistEnabled: false, Suspended: false }, // Aug 11
    ];
    res.json(whitelistData); // Return the whitelist with the enabled and suspended status for each user
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
