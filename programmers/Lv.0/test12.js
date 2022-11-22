/*
사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 
사분면은 아래와 같이 1부터 4까지 번호를매깁니다.
*/

// function solution(dot) {
//     if(dot[0] > 0 && dot[1] > 0){
//         return 1;
        
//     }else if(dot[0] < 0 && dot[1] > 0){
//         return 2; 
        
//     }else if(dot[0] < 0 && dot[1] < 0){
//         return 3; 
        
//     }else{
//         return 4;
        
//     }
// }

// function solution(dot) {
//     const [num,num2] = dot;
//     const check = num * num2 > 0;
//     return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
// }

let dinner =['KFC','엽떡','라멘','파스타','타코'];
let din = dinner.filter((number, idx) => {
    return (idx !== 1 && idx !== 2 && idx !== 1)
    
})
console.log(din)

let lunch= ["신의주국밥", "미즈컨테이너", "갈비탕", "쌀국수", "라멘", "이춘복참치"];