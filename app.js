import products from "./data.js";

import {
    findById,
    searchByName,
    filterByCategory,
    filterByPrice,
    inventoryValue,
    updateProduct,
    exportJSON,
    importJSON
} from "./utils.js";
// Display all products
console.log("===== PRODUCT CATALOGUE =====");
console.log(products);

// 1. Find product by ID
console.log("Find Product ID 1:");
console.log(findById(products, 1));

// 2. Search product by name
console.log("Search Laptop:");
console.log(searchByName(products, "Laptop"));

// 3. Filter by category
console.log("Electronics Products:");
console.log(filterByCategory(products, "Electronics"));

// 4. Filter by price
console.log("Products between 100 and 30000:");
console.log(filterByPrice(products, 100, 30000));

// 5. Calculate inventory value
console.log("Total Inventory Value:");
console.log(inventoryValue(products));

// 6. Update product immutably
const updatedProducts = updateProduct(products, 1, {
    price: 60000,
    stock: 12
});

console.log("Updated Product List:");
console.log(updatedProducts);

// Check original array remains unchanged
console.log("Original Product List:");
console.log(products);

// 7. Export JSON
const jsonData = exportJSON(products);
console.log("Exported JSON:");
console.log(jsonData);

// 8. Import JSON
const importedProducts = importJSON(jsonData);
console.log("Imported Products:");
console.log(importedProducts);

// Test missing ID
console.log("Missing Product:");
console.log(findById(products, 100));

// Test empty search
console.log("Empty Search:");
console.log(searchByName(products, ""));

// Test invalid JSON
console.log("Invalid JSON Test:");
console.log(importJSON("{invalid json}"));