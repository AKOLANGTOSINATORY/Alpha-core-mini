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
        { username: "French Armed Forceṡ",gameCreatorId: "363834904", WhitelistEnabled: false, Suspended: false }, // May 20
        { username: "Riverstone Prison",gameCreatorId: "33851205", WhitelistEnabled: true, Suspended: false }, // june 28
        { username: "Florenta State Prison",gameCreatorId: "955353315", WhitelistEnabled: true, Suspended: false }, // june 8
        { username: "|| British Army",gameCreatorId: "704324852", WhitelistEnabled: true, Suspended: false }, // june 25
        { username: "|SBA| Skad's British Army",gameCreatorId: "32540278", WhitelistEnabled: true, Suspended: false }, // JUNE 26
        { username: "|СA| Canadian Army",gameCreatorId: "144649153", WhitelistEnabled: true, Suspended: false },

    ];
    res.json(whitelistData); // Return the whitelist with the enabled and suspended status for each user
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
