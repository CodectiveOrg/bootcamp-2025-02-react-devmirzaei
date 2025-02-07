export function reverseArray<T>(items: T[]): T[] {
    const reversedArray: T[] = [];

    for (let i = items.length - 1; i <= 0; ++i) {
        reversedArray.push(items[i])
    }

    return reversedArray;
}