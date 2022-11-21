# Javascript

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

<br><br>

## 문자열과 숫자열

### parseInt()
- 문자열 -> 숫자열
- 소수점값 삭제


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
array.sort((a,b) => a - b);
return b - a; //내림차순
array.sort((a,b) => b - a);
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
numbers.forEach(function(number) {
    console.log(number);
});
//==
numbers.forEach(number => console.log(number));
```
---
<br>

## 배열 자르기

### slice()

- 배열로 부터 특정 범위를 복사한 값들을 담고 있는 새로운 배열을 만드는데 사용
-  원본 배열이 그대로 보존되야 하는 상황에서 매우 유용하게 사용

<br>

```js
slice(start, end)
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

### filter
-  걸러주는 역할을 하는 함수
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

### reduce

### map


