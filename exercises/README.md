<!-- BEGIN TITLE -->
# Document and Pass
<!-- END TITLE -->

<!-- BEGIN TOC -->
> 7/10/2020, 15:21:38

- [0-hello-world](#0-hello-world)
- [1-remove-from-array](#1-remove-from-array)
- [1-repeat-string](#1-repeat-string)
- [1-reverse-string](#1-reverse-string)
- [1-sum-all](#1-sum-all)
- [2-fibonacci](#2-fibonacci)
- [2-get-the-titles](#2-get-the-titles)
- [2-leap-years](#2-leap-years)
- [2-palindromes](#2-palindromes)
- [3-caesar](#3-caesar)
- [3-find-the-oldest](#3-find-the-oldest)
- [3-pig-latin](#3-pig-latin)
- [3-snake-case](#3-snake-case)
<!-- END TOC -->

<!-- BEGIN DOCS -->
---

## [./0-hello-world](./0-hello-world)

<a name="hello"></a>

## hello(thing) ⇒ <code>string</code>
A very simple function, it greets whatever you tell it to


**Returns**: <code>string</code> - a friendly greeting  

| Param | Type | Description |
| --- | --- | --- |
| thing | <code>string</code> | the thing to greet |

**Example**  
```js
const greeting = hello('World');console.log(greeting); // 'Hello, World!'
```
**Test Report**
```
Started
......


2 specs, 0 failures
Finished in 0.018 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-remove-from-array](./1-remove-from-array)

<a name="removeFromArray"></a>

## removeFromArray(arr, ...items) ⇒ <code>Array</code>
A function that takes an array and some other arguments then removes the other arguments fromthat array


**Returns**: <code>Array</code> - - the filtered list of values  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | the list of values to check |
| ...items | <code>object</code> | the list of items to filter |

**Example**  
```js
const filterList = removeFromArray([1, 2, 3, 4], 3, "tacos");console.log(filterList); // [1,2,4]
```
**Test Report**
```
Started
.....................


7 specs, 0 failures
Finished in 0.019 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-repeat-string](./1-repeat-string)

<a name="repeatString"></a>

## repeatString(str, nr) ⇒ <code>String</code>
A function that simply repeats the string a given number of times


**Returns**: <code>String</code> - - user's input repeated number of times  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | user's input to be repeated |
| nr | <code>Number</code> | the number of times it will be repeated |

**Example**  
```js
const repeatString = repeatString('hey', 10);console.log(repeatString); // 'heyheyheyheyheyheyheyheyheyhey' 
```
**Test Report**
```
Started
.....................


7 specs, 0 failures
Finished in 0.017 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-reverse-string](./1-reverse-string)

<a name="reverseString"></a>

## reverseString(str) ⇒ <code>String</code>
A function called `reverseString` that returns its input, reversed


**Returns**: <code>String</code> - - reversed user's input  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | user's input to be reversed |

**Example**  
```js
const revString = reverseString('hello there');console.log(revString); // 'ereht olleh' 
```
**Test Report**
```
Started
............


4 specs, 0 failures
Finished in 0.008 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-sum-all](./1-sum-all)

<a name="sumAll"></a>

## sumAll(nr1, nr2) ⇒ <code>Number</code>
A function that takes 2 integers and returns the sum of every number between(and including) them


**Returns**: <code>Number</code> - - summary of all the numbers between this number, including numbers that were input  

| Param | Type | Description |
| --- | --- | --- |
| nr1 | <code>Number</code> | number 1, user's input |
| nr2 | <code>Number</code> | number 2, user's input |

**Example**  
```js
const sum = sumAll(1, 4000);console.log(sum); // 8002000 
```
**Test Report**
```
.[33m10.[39m
Started
..................


6 specs, 0 failures
Finished in 0.014 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-fibonacci](./2-fibonacci)

<a name="fibonacci"></a>

## fibonacci(nr) ⇒ <code>Number</code>
A function that returns a specific member of the fibonacci sequence


**Returns**: <code>Number</code> - - the number of the fibonacci sequence  

| Param | Type | Description |
| --- | --- | --- |
| nr | <code>Number</code> | the position of the number in the fibonacci sequence |

**Example**  
```js
const num = fibonacci(25);console.log(num); // 75025
```
**Test Report**
```
Started
...........................


9 specs, 0 failures
Finished in 0.019 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-get-the-titles](./2-get-the-titles)

<a name="getTheTitles"></a>

## getTheTitles()

**Test Report**
```
Started
.F.

Failures:
1) getTheTitles gets titles
.    Expected undefined to equal [ 'Book', 'Book2' ]..

1 spec, 1 failure
Finished in 0.007 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-leap-years](./2-leap-years)

<a name="leapYears"></a>

## leapYears()

**Test Report**
```
Started
.F..F..F..F..F..F.

Failures:
1) leapYears works with non century years
.    Expected undefined to equal true..

2) leapYears works with non century years
.    Expected undefined to equal false..

3) leapYears works with ridiculously futuristic non century years
.    Expected undefined to equal true..

4) leapYears works with century years
.    Expected undefined to equal false..

5) leapYears works with century years
.    Expected undefined to equal true..

6) leapYears works with century years
.    Expected undefined to equal false..

6 specs, 6 failures
Finished in 0.025 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-palindromes](./2-palindromes)

<a name="palindromes"></a>

## palindromes()

**Test Report**
```
Started
.F..F..F..F..F.

Failures:
1) palindromes works with single words
.    Expected undefined to equal true..

2) palindromes works with punctuation
.    Expected undefined to equal true..

3) palindromes works with multiple words
.    Expected undefined to equal true..

4) palindromes works with multiple words
.    Expected undefined to equal true..

5) palindromes doesn't just always return true
.    Expected undefined to equal false..

5 specs, 5 failures
Finished in 0.018 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-caesar](./3-caesar)

<a name="caesar"></a>

## caesar()

**Test Report**
```
Started
.F..F..F..F..F..F..F.

Failures:
1) caesar works with single letters
.    Expected undefined to equal 'B'..

2) caesar works with words
.    Expected undefined to equal 'Bbb'..

3) caesar works with phrases
.    Expected undefined to equal 'Mjqqt, Btwqi!'..

