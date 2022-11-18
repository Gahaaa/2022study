function solution(num_list) {
    var answer = [];
    num_list.sort(function compare(a,b){
        return b-a;
    })
    answer=num_list;
    
    return answer;
}

console.log(solution([1, 0, 1, 1, 1, 3, 5]))