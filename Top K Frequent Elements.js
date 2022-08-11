
function findMaxRepeated(nums, k) {
    let obj = {}
    for (let item of nums) {
        if (!obj[item]) {
            obj[item] = 1;
        } else {
            obj[item] += 1;
        }
    }

    let sorted = Object.keys(obj).sort((a, b) => {
        return obj[a] - obj[b];
    });

    if (Object.keys(obj).length !== k) {
        for (let i = 0; i < k - 1; i++) {
            sorted.shift();
        }
        return sorted;
    } else {
        return Object.keys(obj).sort();
    }
}

findMaxRepeated([3, 0, 1, 0], 1);
