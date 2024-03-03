function storeCarInfo(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    // Add other options if provided
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        var key = option[0], value = option[1];
        carInfo[key] = value;
    }
    return carInfo;
}
// Call the function with required information and additional options
var carInfo = storeCarInfo('Toyota', 'Corolla', ['color', 'blue'], ['year', 2022]);
// Print the Object that's returned
console.log(carInfo);
