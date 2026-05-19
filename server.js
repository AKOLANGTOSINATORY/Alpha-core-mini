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
        { username: "French Armed Forceṡ",gameCreatorId: "363834904", WhitelistEnabled: true, Suspended: false }, // May 20
        { username: "Riverstone Prison",gameCreatorId: "33851205", WhitelistEnabled: true, Suspended: false }, // July 28
        { username: "Florenta State Prison",gameCreatorId: "955353315", WhitelistEnabled: true, Suspended: false }, // july 8

    ];
    res.json(whitelistData); // Return the whitelist with the enabled and suspended status for each user
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
