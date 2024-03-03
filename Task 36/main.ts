function describe_city(city: string, country: string = 'Pakistan'): void {
    console.log(`${city} is in ${country}`);
}

// Call the function for Karachi, Pakistan
describe_city('Karachi');

// Call the function for Istanbul, Turkey
describe_city('Istanbul', 'Turkey');

// Call the function for New York, USA
describe_city('New York', 'USA');
