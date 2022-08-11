var twoSum = function(nums, target) {
    let ar = [];
    for(let i=0;i<nums.length;i++) {
      for(let k=0;k<nums.length;k++) {
        if(i!==k) {
            if(nums[i]+nums[k]===target) {
                ar.push(i);
                ar.push(k);
                return ar;
            }
        }
    }   
    }
};