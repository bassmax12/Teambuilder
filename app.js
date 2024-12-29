
const playersKey = "players";

// Initialize default players with the provided data
if (!localStorage.getItem(playersKey)) {
    localStorage.setItem(playersKey, JSON.stringify([
        { name: "איבגי", rating: 4.42 },
        { name: "נתנאל", rating: 3.74 },
        { name: "אור", rating: 4.7 },
        { name: "שמואל", rating: 3.37 },
        { name: "עמרי", rating: null },
        { name: "שימי", rating: 4.89 },
        { name: "חן", rating: 4.32 },
        { name: "מתן טל", rating: 3.47 },
        { name: "פרי", rating: 4.16 },
        { name: "ליאור", rating: 4.95 },
        { name: "רון", rating: 3.16 },
        { name: "מתן מנחם", rating: null },
        { name: "דניאל", rating: 3.68 },
        { name: "אלעד", rating: 3.84 },
        { name: "ניר ישן", rating: 3.0 },
        { name: "ניר חדש", rating: 4.7 },
        { name: "עומרי ריבין", rating: 2.95 },
        { name: "עומר", rating: 3.42 },
        { name: "ארז גהן", rating: 3.41 },
        { name: "ארז ביטון", rating: 3.26 },
        { name: "רן", rating: 3.4 },
        { name: "דרורי", rating: 3.79 },
        { name: "אלחנן", rating: 3.05 },
        { name: "קראדי", rating: 3.5 },
        { name: "נפתלי", rating: 4.7 }
    ]));
}

// Helper function to get players
const getPlayers = () => JSON.parse(localStorage.getItem(playersKey));

// Helper function to save players
const savePlayers = (players) => localStorage.setItem(playersKey, JSON.stringify(players));

// Example usage: Log players
console.log(getPlayers());
