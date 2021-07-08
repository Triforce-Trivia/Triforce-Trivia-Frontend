export function findById(clicks, id) {
    const numberId = Number(id);
    for (let item of clicks) {
        if (item.id === id) return item;
    }
    return null;
}