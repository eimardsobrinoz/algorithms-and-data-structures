/**
* CHALLENGE: Implement an algorithm to determine if a string has all unique characters. What If you cannot use additional
* structures?
* 
* Questions or Clarifications to take into account
* 
*  Is the string in ASCII or Unicode ? --> ASCII (which are 128 characters)
*    If not, we would need to increase the storage size
*
*  Can I assume strings come as lowecase? 
*    IF so... it turns out to be even less characters
*
*
*   SOLUTION: 
*      - Make use of Set
*      - Time Complexity: O(n) where n is the length of the string.
*      - Space Complexity: O(1)
*        Anyway, since the for loop is not going to be iterate through more than 128 characters that could be
*        considered as constat O(1)
*       If we do not assume that the set is fixed, we could express the complexity of this algorithm as:
*         Time complexity: O(min(c,n)) where n is the lenght of the string and c the size of the character set.
*         Space complexity: O(c)
*
*    But, If we could not use any additional data structure?:
*       - Approach 1: Double foor loop. Therefore, with a cuadratic Complexity O(n^2)
*       - Approach 2: Sort the string which is O(n Log n) and iterate the string searching if any neighbour matches
*/

function isUniqueChars(word: string): boolean {
  let length: string = word.length;
  if (length > 128) return false;
  const char_set: Set<string> = new Set<string>();
  for(let i = length - 1; i >= 0; i--) {
    const element: string = word.charAt(i);
    if (char_set.has(element)) return false;
    char_set.add(element);
  }
  return true;
}

console.log('Does "Hello" has all unique characters?', isUniqueChars('Hello') ? 'Yes' : 'No');
console.log('Does "World" has all unique characters?', isUniqueChars('World') ? 'Yes' : 'No' );
