function solution(s) {
    return s.split(' ').map(a => [...a].map((b, j) => j % 2 === 0 ? b.toUpperCase() : b.toLowerCase()).join('')).join(' ');
}