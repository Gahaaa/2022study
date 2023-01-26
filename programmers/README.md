# Javascript

## 문자, 숫자

### String()

문자로 변환

### Number()

숫자로 변환

---

<br><br>

## Math()

### Math.trunc()

기능은 숫자의 **정수** 부분만 표시

<br>

### Math.floor()

소수점 이하를 **버림**

<br>

### Math.ceil()

소수점 이하를 **올림**

<br>

### Math.round()

소수점 이하를 **반올림**

---

<br><br>

## Ararry

### indexOf()

사용 가능

---

### 대문자 소문자

- toUpperCase()
- toLowerCase()

```js
var a = "ABC abc";

a.toUpperCase();

// ABC ABC

var a = "ABC abc";

a.toLowerCase();

//결과 : abc abc
```

<br><br>

## 문자열과 숫자열

### parseInt()

- 문자열 -> 숫자열
- 소수점값 삭제

<br>

### String()

- 숫자열 -> 문자열

---

<br><br>

## 배열 만들기

### split()

```js
string.split(separator, limit);
/* 
문자열을 'separator'로 잘라서,
'limit' 크기 이하의 배열에 잘라진 문자열을 저장하여 리턴
*/
```

---

<br><br>

## 배열 합치기

문법

```js
arr.join([separator]);
```

separator는 매개변수로, 배열의 각 요소를 구분할 문자열이다.

이 구분자는 필요한 경우 문자열로 변환되고, 생략하면 배열의 원소들의 쉼표로 구분된다.

<br>

```js
const arr = ["바람", "비", "물"];

console.log(arr.join());
// 바람,비,물

console.log(arr.join(""));
// 바람비물

console.log(arr.join("-"));
// 바람-비-물
```

<br><br>

---

## 배열 정렬하기 sort()

1. 기본적으로 오름차순으로 정렬
2. 배열 요소를 문자열로 캐스팅하고 변환된 문자열을 비교하여 순서를 결정

```js
var numbers = [1, 10, 2, 20, 3, 30];
numbers.sort();

console.log(numbers); // [1,10,2,20,3,30]
```

->문자열을 비교하므로 1, 10, 2, 20, 3, 30 순서로 정렬

이 문제를 해결하기 위해 <b>비교함수</b> 사용해야 함

<br>

### 비교함수(compareFunction)

<b>비교함수 구문</b>

```js
function comapre(a, b) {
  // 정렬 로직
  // return값은 숫자
  return a - b; //오름차순
  array.sort((a, b) => a - b);
  return b - a; //내림차순
  array.sort((a, b) => b - a);
}
```

---

## for, forEach

<br>

### for

```js
for (i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

### forEach

<br>
다음 매개변수(parameter)와 함께 배열의 각 요소에 적용하게 될 콜백 함수(callback 
function)를 전달합니다.

- Current Value (명명된 매개변수) - 처리할 현재 요소
- Index (선택적 매개변수) - 처리할 현재 요소의 인덱스
- Array (선택적 매개변수) - forEach 메서드를 호출한 배열

```js
arr.forEach(func(value, index, array));
/*
value : 현재 순회 중인 요소
index : 현재 순회 중인 요소의 index
array : 배열 객체
*/
arr.forEach((number) => console.log(number));
```

---

<br>

## 배열 자르기

### slice()

- 배열로 부터 특정 범위를 복사한 값들을 담고 있는 새로운 배열을 만드는데 사용
- 원본 배열이 그대로 보존되야 하는 상황에서 매우 유용하게 사용

<br>

```js
slice(start, end);
```

start: 추출 시작점에 대한 인덱스.

- undefined인 경우: 0부터 slice 합니다.
- 음수를 지정한 경우: 배열의 끝에서부터의 길이를 나타낸다. slice(-2)를 하면 배열의 마지막 2개의 요소를 추출합니다.
- 배열의 길이와 같거나 큰 수를 지정한 경우: 빈 배열을 반환합니다.

  <br>

end: 추출을 종료할 기준 인덱스. (end를 제외하고 그 전까지의 요소만 추출합니다.)

- 지정하지 않을 경우: 배열의 끝까지 slice 합니다.
- 음수를 지정한 경우: 배열의 끝에서부터의 길이를 나타낸다. slice(2, -1)를 하면 세 번째부터 끝에서 두 번째 요소까지 추출합니다.
- 배열의 길이와 같거나 큰 수를 지정한 경우: 배열의 끝까지 추출합니다.

<br><br>

### splice()

- 배열로 부터 특정 범위를 삭제하거나 새로운 값을 추가 또는 기존 값을 대체
- -은 삭제된 값을 담고 있는 새로운 배열이 반환될 뿐만 아니라 원본 배열에도 변경이 가해짐

---

<br>

### filter

- 걸러주는 역할을 하는 함수
- filter 사용법

```js
const numbers = [1];

