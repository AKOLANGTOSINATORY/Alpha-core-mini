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
        { username: "|CAF| Commonwealth Armed Forces",gameCreatorId: "33313680", WhitelistEnabled: true, Suspended: false }, // february 9
        { username: "Philippine Army | ROBLOX",gameCreatorId: "15114508", WhitelistEnabled: true, Suspended: false }, // april 20
        { username: "| -RAF- | Russian Armed Forces",gameCreatorId: "706574002", WhitelistEnabled: true, Suspended: false }, // jan 4 extended nato
        { username: "Fort Musk Military Academy",gameCreatorId: "32334049", WhitelistEnabled: true, Suspended: false },
        { username: "|GEA| Glorioso Ejército Argentino",gameCreatorId: "10114226", WhitelistEnabled: true, Suspended: false },
        { username: "UKA | United Kingdoms Army",gameCreatorId: "35519871", WhitelistEnabled: true, Suspended: false }, // 3days
        { username: " -[MPA]- The Portuguese Army!-",gameCreatorId: "15976392", WhitelistEnabled: true, Suspended: false },

    ];
    res.json(whitelistData); // Return the whitelist with the enabled and suspended status for each user
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
