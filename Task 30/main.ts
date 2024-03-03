let usernames: string[] = []; // Empty array initially

// Add usernames to the array
usernames.push("admin");
usernames.push("user1");
usernames.push("user2");

// Check if the list of users is empty
if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    // Loop through the array of usernames
    for (let username of usernames) {
        // Check if the username is 'admin'
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}

// Remove all usernames from the array
usernames = [];

// Check if the list of users is empty after removal
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
