/*
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 
예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
*/
function solution(n) {
    let arr = String(n).split('');
    let answer = [];

    for(i=0; i<arr.length; i++){
        answer2.unshift(Number(arr[i]))

    }

    return answer;
}

console.log(solution(12345))


// function solution(n) {
//     return (n + '').split('').reverse().map(n => parseInt(n));
// }