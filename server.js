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
        { username: "[BRA] - British Royal Army",gameCreatorId: "901380083", WhitelistEnabled: true, Suspended: false }, // April 31
        { username: "• [BA] British Army •",gameCreatorId: "16970985", WhitelistEnabled: true, Suspended: false }, // May 3
        { username: "|BA| British Army!.",gameCreatorId: "35099271", WhitelistEnabled: true, Suspended: false }, // May 7
        { username: "[PNPCC] Philippine National Police",gameCreatorId: "593479303", WhitelistEnabled: true, Suspended: false },
        { username: "French Armed Forceṡ",gameCreatorId: "363834904", WhitelistEnabled: true, Suspended: false },


    ];
    res.json(whitelistData); // Return the whitelist with the enabled and suspended status for each user
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
