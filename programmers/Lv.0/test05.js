/*
정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(numbers, direction) {
    // var answer = [];
    if(direction == 'right'){
        let arr = numbers.splice(0,numbers.length-1)
        arr.unshift(numbers[numbers.length-1])
        return arr
    }else{
        let arr = numbers.splice(1,numbers.length)
        arr.push(numbers[0])
        return arr
    }
}

console.log(solution([1,2,3,4], 'right'))
console.log(solution([4, 455, 6, 4, -1, 45, 6], 'left'))
