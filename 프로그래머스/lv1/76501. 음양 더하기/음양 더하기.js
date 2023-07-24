function solution(absolutes, signs) {
    return absolutes.reduce((acc, cur, i) => acc + (signs[i] ? cur * 1 : cur * -1), 0);
}