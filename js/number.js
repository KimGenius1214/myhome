'use strict'
let ans = prompt("주민등록번호를 입력하세요");

let result1 = 0;
let arr = [2,3,4,5,6,7,8,9,2,3,4,5];

for (let i = 0; i < arr.length; i++) {
    result1 += (Number(ans.substring(i,i+1)) * arr[i]); //주민번호와 배열 곱하기
}

let result2 = 11 - (result1 % 11) ;
if(result2 >= 10) result2 %= 10;             
//11로 나눈 후 11로 빼기 나눈 값이 10보다 클 시 10으로 나누기
window.onload = function () {
if(result2 == Number(ans.substring(12))) document.getElementById("result").innerHTML = "유효한 주민등록번호입니다.";
else document.getElementById("result").innerHTML ="유효하지 않은 주민등록번호입니다.";   }    
// 값 출력