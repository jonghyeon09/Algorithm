function solution(s){
    let p = 0;
    let y = 0;
    s.split('').forEach((str) => {
        if (str.toLowerCase() === 'p') p += 1;
        if (str.toLowerCase() === 'y') y += 1;
    });
    return p === y;
}