
// Choose input type based on field name
export const deriveField = function(field) {
    if (field.includes('val')) {
        return 'number';
    }
    return 'text';
}

// Capitalize first letter wow...
export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}