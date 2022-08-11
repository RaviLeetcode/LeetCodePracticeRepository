var longestCommonPrefix = function (strs) {

    let obj = {};

    for (let item of strs) {
        obj[item] = item.length;
    }

    let vals = Object.values(obj);
    let minVal = Math.min(...vals);
    let str = "";

    for (let item in obj) {
        if (obj[item] === minVal) {
            str = item;
        }
    }

    let ar = str.split("");
    for (let i = 0; i < strs.length; i++) {
        while (!strs[i].startsWith(ar.join(""))) {
            ar.pop();
        }
    }

    return ar.join("");
};