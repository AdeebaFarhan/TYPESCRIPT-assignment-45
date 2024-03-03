function make_great(magicians) {
    return magicians.map(function (magician) {
        return "the Great ".concat(magician);
    });
}
// Define an array of magician's names
var magicians = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];
// Make a copy of the array of magicians' names
var copy_of_magicians = magicians.slice();
// Call the make_great function with the copy of the array
var great_magicians = make_great(copy_of_magicians);
// Function to show magicians
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Call the show_magicians function with the original array and the array with "the Great" added
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
