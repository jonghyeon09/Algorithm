function solution(s) {
    let count = 0;
    let x = s[0];
    let arr = s.split('');
    let same = 0;
    let diff = 0;
    
    arr.forEach((el, i) => {
        if (x === el) {
            same++;
        } else {
            diff++;
        }
        
        if (same === diff) {
            count++;
            same = 0;
            diff = 0;
            
            if (i+1 < s.length) {
                x = s[i+1];
            }
        } else if (i == s.length -1) {
            count++;
        }
        
    });
    
    return count;
}