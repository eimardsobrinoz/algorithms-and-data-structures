

function quicksort(array: number[]): number[] {
  const arrayLength: number = array.length;

  if(arrayLength < 2) {
    return array;
  }

  const lesser: number[] = [];
  const greater: number[] = [];
  const pivot: number = [...array].pop();

  for(let i = 0; i<arrayLength-1;i++) {
    const element: number = array[i];
    if (element <= pivot) lesser.push(element);
    else greater.push(element);
  }

  return [...quicksort(lesser), pivot,...quicksort(greater)];

}

const arrayExample: number = [0,9,3,6,7,2,4,7,7];
const result: number = quicksort(arrayExample);

console.log('Before quicksort: ', arrayExample);
console.log('The result is: ', result);