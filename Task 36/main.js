function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country));
}
// Call the function for Karachi, Pakistan
describe_city('Karachi');
// Call the function for Istanbul, Turkey
describe_city('Istanbul', 'Turkey');
// Call the function for New York, USA
describe_city('New York', 'USA');
