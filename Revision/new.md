<details>
<summary>📁 (#) <code>group</code>, <code>groupCollapsed</code> and <code>groupEnd</code></summary>

```js
console.groupCollapsed ("Aaj ka hisaab");
console.log("daal chaawal 50");
console.log("neebu paani 20");
console.log("paani puri 50");
console.groupEnd();
```
</details>

<details>
<summary>🔢 (#) string to number using <code>+</code></summary>

```js
console.log(typeof +"50"); // -> Output : number
```
</details>

<details>
<summary>🔁 (#) duplicate example</summary>

```js
console.log(typeof +"50"); // -> Output : number
```
</details>

<details>
<summary>🧩 (6) <code>const object</code> — modify properties</summary>

```js
const person = { name: "Alice", age: 25, city: "New York" };
console.log("Before update:", person);

// Modifying properties
person.age = 26;
person.city = "Los Angeles";

// Adding a new property
person.country = "USA";

console.log("After update:", person);
```
</details>

<details>
<summary>🔧 (7) <code>string → number</code> using 3 methods</summary>

```js
let str = "50";

// Method 1: Using Number()
let num1 = Number(str);
console.log(num1, typeof num1); // 50 "number"

// Method 2: Using parseInt()
let num2 = parseInt(str);
console.log(num2, typeof num2); // 50 "number"

// Method 3: Using Unary + operator
let num3 = +str;
console.log(num3, typeof num3); // 50 "number"
```
</details>

<details>
<summary>🔎 (8) find if <code>"JavaScript"</code> contains <code>"Script"</code> without <code>.includes()</code></summary>

```js
let str = "JavaScript";

// Method 1: Using .indexOf()
console.log(str.indexOf("Script") !== -1); // true

// Method 2: Using .search()
console.log(str.search("Script") !== -1); // true
```
</details>

<details>
<summary>➕ (9) <code>array sum</code> with <code>.reduce()</code></summary>

```js
let numbers = [10, 20, 30, 40, 50];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum); // Sum: 150
```
</details>

<details>
<summary>❓ (10) <code>undefined</code>, <code>null</code>, and <code>NaN</code> — quick examples</summary>

| Concept     | Meaning                                            | Example                                 |
| ----------- | -------------------------------------------------- | --------------------------------------- |
| `undefined` | Declared but not assigned a value                  | `let x; console.log(x); // undefined`   |
| `null`      | Intentional absence of a value                     | `let y = null; console.log(y); // null` |
| `NaN`       | Result of invalid numeric operation (Not a Number) | `console.log("hello" / 2); // NaN`      |
****
```js
let a; // undefined
console.log(a); // undefined

let b = null; // explicitly null
console.log(b); // null

let c = "hello" / 2; // invalid math operation
console.log(c); // NaN
console.log(typeof NaN); // "number" (JS quirk)
```
</details>


---

## **3️⃣ Loops (5 Questions)**

<details>
<summary>11. Write a for loop to print numbers from 10 to 1 in reverse.</summary>

```js
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
```
</details>

<details>
<summary>12. Use a while loop to print multiples of 3 from 3 to 30.</summary>

```js
let num = 3;

while (num <= 30) {
    console.log(num);
    num += 3;
}
```
</details>

<details>
<summary>13. Write a program to calculate the sum of numbers from 1 to 100 using a loop.</summary>

```js
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log("Sum:", sum); // Output: 5050
```
</details>

<details>
<summary>14. Create a nested loop to print a star pattern.</summary>

```js
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}
```
</details>

<details>
<summary>15. Use a for...of loop to iterate over the string "JavaScript".</summary>

```js
let str = "JavaScript";

for (let char of str) {
    console.log(char);
}
```
</details>

---

## **4️⃣ Arrays (5 Questions)**

<details>
<summary>16. Remove duplicate values from an array.</summary>

```js
let arr = [1, 2, 3, 2, 4, 3, 5];
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // [1, 2, 3, 4, 5]
```
</details>

<details>
<summary>17. Find the second largest number in an array.</summary>

```js
function secondLargest(arr) {
    let sorted = [...new Set(arr)].sort((a, b) => b - a);
    return sorted.length > 1 ? sorted[1] : null;
}

console.log(secondLargest([10, 20, 5, 30, 30])); // Output: 20
```
</details>

<details>
<summary>18. Sort an array in descending order.</summary>

```js
let numbers = [5, 2, 9, 1, 5, 6];
numbers.sort((a, b) => b - a);
console.log(numbers); // [9, 6, 5, 5, 2, 1]
```
</details>

<details>
<summary>19. Reverse an array without using <code>.reverse()</code>.</summary>

```js
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]
```
</details>

<details>
<summary>20. Find the most frequent element in an array.</summary>

```js
function mostFrequent(arr) {
    let freqMap = {};
    let maxFreq = 0, mostFrequentNum = null;

    for (let num of arr) {
        freqMap[num] = (freqMap[num] || 0) + 1;
        if (freqMap[num] > maxFreq) {
            maxFreq = freqMap[num];
            mostFrequentNum = num;
        }
    }
    return mostFrequentNum;
}

console.log(mostFrequent([1, 3, 3, 2, 3, 2, 2, 2, 2])); // Output: 2
```
</details>

<details>
<summary> create <code>myMap()</code> to use it with <code>anyArr.myMap()</code></summary>

```js
Syntax : 
Array.prototype.myMap = function(callback, thisArg) {

    console.log(this); // "this" is the array that called the method.
}

```

```js
Example : 
let nums = [10, 20, 30];

nums.myMap(function(x) {
    console.log(this); // logs [10, 20, 30]
});

```
</details>

<br>

# Day 24 

<details>
  <summary><strong>Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).</strong></summary>

  ```js
  function delayedExecution(callback) {
      setTimeout(callback, 3000);
  }

  // Example usage
  delayedExecution(() => console.log("Executed after 3 seconds"));
  ```
</details>

<details>
  <summary><strong>Implement your own version of `.map()` as a higher-order function.</strong></summary>

  ```js
  function customMap(array, callback) {
      let result = [];
      for (let i = 0; i < array.length; i++) {
          result.push(callback(array[i], i, array)); // Apply callback to each element
      }
      return result;
  }

  // Example usage
  console.log(customMap([1, 2, 3], num => num * 2)); 
  // Output: [2, 4, 6]
  ```
</details>

<details>
  <summary><strong>Write a function that uses closures to create a counter.</strong></summary>

  ```js
  function createCounter() {
      let count = 0;
      return function() { // Closure retains access to `count`
          return ++count;
      };
  }

  // Example usage
  const counter = createCounter();
  console.log(counter()); // Output: 1
  console.log(counter()); // Output: 2
  console.log(counter()); // Output: 3
  ```
</details>

<details>
  <summary><strong>Implement a function that limits how many times another function can be called (Closure + HOF).</strong></summary>

  ```js
  function limit(fn, limit) {
      let calledtimes = 0;
      return function () {
          if (calledtimes < limit) {
              calledtimes++;
              fn();
          }
      };
  }

  // Example usage
  let fn = limit(() => console.log("hello"), 3);
  fn(); // "hello"
  fn(); // "hello"
  fn(); // "hello"
  fn(); // (No output, limit reached)
  ```
</details>

---
