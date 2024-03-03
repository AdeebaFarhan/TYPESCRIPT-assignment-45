var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var guestS = ["Adeeba", "Mama", "Farhan", "Kiran"];
for (var _i = 0, guestS_1 = guestS; _i < guestS_1.length; _i++) {
    var guest = guestS_1[_i];
    console.log("Dear".concat(guestS, ",You're invited to dinner!"));
}
var CancelGuestS = guestS.pop();
console.log("".concat(CancelGuestS, " can't make it to the dinner."));
var NewGuest = "Maha";
guestS.push(NewGuest);
for (var _a = 0, guestS_2 = guestS; _a < guestS_2.length; _a++) {
    var guest = guestS_2[_a];
    console.log("Dear ".concat(guest, ", you are invited to dinner!"));
}
console.log("Good news! We found a bigger dinner table.");
var AdditionalGuests = ["khan", "bay", "aliza"];
guestS.unshift("Sana");
guestS.splice.apply(guestS, __spreadArray([Math.floor(guestS.length / 2), 0], AdditionalGuests, false));
for (var _b = 0, guestS_3 = guestS; _b < guestS_3.length; _b++) {
    var guest = guestS_3[_b];
    console.log("Dear ".concat(guest, ", you are invited to dinner!"));
}
