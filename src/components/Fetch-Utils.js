export function findById(clicks, id) {
    for (let item of clicks) {
        if (item.id === id) return item;
    }
    return null;
}