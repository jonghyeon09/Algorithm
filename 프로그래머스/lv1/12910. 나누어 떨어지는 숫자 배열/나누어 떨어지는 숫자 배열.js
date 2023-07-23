function solution(arr, divisor) {
    var answer = [];
    arr.forEach((num) => num % divisor === 0 ? answer.push(num) : null);
    answer.sort((a, b) => a - b);
    if (answer.length === 0) answer.push(-1);
    return answer;
}