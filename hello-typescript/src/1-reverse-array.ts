export function reverseArray<T>(items: T[]): T[] {
    const reversedArray: T[] = [];

    for (let i: number = 0; i < items.length; ++i) {
        reversedArray[i] = items[items.length - i - 1];
    }

    return reversedArray;
}