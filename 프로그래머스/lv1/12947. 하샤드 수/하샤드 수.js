function solution(x) {
    let sum = 0;
    let arr = x.toString().split('').map(x => Number(x));
    
    arr.forEach(num => sum += num);
    return (x % sum === 0) ? true : false
}