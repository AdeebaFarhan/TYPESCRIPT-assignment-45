let personName: string = " Adeeba"
console.log(`Original Name:${personName}`);
console.log(`Lowercase Name:${personName.toLowerCase()}`);
console.log(`Uppercase Name:${personName.toUpperCase()}`);
console.log(`Tittlecase Name:${personName.charAt(0).toUpperCase()+personName.slice(1).toLowerCase()}`);