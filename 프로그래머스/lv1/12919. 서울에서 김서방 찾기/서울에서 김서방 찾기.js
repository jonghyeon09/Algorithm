function solution(seoul) {
    var answer = '';
    seoul.forEach((str, i) => str === 'Kim' ? answer = i : '');
    
    return `김서방은 ${answer}에 있다`;
}