4) caesar works with negative shift
.    Expected undefined to equal 'Hello, World!'..

5) caesar wraps
.    Expected undefined to equal 'A'..

6) caesar works with large shift factors
.    Expected undefined to equal 'Ebiil, Tloia!'..

7) caesar works with large negative shift factors
.    Expected undefined to equal 'Ebiil, Tloia!'..

7 specs, 7 failures
Finished in 0.036 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-find-the-oldest](./3-find-the-oldest)

<a name="findTheOldest"></a>

## findTheOldest()

**Test Report**
```
Started
.F..F..F.

Failures:
1) findTheOldest finds the oldest person!
.    TypeError: Cannot read property 'name' of undefined.

2) findTheOldest finds the oldest person if someone is still living
.    TypeError: Cannot read property 'name' of undefined.

3) findTheOldest finds the oldest person if the OLDEST is still living
.    TypeError: Cannot read property 'name' of undefined.

3 specs, 3 failures
Finished in 0.018 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-pig-latin](./3-pig-latin)

<a name="translate"></a>

## translate()

**Test Report**
```
Started
.F..F..F..F..F..F..F..F..F.

Failures:
1) #translate translates a word beginning with a vowel
.    Expected undefined to equal 'appleay'..

2) #translate translates a word beginning with a consonant
.    Expected undefined to equal 'ananabay'..

3) #translate translates a word beginning with two consonants
.    Expected undefined to equal 'errychay'..

4) #translate translates two words
.    Expected undefined to equal 'eatay iepay'..

5) #translate translates a word beginning with three consonants
.    Expected undefined to equal 'eethray'..

6) #translate counts "sch" as a single phoneme
.    Expected undefined to equal 'oolschay'..

7) #translate counts "qu" as a single phoneme
.    Expected undefined to equal 'ietquay'..

8) #translate counts "qu" as a consonant even when its preceded by a consonant
.    Expected undefined to equal 'aresquay'..

9) #translate translates many words
.    Expected undefined to equal 'ethay ickquay ownbray oxfay'..

9 specs, 9 failures
Finished in 0.024 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-snake-case](./3-snake-case)

<a name="snakeCase"></a>

## snakeCase()

**Test Report**
```
Started
.F..F..F..F..F..F.

Failures:
1) snakeCase works with simple lowercased phrases
.    Expected undefined to equal 'hello_world'..

2) snakeCase works with Caps and punctuation
.    Expected undefined to equal 'hello_world'..

3) snakeCase works with longer phrases
.    Expected undefined to equal 'this_is_the_song_that_never_ends'..

4) snakeCase works with camel case
.    Expected undefined to equal 'snake_case'..

5) snakeCase works with kebab case
.    Expected undefined to equal 'snake_case'..

6) snakeCase works with WTF case
.    Expected undefined to equal 'snake_case_is_awesome'..

6 specs, 6 failures
Finished in 0.015 seconds

```

[TOP](#Document-and-Pass)

<!-- END DOCS -->
