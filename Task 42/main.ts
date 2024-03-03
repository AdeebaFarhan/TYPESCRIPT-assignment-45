function makeSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    console.log("Bread");
    for (let item of items) {
        console.log(item);
    }
    console.log("Bread");
    console.log("Sandwich is ready!");
}

// Call the function three times with different number of arguments
makeSandwich("Cheese", "Tomato", "Lettuce");
console.log("------------------------------------");
makeSandwich("Ham", "Turkey");
console.log("------------------------------------");
makeSandwich("Peanut Butter", "Jelly");

