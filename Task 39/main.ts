function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Define an array of magician's names
const magicians: string[] = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];

// Call the show_magicians function to print each magician's name
show_magicians(magicians);
