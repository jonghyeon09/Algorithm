function solution(absolutes, signs) {
    var answer = signs.map((boolean, i) => !boolean ? absolutes[i] * -1 : absolutes[i])
    .reduce((acc, cur) => acc + cur, 0);
    return answer;
}