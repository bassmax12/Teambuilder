
const playersKey = "players";

// Initialize default players if not present
if (!localStorage.getItem(playersKey)) {
    localStorage.setItem(playersKey, JSON.stringify([
        { name: "Player 1", rating: 5 },
        { name: "Player 2", rating: 4 },
        { name: "Player 3", rating: 3 },
        { name: "Player 4", rating: 2 },
        { name: "Player 5", rating: 1 }
    ]));
}

// Helper function to get players
const getPlayers = () => JSON.parse(localStorage.getItem(playersKey));

// Helper function to save players
const savePlayers = (players) => localStorage.setItem(playersKey, JSON.stringify(players));

// Implement app logic here
    