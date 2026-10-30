// Product Catalogue Utility Functions

// 1. Find product by ID
export function findById(list, id) {
    return list.find(product => product.id === id);
}

// 2. Search product by name
export function searchByName(list, text) {
    return list.filter(product =>
        product.name.toLowerCase().includes(text.toLowerCase())
    );
}

// 3. Filter products by category
export function filterByCategory(list, category) {
    return list.filter(product =>
        product.category.toLowerCase() === category.toLowerCase()
    );
}

// 4. Filter products by price range
export function filterByPrice(list, min, max) {
    return list.filter(product =>
        product.price >= min && product.price <= max
    );
}

// 5. Calculate total inventory value
export function inventoryValue(list) {
    return list.reduce(
        (total, product) => total + product.price * product.stock,
        0
    );
}

// 6. Update product without changing original array
export function updateProduct(list, id, changes) {
    return list.map(product =>
        product.id === id
            ? { ...product, ...changes }
            : product
    );
}

// 7. Export products as JSON
export function exportJSON(list) {
    return JSON.stringify(list, null, 2);
}

// 8. Import products from JSON
export function importJSON(jsonString) {
    try {
        const data = JSON.parse(jsonString);

        if (!Array.isArray(data)) {
            throw new Error("JSON must contain an array");
        }

        return data;
    } catch (error) {
        console.error("Invalid JSON:", error.message);
        return [];
    }
}

// Default Export
export default {
    findById,
    searchByName,
    filterByCategory,
    filterByPrice,
    inventoryValue,
    updateProduct,
    exportJSON,
    importJSON
};