numbers.filter((number, index, source) => {
  // number: 요소값
  // index: source에서 요소의 index
  // source: 순회하는 대상

  console.log(number);
  // 1

  console.log(index);
  // 0

  console.log(source);
  // [1]

  return number > 3;
});
```

<br>

### reduce

- 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환

```js
arr.reduce(callback[, initialValue])

```

**callback : 배열의 각 요소에 대해 실행할 함수. 다음 네 가지 인수를 가짐**

- accumulator : 누산기. 콜백의 반환값을 누적. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값임
- currentValue : 처리할 현재 요소
- currentIndex (Optional) : 처리할 현재 요소의 인덱스. initialValue를 제공한 경우 0, 아니면 1부터 시작
- array (Optional) : reduce()를 호출한 배열

<br>
 <b>initialValue (Optional) : callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용. 빈 배열에서 초기값 없이 reduce()를 호출하면 오류 발생__</b>

 <br>

```js
const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((acc, cur, idx) => {
  return (acc += cur);
}, 0);
console.log(result); // 15

const arr2 = [1, 2, 3, 4, 5];
const result2 = arr2.reduce((acc, cur, idx) => {
  return (acc += cur);
}, 10);
console.log(result2); // 25
```

### map

예시

```js
let arr = [3, 4, 5, 6];

// for (let i = 0; i < arr.length; i++){
//   arr[i] = arr[i] * 3;
// }

let modifiedArr = arr.map(function (element) {
  return element * 3;
});

console.log(modifiedArr); // [9, 12, 15, 18]
```

위의 코드에서와 같이 특정 숫자를 곱하거나, 애플리케이션에 필요한 다른 작업을 수행하는 등 요소에 어떤 변경 사항을 적용하는 데 사용

 <br>

객체 배열에서 map 사용

```js
let users = [
  { firstName: "Susan", lastName: "Steward" },
  { firstName: "Daniel", lastName: "Longbottom" },
  { firstName: "Jacob", lastName: "Black" },
];
```

<br>
완전한 map() 매소드

```js
arr.map(function (element, index, array) {}, this);
```

---

<br>

### includes

- includes 메서드는 배열이 특정 요소의 포함 여부를 판별합니다.
- 첫 인자값에는 탐색할 요소를 보내며
- 두번째 인자값에는 탐색을 시작할 위치를 보냅니다. (기본 값 0)

```js
const array = [1, 2, 3, 4, 5];

array.includes(6);
// false

array.includes(3);
// true

array.includes(3, 3);
// false
```

---

<br>

### indexOf

- indexOf 메서드는 배열에서 특정 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.

이를 이용해 -1이 나올 시 false로 판단 아닐 시 존재로 판단 할 수 있습니다.

- 첫 인자값에는 탐색할 요소를 보내며
- 두번째 인자값에는 탐색을 시작할 위치를 보냅니다. (기본 값 0)

```js
const array = [1, 2, 3, 4, 5];

array.indexOf(6);
// -1

array.indexOf(3);
// 2

array.indexOf(3, 3);
// -1
```

---

<br>

### some

- some 메서드는 해당하는 요소를 발견하는 즉시 true를 반환하며 그렇지 않고 모든 요소가 거짓을 반환하면 false를 반환합니다.

```js
const array = [1, 2, 3, 4, 5];

// callback(element, index, array)

array.some((v) => v === 3);
// true

array.some((v) => v > 5);
// false
```

- some 메서드는 object가 담겨있는 배열에서 includes와 indexOf와 다르게 더욱 유용하게 사용 가능합니다.

```js
const array = [{ name: "red" }, { name: "green" }, { name: "yellow" }];

array.some((v) => v.name === "green");
// true

array.some((v) => v.name === "pink");
// false
```

[include, indexOf, some 참고](https://gurtn.tistory.com/92)
