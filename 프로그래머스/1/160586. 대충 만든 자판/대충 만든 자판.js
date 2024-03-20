function solution(keymap, targets) {
    const result = [];
    const existCharactor = {};
    
    for (const keyArrange of keymap) {
        for(let i = 0; i < keyArrange.length; i++) {
            const key = keyArrange[i];
            existCharactor[key] = existCharactor[key] ? Math.min(existCharactor[key], i + 1) : i + 1;
        }
    }
    
    targets.forEach(target => {
        let count = 0;
        for(let j = 0; j < target.length; j++) {
            if(!Object.keys(existCharactor).includes(target[j]))  {
                count = -1;
                break;
            } else {
                count += existCharactor[target[j]];
            }
        }
        result.push(count);
    });
        
    return result;
}