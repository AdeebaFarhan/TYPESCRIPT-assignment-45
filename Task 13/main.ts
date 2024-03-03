let guests : string []=["Adeeba","Mama","Farhan","Kiran"];
for(let guest of guests)
  {console.log(`Dear${guests},You're invited to dinner!`);}
  let Cancelguest: string = guests.pop();
  console.log(`${Cancelguest} can't make it to the dinner.`);
  
  let newGuest: string = "Maha";
  guests.push(newGuest);
  
  for (let guest of guests) {
     console.log(`Dear ${guest}, you are invited to dinner!`);}
  
  