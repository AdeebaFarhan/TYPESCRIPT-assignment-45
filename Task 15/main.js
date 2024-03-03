var guestlist = ["Adeeba", "Farhan", "Kiran", "Hamza", "Raffay"];
for (var i = 0; i < guestlist.length; i++) {
    console.log("Dear".concat(guestlist[i], ",I would like to invite you to dinner. It would be an honor to have you join us."));
}
console.log("\nGood news! We found a bigger dinner table.");
guestlist.unshift("Mariyum");
guestlist.splice(Math.ceil(guestlist.length / 2), 0, "Anaya");
guestlist.push("Zayyan");
console.log("\n");
for (var i = 0; i < guestlist.length; i++) {
    console.log("Dear".concat(guestlist[i], ",I would like to invite you to dinner. It would be an honor to have you join us."));
}
