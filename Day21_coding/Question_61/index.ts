//Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, 
//and motorcycles using enums, and show one example.

// Making a list (enum) for different types of vehicles
enum VehicleType {
    Car,
    Truck,
    Motorcycle
}

// Showing one type of vehicle from the list
console.log(VehicleType.Car);
console.log(VehicleType.Truck);
console.log(VehicleType.Motorcycle); // It shows 0 because enums start counting from 0
// Here, we're just checking what number the Car category got in our list.