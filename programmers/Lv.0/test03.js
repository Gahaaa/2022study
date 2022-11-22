function solution(numbers) {
    var answer = 0;
    var sum = 0;
    numbers.forEach(numbers => {
        sum+=numbers
        
    });

    answer=sum/numbers.length;
    return answer;
}

console.log(solution([1,4,8,10]))