import { reverseArray } from "./1-reverse-array";
import { countNumbersInArray } from "./2-count-numbers-in-array";
import { sortObjects } from "./3-sort-objects";

function testReverseArray(): void {
  const items = ["red", true, "JavaScript", 1.36];
  const result = reverseArray(items);
  console.log(result);
}

function testCountNumbersInArray(): void {
  const items = ["3", 58, 46, null, true, { id: 12 }];
  const result = countNumbersInArray(items);
  console.log(result);
}

function testSortObjects(): void {
  const objects = [
    {
      id: 1,
      createdAt: "2025-02-01T00:00:00.000Z",
      modifiedAt: "2025-02-02T00:00:00.000Z",
    },
    {
      id: 2,
      name: "Morteza",
      createdAt: "2025-01-01T00:00:00.000Z",
      modifiedAt: "2025-02-29T00:00:00.000Z",
    },
    {
      id: 3,
      createdAt: "2025-01-15T00:00:00.000Z",
    },
    {
      id: 4,
      color: "red",
      createdAt: "2025-01-29T00:00:00.000Z",
      modifiedAt: "2025-02-07T00:00:00.000Z",
    },
  ];
  const result = sortObjects(objects);
  console.log(result);
}

function main(): void {
  testReverseArray();
  testCountNumbersInArray();
  testSortObjects();
}

main();
