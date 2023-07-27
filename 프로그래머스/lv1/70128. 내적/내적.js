function solution(a, b) {
    return a.reduce((acc, v, i) => acc + a[i] * b[i], 0);
}