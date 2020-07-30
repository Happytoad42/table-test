export const deriveField = function(field) {
    if (field.includes('val')) {
        return 'number';
    }
    return 'text';
}

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}