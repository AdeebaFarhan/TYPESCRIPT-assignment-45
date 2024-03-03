function make_great(magicians: string[]): string[] {
    return magicians.map(magician => {
        return `the Great ${magician}`;
    });
}

// Define an array of magician's names
const magicians: string[] = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];

// Make a copy of the array of magicians' names
const copy_of_magicians: string[] = magicians.slice();

// Call the make_great function with the copy of the array
const great_magicians: string[] = make_great(copy_of_magicians);

// Function to show magicians
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Call the show_magicians function with the original array and the array with "the Great" added
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
