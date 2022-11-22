/*
문자열 my_string이 매개변수로 주어집니다.
 my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(my_string) {
    // let arr=[...my_string];
    // console.log(arr[1])
    let answer = [];

    for(i=0; i < my_string.length; i++){
        // console.log(my_string[i])
        answer.unshift(my_string[i])
       
    }

    return answer.join('');
   
}



// function solution(my_string) {
//     return my_string.split('').reverse().join('');
// }


console.log(solution("jaron"))