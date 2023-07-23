function solution(arr, divisor) {
    var answer = arr.filter(num => num % divisor === 0);
    answer.sort((a, b) => a - b);
    return answer.length === 0 ? [-1] : answer;
}