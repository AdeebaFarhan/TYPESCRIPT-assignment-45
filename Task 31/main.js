var currentUsers = ["admin", "Kiran", "Farhan", "khan"];
var newUsers = ["hamza", "raffay", "anaya", "admin"];
var _loop_1 = function (newUser) {
    var isUsernameTaken = currentUsers.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); });
    if (isUsernameTaken) {
        console.log("The username ".concat(newUser, " is already taken. Please choose another."));
    }
    else {
        console.log("The username ".concat(newUser, " is available."));
    }
};
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    _loop_1(newUser);
}
