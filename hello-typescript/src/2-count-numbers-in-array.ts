export function countNumbersInArray(items: unknown[]): number {
    let count: number = 0;

    for (let item of items) {
        if (typeof item === 'number') {
            count++;
        }
    }

    return count;
}