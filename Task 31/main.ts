const currentUsers: string[] = ["admin", "Kiran", "Farhan", "khan"];
const newUsers: string[] = ["hamza", "raffay", "anaya", "admin"];

for (const newUser of newUsers) {
  const isUsernameTaken = currentUsers.some(
    (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
  );

  if (isUsernameTaken) {
    console.log(`The username ${newUser} is already taken. Please choose another.`);
  } else {
    console.log(`The username ${newUser} is available.`);
  }
}

