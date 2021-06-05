

function mergesort(array: []): []{
    const lengthArray: number = array.length;
    if(lengthArray < 2) {
      return array;
    }
    const middle: number = Math.floor(lengthArray / 2);
    const leftArray: [] = array.slice(0, middle);
    const rightArray: [] = array.slice(middle, lengthArray);
    const sortedLeftArray: [] = mergesort(leftArray);
    const sortedRightArray: [] = mergesort(rightArray);
  
    return stitch(sortedLeftArray, sortedRightArray);
  }
  
  function stitch( leftArrayOrdered: [], rightArrayOrdered: []) {
    let sortedArray: [] = [];
    while (leftArrayOrdered.length && rightArrayOrdered.length) {
      if (leftArrayOrdered[0] <= rightArrayOrdered[0]) {
        sortedArray.push(leftArrayOrdered.shift());
      } else {
        sortedArray.push(rightArrayOrdered.shift());
      }
    }
    return [...sortedArray, ...leftArrayOrdered, ...rightArrayOrdered]
  }
  
  let arra1: number = [4,5,5,2,4,5,6,3,3,2,2,1,7,8,8,7];
  let result: number = mergesort(arra1);
  
  
  console.log('Mergesort before: ', arra1)
  console.log('Mergesort after: ', result)
  