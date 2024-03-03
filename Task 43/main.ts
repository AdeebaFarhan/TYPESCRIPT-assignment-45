function storeCarInfo(manufacturer: string, modelName: string, ...options: any): object {
    const carInfo: any = {
        manufacturer: manufacturer,
        modelName: modelName,
    };

    // Add other options if provided
    for (const option of options) {
        const [key, value] = option;
        carInfo[key] = value;
    }

    return carInfo;
}

// Call the function with required information and additional options
const carInfo = storeCarInfo('Toyota', 'Corolla', ['color', 'blue'], ['year', 2022]);

// Print the Object that's returned
console.log(carInfo);
