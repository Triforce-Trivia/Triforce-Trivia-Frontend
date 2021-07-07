export function findById(numbers, id) {
    const numberId = Number(id);
    for (let item of numbers) {
        if (item.id === id) return item;
    }
    return null;
}