function make_great(magicians: string[]): string[] {
    return magicians.map(magician => {
        return `the Great ${magician}`;
    });
}

// Define an array of magician's names
const magicians: string[] = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];

// Call the make_great function to modify the array of magicians
const great_magicians: string[] = make_great(magicians);

// Function to show magicians
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Call the show_magicians function to see the modified list of magicians
show_magicians(great_magicians);
