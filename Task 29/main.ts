//Store the numbers 1 through 9 in an array
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

 //Loop through the array
for (let number of numbers) {
   //  Determine the ordinal suffix based on the number
    let suffix: string;
    switch (number) {
        case 1:
            suffix = 'st';
            break;
        case 2:
            suffix = 'nd';
            break;
        case 3:
            suffix = 'rd';
            break;
        default:
            suffix = 'th';}

   // Print the number with its ordinal suffix
    console.log(`${number}${suffix}`);}
