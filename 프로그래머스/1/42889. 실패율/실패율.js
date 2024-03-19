function solution(N, stages) {
    let fail = [];
    let player = stages.length;
    
    for (let i = 1; i <= N; i++) {
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        fail.push([i, curr/reach]);
    }
    fail.sort((a, b) => b[1] - a[1]);
    
    return fail.map(x => x[0]);
}