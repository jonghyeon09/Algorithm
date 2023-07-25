function solution(phone_number) {
    var answer = phone_number.slice(-4).padStart(phone_number.length, '*');
    return answer;
}