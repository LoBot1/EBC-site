export function RemoveEntity(array, value) {
    const newArray = [];
    array.forEach((tab) => {
        if (tab != value) {
            newArray.push(tab);
        }
    })
    return newArray;
};

export function RemoveEntityObject(array, value) {
    const newArray = [];
    array.forEach((tab) => {
        if (tab.id != value.id) {
            newArray.push(tab);
        }
    })
    return newArray;
};