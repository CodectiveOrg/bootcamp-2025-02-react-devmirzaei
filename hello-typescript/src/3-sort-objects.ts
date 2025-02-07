export type Params = {
    [key: string]: unknown;
    createdAt: string;
    modifiedAt?: string;
};


export function sortObjects(items: Params[]): Params[] {
    const result = [...items];

    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length - 1; j++) {

            const firstDate = result[j].modifiedAt ?? result[j].createdAt;
            const secondDate = result[j + 1].modifiedAt ?? result[j + 1].createdAt;

            if (firstDate < secondDate) {
                const temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }

    return result;
}

