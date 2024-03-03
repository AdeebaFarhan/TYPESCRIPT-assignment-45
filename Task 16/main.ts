let placesToVisit: string[] = ["Paris", "Tokyo", "New York", "Rome", "Sydney"];
 console.log("Original Order:", placesToVisit);
    console.log("Alphabetical Order:", placesToVisit.slice().sort());
   console.log("Original Order (still intact):", placesToVisit);
   console.log("Reverse Alphabetical Order:", placesToVisit.slice().sort().reverse())
   console.log("Original Order (still intact):", placesToVisit);
   placesToVisit.reverse();
   console.log("Reversed Order:", placesToVisit);
   placesToVisit.reverse();
   console.log("Original Order (back again):", placesToVisit);
   console.log("Sorted in Alphabetical Order:", placesToVisit.slice().sort());
    console.log("Sorted in Reverse Alphabetical Order:", placesToVisit.slice().sort().reverse());