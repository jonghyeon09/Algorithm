function solution(n, m, section) {
    var answer = 0;
    var painted = 0;
    
    section.forEach((n) => {
        if (painted < n) {
            answer++;
            painted = n + m - 1;
        }
    });
    
    return answer;
}