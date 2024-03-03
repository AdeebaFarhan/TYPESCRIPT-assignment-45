var guests = ["Adeeba", "Mama", "Farhan", "Kiran"];
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear".concat(guests, ",You're invited to dinner!"));
}
var Cancelguest = guests.pop();
console.log("".concat(Cancelguest, " can't make it to the dinner."));
var newGuest = "Maha";
guests.push(newGuest);
for (var _a = 0, guests_2 = guests; _a < guests_2.length; _a++) {
    var guest = guests_2[_a];
    console.log("Dear ".concat(guest, ", you are invited to dinner!"));
}
