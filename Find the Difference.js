var findTheDifference = function (s, t) {

    let sObj = {};
    let tObj = {};

    for (let i = 0; i < s.length; i++) {
        if (!sObj[s[i]]) {
            sObj[s[i]] = 1;
        } else {
            sObj[s[i]] += 1;
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (!tObj[t[i]]) {
            tObj[t[i]] = 1;
        } else {
            tObj[t[i]] += 1;
        }
    }

    for (let item in sObj) {
        for (let val in tObj) {
            if (sObj[val]) {
                if (item === val && sObj[item] !== tObj[val]) {
                    return val;
                }
            } else {
                return val;
            }
        }
    }
    if (!s) {
        return t;
    }
}