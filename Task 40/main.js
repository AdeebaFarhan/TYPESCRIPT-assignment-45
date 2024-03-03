function make_great(magicians) {
    return magicians.map(function (magician) {
        return "the Great ".concat(magician);
    });
}
// Define an array of magician's names
var magicians = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];
// Call the make_great function to modify the array of magicians
var great_magicians = make_great(magicians);
// Function to show magicians
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Call the show_magicians function to see the modified list of magicians
show_magicians(great_magicians);
