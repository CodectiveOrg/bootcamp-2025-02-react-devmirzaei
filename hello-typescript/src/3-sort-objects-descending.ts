export type Params = {
    createdAt: string;
    modifiedAt?: string;
} | unknown;


export function sortObjectsDescending(items: Params[]): Params[] {
    const sortedItems: Params[] = items;

    for (let i: number = 0; i < items.length; i++) {
        for (let j: number = 0; j < items.length - 1; j++) {

            // @ts-expect-error
            let firstDate = (sortedItems[j].modifiedAt !== undefined) ? sortedItems[j].modifiedAt : sortedItems[j].createdAt;
            // @ts-expect-error
            let secondDate = (sortedItems[j + 1].modifiedAt !== undefined) ? sortedItems[j + 1].modifiedAt : sortedItems[j + 1].createdAt;

            if (firstDate < secondDate) {
                let temp: Params = sortedItems[j];
                sortedItems[j] = sortedItems[j + 1];
                sortedItems[j + 1] = temp;
            }
        }
    }

    return sortedItems;
}

