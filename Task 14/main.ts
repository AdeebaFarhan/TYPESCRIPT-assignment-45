let guestS : string []=["Adeeba","Mama","Farhan","Kiran"];
for(let guest of guestS)
  {console.log(`Dear${guestS},You're invited to dinner!`);}
  let CancelGuestS: string = guestS.pop();
  console.log(`${CancelGuestS} can't make it to the dinner.`);
  
  let NewGuest: string = "Maha";
  guestS.push(NewGuest);
  
  for (let guest of guestS) 
     console.log(`Dear ${guest}, you are invited to dinner!`);
     console.log("Good news! We found a bigger dinner table.");

     let AdditionalGuests: string[] = ["khan", "bay", "aliza"];
     guestS.unshift("Sana");
     guestS.splice(Math.floor(guestS.length / 2), 0, ...AdditionalGuests);
     
     for (let guest of guestS) {
         console.log(`Dear ${guest}, you are invited to dinner!`);}