/** product: calculate the product of an array of numbers. */

function product(nums) {
  // Base case
  if (nums.length === 1) {
    return nums[0];
  }

  const last = nums.pop();
  nums[nums.length - 1] *= last; 

  
  return product(nums);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  // Base case: if the array has only one word, return its length
  if (words.length === 1) {
    return words[0].length;
  }

  const currentWordLength = words[0].length;
  const maxLengthOfRest = longest(words.slice(1));

  return Math.max(currentWordLength, maxLengthOfRest);
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  // Base case: if the string is empty or has one character, return it
  if (str.length <= 1) {
    return str;
  }

  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // Base case: if the string is empty or has one character, it's a palindrome
  if (str.length <= 1) {
    return true;
  }

  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return isPalindrome(str.slice(1, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  // Base case: if the array is empty, return -1
  if (index >= arr.length) {
    return -1;
  }

  if (arr[index] === val) {
    return index;
  }

  return findIndex(arr, val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  // Base case: if the string is empty or has one character, return it
  if (str.length <= 1) {
    return str;
  }

  return str[str.length - 1] + revString(str.slice(0, -1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];

  for (let key in obj) {
    if (typeof obj[key] === "string") {
      strings.push(obj[key]);
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      strings = strings.concat(gatherStrings(obj[key]));
    }
  }

  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  // Base case: if the range is invalid, the value is not in the array
  if (left > right) {
    return -1;
  }

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === val) {
    return mid;
  }

  if (val < arr[mid]) {
    return binarySearch(arr, val, left, mid - 1); 
  } else {
    return binarySearch(arr, val, mid + 1, right); 
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
